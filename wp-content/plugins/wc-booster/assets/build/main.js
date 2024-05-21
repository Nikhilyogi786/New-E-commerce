/*! wc-booster - v1.0.0 - 2024-05-10 */(function( $ ){
var circular_focus = {
	init: function(){
		var _this = this;
		this.initModals();
		$( document ).on( "keydown", function( e ){

			var isTabPressed = e.key === 'Tab' || e.keyCode === 9;
			if( _this.modals.length == 0 || !isTabPressed )
			  return;

			var $wrapper = $( e.target ).closest( '.wc-booster-circular-focus' ),
				index    = $wrapper.data( 'circular-focus-count' );

			if( 'undefined' == typeof index )
				return;

			var modal = _this.modals[ index ],
				firstFocusableElement = modal[0],
				lastFocusableElement = modal[ modal.length - 1 ];

			if( e.shiftKey ){
				if( document.activeElement == firstFocusableElement ){
					$( lastFocusableElement ).trigger( 'focus' );
					e.preventDefault();
				}
			}else{
				if( document.activeElement === lastFocusableElement ){ 
					$( firstFocusableElement ).trigger( 'focus' );
					e.preventDefault();
				}
			}
		});
	},
	modals: [],
	initModals: function(){

		var focusableElements = 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])',
			_this = this;
		
		this.modals = [];

		$( '.wc-booster-circular-focus' ).each(function( i, e ){ 
			$( this ).attr( 'data-circular-focus-count', i );
			_this.modals.push( $( this ).find( focusableElements ) );
		});
	}
}

$(document).ready(function(){
	circular_focus.init();
});
var UI = {
	block: function( $node ) {
        if ( ! this.is_blocked( $node ) ) {
            $node.addClass( 'processing' ).block( {
                message: null,
                overlayCSS: {
                    background: '#fff',
                    opacity: 0.6
                }
            } );
        }
    },
    is_blocked: function( $node ) {
        return $node.is( '.processing' ) || $node.parents( '.processing' ).length;
    },
    unblock: function( $node ) {
        $node.removeClass( 'processing' ).unblock();
    }
};

function Loader( $ele ){

    var cls = 'loading';

    this.element = $ele;

    this.activate = function(){
        this.element.addClass( cls );
    }

    this.deactivate = function(){
        this.element.removeClass( cls );
    }
}

var $http = function( args ){

    var $btn = new Loader( args.button );
    $btn.activate();

    return $.ajax({
        url   : args.url,
        type  : 'post',
        data  : args.data,
        error : function( res ){
            // args.error( res );
        },  
        success : function( res ){
            args.success( res.data || res );
        },
        complete: function(){
            if( args.complete ){
                args.complete();
            }
            $btn.deactivate();
        }
    });
}
var Coupon = {
	init: function(){
		$( 'form.wc-booster-checkout-coupon' ).hide().on( 'submit', this.submit );
		$( document.body ).on( 'click', 'a.wc-booster-showcoupon', this.show_coupon_form );
	},
	show_coupon_form: function(){
		$( '.wc-booster-checkout-coupon' ).slideToggle( 400, function() {
			$( '.wc-booster-checkout-coupon' ).find( ':input:eq(0)' ).trigger( 'focus' );
		});
		return false;
	},
	submit: function() {
		var $form = $( this );

		if ( $form.is( '.processing' ) ) {
			return false;
		}

		$form.addClass( 'processing' ).block({
			message: null,
			overlayCSS: {
				background: '#fff',
				opacity: 0.6
			}
		});

		var data = {
			security:    wc_checkout_params.apply_coupon_nonce,
			coupon_code: $form.find( 'input[name="coupon_code"]' ).val()
		};

		$.ajax({
			type: 'POST',
			url:  wc_checkout_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'apply_coupon' ),
			data: data,
			success: function( code ) {
				$( '.woocommerce-error, .woocommerce-message' ).remove();
				$form.removeClass( 'processing' ).unblock();

				if ( code ) {
					Swal.fire( code );
					// $form.before( code );
					$form.slideUp();
					$( document.body ).trigger( 'applied_coupon_in_checkout', [ data.coupon_code ] );
					$( document.body ).trigger( 'update_checkout', { update_shipping_method: false } );
				}
			},
			dataType: 'html'
		});

		return false;
	},
};

$( document ).on( 'click', '.wc-booster-remove-product', function(e){
	e.preventDefault();
	var $ele     = $( e.currentTarget );
	var $wrapper = $( this ).closest( '.woocommerce' );
	
	$.ajax({
	    type: 'GET',
	    url: $ele.attr( 'href' ),
	    dataType: 'html',
        beforeSend: function(){
			UI.block( $wrapper );
        },
	    success: function( response ) {
	        var $html = $.parseHTML( response );
	        $( '.woocommerce-cart-form' ).replaceWith( 
	        	$( '.woocommerce-cart-form', $html ) 
	        );
	        $( 'body' ).trigger( 'wc_booster_updated_cart' );
	    },
	    complete: function() {
	        UI.unblock( $wrapper );
	    }
	});
});

$( document ).on( 'click', '.wc-booster-update-cart', function(){
	
	var $form    = $( this ).closest( 'form' );
	var $wrapper = $( this ).closest( '.woocommerce' );

	$.ajax({
        type: $form.attr( 'method' ),
        url:  $form.attr( 'action' ),
        data: $form.serialize(),
        dataType: 'html',
        beforeSend: function(){
			UI.block( $wrapper );
        },
        success:  function( response ){

        	var $html = $.parseHTML( response );
	        $( '.woocommerce-cart-form' ).replaceWith( 
	        	$( '.woocommerce-cart-form', $html ) 
	        );

	        $( 'body' ).trigger( 'wc_booster_updated_cart' );
	        $( 'body' ).trigger( 'update_checkout' );
        },
        complete: function(){
            UI.unblock( $wrapper );
        }
    });
});

$( document ).on( 'click', '.wc-booster-coupon-trigger', function( e ){
    e.preventDefault();
    $( this ).next().slideToggle();
});

$( document ).ready(function(){
	Coupon.init();
});
$(document).on("click", ".wc-booster-place-order", function (e) {
  e.preventDefault();
  $("#place_order").trigger("click");
});

$(document).ready(function () {
  setTimeout(function () {
    // unbind this event in checkout page
    $(document.body).off("click", "a.woocommerce-terms-and-conditions-link");
  }, 1000);

  $("body").on("applied_coupon_in_checkout", function (e, c) {
    $(".wc-booster-update-cart").trigger("click");
  });

  $("body").on("removed_coupon_in_checkout", function (e, c) {
    $(".woocommerce-message").remove();
    $("form.wc-booster-checkout-coupon")
      .find('input[name="coupon_code"]')
      .val("");
    $(".wc-booster-update-cart").trigger("click");
  });

  // Handle custom terms and condition checkbox
  $("body").on("checkout_error", function (e, message) {
    if (!$(".wc-booster-terms-checkbox").is(":checked")) {
      $(".wc-booster-terms-checkbox-wrapper").addClass(
        "woocommerce-invalid woocommerce-invalid-required-field"
      );
    } else {
      $(".wc-booster-terms-checkbox-wrapper")
        .removeClass("woocommerce-invalid")
        .removeClass("woocommerce-invalid-required-field");
    }
  });

  $(".wc-booster-terms-checkbox").on("change", function (e) {
    var checked = $(this).is(":checked");
    if (checked) {
      $("#terms").prop("checked", true);
    } else {
      $("#terms").prop("checked", false);
    }
  });

  var shippingMethod = function () {
    var html = "";
    $("#shipping_method li").each(function () {
      var label = $(this).find("label").html();
      var $sm = $(this).find(".shipping_method");
      var cls = $sm.is(":checked") ? "checked" : "";
      var id = $sm.attr("id");
      html += '<li class="' + cls + '" data-id="' + id + '">' + label + "</li>";
    });

    $(".wc-booster-shipping-methods").html(html);

    $(document).on("click", ".wc-booster-shipping-methods li", function (e) {
      e.preventDefault();

      var id = $(this).data("id");
      $("#" + id).trigger("click");
      console.log(id);
    });
  };

  //shippingMethod();
});

var CART = {
	update: function( $html ){
		
		$( '.wc-booster-mini-cart-product-wrapper' ).replaceWith( 
			$( '.wc-booster-mini-cart-product-wrapper', $html ) 
		);

		$( '.wc-booster-mini-cart-btn' ).replaceWith( 
			$( '.wc-booster-mini-cart-btn', $html ) 
		);
	},
	updateCount: function( $html ){
		$( '.slide-out-toggler .cart-icon' ).replaceWith( 
			$( '.slide-out-toggler .cart-icon', $html ) 
		);
	}
};

$(document).on( 'click', '.wc-booster-remove-mini-cart-item', function( e ) {
    e.preventDefault();

    var $ele     = $( e.currentTarget );
    var $wrapper = $ele.parents( '.wc-booster-mini-cart-product-wrapper' );
    var $item    = $ele.parents( '.wc-booster-mini-cart-product-single' );

    UI.block( $wrapper );
    
    $.ajax({
        type: 'GET',
        url: $ele.attr( 'href' ),
        dataType: 'html',
        success: function( response ) {
            $item.css({ 
                "height": $item.outerHeight(), 
                "overflow": 'hidden', 
                "width": '100%'
            }).animate({ "margin-left": '350' }, 250, 'swing', function(){
            	var $html = $.parseHTML( response );
                CART.update( $html );
                CART.updateCount( $html );
                UI.unblock( $wrapper );
            });
        },
        complete: function() {
            UI.unblock( $wrapper );
        }
    });
});

$(document).on( 'added_to_cart', function( e, fragments, hash ){
	if( $( 'body' ).hasClass( 'woocommerce-checkout' ) ){
		$( '.wc-booster-update-cart' ).trigger( 'click' );
	}else{
	    $( '.slide-out-toggler .cart-icon .count' ).text( fragments[ 'total-cart-items' ] );
	    var $html = $.parseHTML( fragments[ 'div.widget_shopping_cart_content' ] );
	    CART.update( $html );
	    $( document ).trigger( 'slide-out', [ 'mini-cart-slide', '' ] );
	}
});
$(document).ready(function(){

	var $ele = $( '.wc-booster-sticky-add-to-cart-wrapper' ),
		cls  = 'visible-sticky';

	if( $ele.length > 0 ){
		$( window ).scroll(function(){
			if( $( window ).scrollTop() > WC_BOOSTER.sticky_cart_offset ){
				$ele.addClass( cls );
			}else{
				$ele.removeClass( cls );
			}
		});
	}

	$( '.variations_form' ).on( 'hide_variation', function( e ){ 
		$( '.wc-booster-sticky-btn .add-to-cart' ).prop( 'disabled', true );
		$( '.wc-booster-sticky-btn .wc-booster-buy-now' ).prop( 'disabled', true );

		var price_html = $( '.wc-booster-sticky-add-to-cart-wrapper' ).data( 'initial_price' );
		$( '.wc-booster-sticky-add-to-cart-wrapper .price' ).replaceWith( price_html );
	});

	$( '.variations_form' ).on( 'show_variation', function( e, variation, purchasable ){ 

		if( purchasable ){
			$( '.wc-booster-buy-now' ).prop( 'disabled', false );
			$( '.wc-booster-sticky-btn .add-to-cart' ).prop( 'disabled', false );
		}

		$( '.wc-booster-sticky-add-to-cart-wrapper .price' ).replaceWith( variation.price_html );
	});
});

$( document ).on( 'click', '.specification-toggler', function(){
	$( this ).toggleClass( 'active' );
	$( this ).next().slideToggle();
});

$( document ).on( 'click', '.wc-booster-sticky-btn .add-to-cart', function( e ){
	e.preventDefault();
	$( 'form.cart .single_add_to_cart_button' ).trigger( 'click' );
});
$(document).on( 'click', '.quantity button', function(e){

    var input = $( this ).parents( 'div.quantity' ).children( 'input' );
    var hidden_input = input.attr( 'id' );
    
    var value = parseFloat( input.val() ).toFixed( 0 );
   		value = parseInt( isNaN( value ) ? 0 : value );

    var min  = parseInt( input.attr( 'min' ) ),
        max  = parseInt( input.attr( 'max' ) ),
        step = parseFloat( input.attr( 'step' ) );

    if( isNaN( max ) ){
    	max = 99999999999;
    }
 
    if( $( this ).hasClass( 'up' ) ){
        if (max == value) {
            return;
        }
        var op = +step;
    } else {
        if (min == value) {
            return;
        }
        var op = -step;
    }

    if (!(min == value && op == -step) && !(max == value && op == +step)) {
        
        let v = parseFloat(value) + op;

        $( this ).closest( '.quantity' ).find( 'input[type="number"]' ).val( v );
        $( document.body ).trigger( 'wcBoosterQuantityChanged', [ v ] );
        
    }
});
var QuickView = {
	init: function(){
		$( document ).on( 'click', '.wc-booster-quick-view', this.request );
	},
	id: 'wc-booster-quick-view',
	previousId: false,
	show: function(){
		$( document ).trigger( 'slide-out', [ QuickView.id, '' ] );
	},
	request: function( e ){

		e.preventDefault();

		var product_id = $( this ).data( 'id' );

		if( QuickView.previousId == product_id ){
			QuickView.show();
			return;
		}

		var onSuccess = function( data ){
		
			QuickView.show();
			QuickView.previousId = product_id;

			$( '#wc-booster-quick-view .slide-out-content' ).html(  data.html );
			
			setTimeout(function(){
				QuickView.gallery();
				QuickView.bindVariation();
				circular_focus.initModals();
			});
		};

		$http({
			url  : woocommerce_params.ajax_url,
			data : {
				action   : 'wc_booster_ajax_quick_view',
				security : WC_BOOSTER.ajax_nonce,
				post_id  : product_id
			},
			success : onSuccess,
			button: $(this)
		});
	},
	gallery: function(){
		$( '.woocommerce-product-gallery' ).each(function(){
			$( this ).trigger( 'wc-product-gallery-before-init', [ this, wc_single_product_params ] );
			$( this ).wc_product_gallery( wc_single_product_params );
			$( this ).trigger( 'wc-product-gallery-after-init', [ this, wc_single_product_params ] );
		});
	},
	bindVariation: function(){
		if ( typeof wc_add_to_cart_variation_params !== 'undefined' ) {
			$( '.variations_form' ).each( function() {
				$( this ).wc_variation_form();
			});
		}
	}
};

var Order = {
	init: function(){
		$( document ).on( 'submit', '#wc-booster-quick-view form.cart', this.handleSubmit );
	},
	form: false,
	button: false,
	handleSubmit: function(e){
		e.preventDefault();

		Order.form = $(this);
		Order.button  = Order.form.find( '.single_add_to_cart_button' );

		Order.request();
	},
	request: function(){

		var data = Order.form.serialize();
		$( document.body ).trigger( 'adding_to_cart', [ Order.button, data ] );

		$http({
			url    : Order.form.attr( 'action' ),
			data   : data,
			success: Order.onSuccess,
			button : Order.button
		});
	},
	onSuccess: function( res ){

		var $err = $( '.woocommerce-error-list', $( res ) );
		if( $err.length > 0 ){

			$( '.quick-view-content .quantity' ).before( $err );

			setTimeout(function(){
				$( '.quick-view-wrapper .woocommerce-error-list' ).remove();
			}, 5000);

		}else{

			// update cart on checkout page
			$( '.wc-booster-update-cart' ).trigger( 'click' );

			setTimeout(function(){
				$http({
					url: woocommerce_params.wc_ajax_url.toString().replace( 
						'%%endpoint%%', 
						'get_refreshed_fragments' 
					),
					success: function( response ){
					    $( document.body ).trigger( 'added_to_cart', [ 
						    	response.fragments, 
						    	response.cart_hash, 
						    	Order.button 
					    	] 
					    );


					},
					complete: function(){
						
					},
					button : Order.button
				});
			});
		}
	}
}

QuickView.init();
Order.init();
$(document).ready(function(){

	var template = function(opt) {

		if( !opt.thumbnail ){
			return opt.text;
		}

        var $opt = $(
           '<span><img src="' + opt.thumbnail + '" width="60px" /> ' + opt.text + '</span>'
        );

        return $opt;
	};

	var $ele = $('.wc-booster-product');
	if( $ele.length > 0 ){

	   $ele.select2({
	    	placeholder: $ele.data( 'plaecholder' ),
	    	allowClear: true,
	    	minimumInputLength: 3,
	    	ajax: {
	    		url      : WC_BOOSTER.ajax_url,
	    		method   : 'POST',
	    		dataType : 'json',
	    		data     : function( params ) {
	    		    return {
	    		        search: params.term,
	    		        security: WC_BOOSTER.ajax_nonce,
	    		        action: 'wc_booster_get_product'
	    		    }
	    		}
	    	},
	    	templateResult: template,
	    	templateSelection: template,
	    	dropdownParent: $( '.wc-booster-search-form' )
	    });

	    $ele.on( "select2:selecting", function(e) {
           window.location.href = e.params.args.data.permalink; 
           return false;
	    });

	    $ele.on( "select2:open", function(e){
	    	document.querySelector( ".select2-container--open .select2-search__field" ).focus();
	    });
	}

});

var RemoveList = {
	init: function(){
		$( document ).on( 'click', '.product-remove-btn', this.request );
	},
	request: function( e ){

		e.preventDefault();

		var product_id = $( this ).data( 'id' ),
			that = $( this );
		var onSuccess = function( data ){
			 location.reload();
		};

		$http({
			url  : woocommerce_params.ajax_url,
			data : {
				action   : 'wc_booster_ajax_wish_list_remove',
				security : WC_BOOSTER.ajax_nonce,
				post_id  : product_id
			},
			success : onSuccess,
			button: $(this)
		});
	}
};
RemoveList.init();
})(jQuery);