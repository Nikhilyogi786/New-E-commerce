(function( $ ){

	function setCookie( cname, cvalue, exdays ) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {

		var name = cname + "=";
		var decodedCookie = decodeURIComponent( document.cookie );
		var ca = decodedCookie.split( ';' );

		for( var i = 0; i < ca.length; i++ ){
			var c = ca[ i ];
			while( c.charAt(0) == ' ' ){
				c = c.substring(1);
			}

			if( c.indexOf( name ) == 0 ){
				return c.substring( name.length, c.length );
			}
		}
		return "";
	}

	var IconSelector = {
		id: null,
		perPage: 91,
		currentPage: 1,
		search: '',
		selected : '',
		preserveInitialPage: 1,
		init: function(){

			var that = this;
			$( document ).on( 'click', '.wc-booster-icon-selector-btn', function( e ){
				e.preventDefault();

				$( 'body' ).addClass( 'wc-booster-show-icon-selector' );
				that.id = $( this ).data( 'id' );
				that.selected = $( this ).data( 'value' );

				that.currentPage = 1;
				if( that.selected.length > 0 ){

					var fonts = that.getFonts();
					var i = fonts.findIndex(function( f ){
						return f == that.selected;
					});

					that.currentPage = Math.ceil( i / that.perPage );
				}

				that.preserveInitialPage = that.currentPage;

				that.paginate();
				that.pagination();

			});

			$( document ).on( 'click', '.wc-booster-icon-selector-wrapper .paginate', function( e ){
				e.preventDefault();
				that.currentPage = parseInt( $( this ).text() );

				$( '.wc-booster-icon-selector-wrapper .paginate' ).removeClass( 'active' );
				$( this ).addClass( 'active' );
				that.paginate();
			});

			$( document ).on( 'click', '.wc-booster-close-icon-selector, .wc-booster-icon-selector-wrapper .overlay', function( e ){
				e.preventDefault();
				$( 'body' ).removeClass( 'wc-booster-show-icon-selector' );
			});

			$( ".wc-booster-icon-search" ).on( 'keyup search', function(e){
				that.search = $( this ).val();
				if( that.search.length == 0 ){
					that.currentPage = that.preserveInitialPage;
				}else{
					that.currentPage = 1;
				}

				that.pagination();
				that.paginate();
			});

			$( document ).on( 'click', '.wc-booster-icon-selector .font-single', function( e ){
				e.preventDefault();
				var v = $( this ).attr( 'title' );
				$( 'input[name="' + that.id + '"]' ).val( v );
				$( '.selected-icon.' + that.id + ' i').attr( 'class', v );
				$( '.wc-booster-icon-selector .font-single' ).removeClass( 'selected' );
				$( this ).addClass( 'selected' );
			});
		},
		getFonts: function(){
			var s = this.search, fonts = $( '.wc-booster-icon-selector-wrapper' ).data( 'fonts' );
			if( s.length ){
				fonts = fonts.filter(function( f ){
					return f.includes( s );
				});
			}
			return fonts;
		},
		paginate: function(){
			var fonts = this.getFonts();

		    fonts    = fonts.slice( ( this.currentPage - 1 ) * this.perPage, this.currentPage * this.perPage ),
		    $wrapper = $( '.wc-booster-icon-selector' );

  			$wrapper.html( '' );

  			for( var i = 0; i < fonts.length; i++ ){

  				var c = this.selected == fonts[ i ] ? ' selected' : '',
  					html ='<a href="#" title="'+ fonts[ i ] + '" class="font-single' + c +'"><i class="'+ fonts[ i ] + '"></i></a>';

  				$wrapper.append( html );
  			}
		},
		pagination: function(){
			var fonts     = this.getFonts(),
				totalPage = Math.ceil( fonts.length / this.perPage ),
				$wrapper  = $( '.wc-booster-icon-selector-pagination' );

			$wrapper.html( '' ); 
			for( var i = 0; i < totalPage; i++ ){
				var c = this.currentPage == ( i+1 ) ? ' active' : '';
				var html = '<a href="#" class="paginate' + c +'">' + ( parseInt( i ) + 1 ) + '</a>';
				$wrapper.append( html );
			}
		}
	};

	var Tab = {
		init: function(){

			$( document ).on( 'click', '.wc-booster-custom-fields-tab-menu', function( e ){
				
				e.preventDefault();
				var tab = $( this ).attr( 'href' );

				// only for setting page
				if( '?page=wc_booster_options' == window.location.search ){
					setCookie( 'wc_booster_option_tab', tab, 999 );
				}

				$( '.wc-booster-custom-fields-tab-menu' ).removeClass( 'active' );
				$( this ).addClass( 'active' );

				$( '.wc-booster-custom-fields-single-tab' ).removeClass( 'active' );
				$( tab ).addClass( 'active' );
			});
		}
	};

	var ImageBrowser = {
		wrapper: false,
		json: false,
		uploader: false,
		button: false,
		init: function(){

			var $this = this;

			$( document ).on( 'click', '.wc-booster-custom-fields-image-browse', function( e ){

				e.preventDefault();

				$this.wrapper = $( this ).closest( '.wc-booster-custom-fields-image-wrapper' );

				$this.button = $( this ).find( '.wc-booster-custom-fields-image-btn-text' );

				if( $this.uploader ){
					$this.uploader.open();
					return;
				}

				$this.uploader = wp.media.frames.file_name = wp.media({
					title: WBCF.media_title,
					button: {
						text: WBCF.media_btn_text
					},
					multiple: false
				});

				$this.uploader.on( 'select', function(){
					$this.onSelect();
				});

				$this.uploader.open();
			});

			$( document ).on( 'click', '.wc-booster-custom-fields-image-delete', function( e ){ 
				
				e.preventDefault();

				var data = $( this ).data( 'required' );

				$wrapper = $( this ).closest( '.wc-booster-custom-fields-image-wrapper' );
				$wrapper.find( '.wc-booster-custom-fields-image-input' ).val( '' );
				$wrapper.find( '.wc-booster-custom-fields-image-holder' ).html( '' );

				$( this ).addClass( 'hidden' );

				$( this ).parent( '.wc-booster-custom-fields-image-btns' )
					.find( '.wc-booster-custom-fields-image-btn-text' )
					.text( WBCF.image_upload_text );
			});
		},
		onSelect: function(){
			
			var attachment = this.uploader.state().get( 'selection' ).first().toJSON();

			if( attachment ){

				var url = attachment.url;
				if( typeof attachment.sizes !== 'undefined' ){
					if( typeof attachment.sizes.thumbnail !== 'undefined' ){
						url = attachment.sizes.thumbnail.url;
					}else{
						url = attachment.sizes.full.url;
					}
				}

				var img = $( '<img />',{  src: url } );

				this.wrapper.find( '.wc-booster-custom-fields-image-input' ).val( attachment.id );
				this.wrapper.find( '.wc-booster-custom-fields-image-holder' ).html( img );
				this.wrapper.find( '.wc-booster-custom-fields-image-delete' ).removeClass( 'hidden' );
				this.wrapper.find( '.wc-booster-custom-fields-image-btn-text' ).text( WBCF.media_btn_change_text );
			}
		}
	};

	var Repeater = {

		init: function(){
			var $this = this;

			$( document ).on( 'click', '.custom-field-repeater-add', function( e ){

				e.preventDefault();

				var $wrapper = $( this ).closest( '.custom-field' ),
				$appendTo = $wrapper.find( '.custom-field-repeater-wrapper' );
				var count = $wrapper.find( '.custom-field-repeater-wrapper .repeater-single' ).length;

				var $cloned = $wrapper.find( '.sample .repeater-single' ).clone();

				var editors = []; 
				$cloned.find( '.custom-field' ).each(function( index, element ){
					var $ele = $( this ).find( 'textarea[data-repeater-type="editor"]' );
					if( $ele.length > 0 ){
						var id = 'editor-' + Math.floor( ( Math.random() * 10000000 ) );
						editors.push( id );
						$ele.attr( 'id', id );
					}
				});

				$cloned.find( '.counter' ).text( count+1 );
				$cloned.appendTo( $appendTo );
				setTimeout(function(){
					for( var i = 0; i < editors.length; i++ ){
						wp.editor.initialize( editors[ i ], {
							tinymce: true 
						});
					    
						tinymce.execCommand( 'mceAddEditor', true, editors[ i ] );
						tinymce.get( editors[ i ] ).on( 'change', function(){
							var id = this.id;
							$( '#' + id ).trigger( 'change' );
						});
					}
				}, 10);

			});

			$( document ).on( 'click', '.custom-field-repeater-delete', function( e ){
				e.preventDefault();

				var $wrapper = $( this ).closest( '.custom-field.repeater' );
				$( this ).closest( '.repeater-single' ).remove();

				var data = [], i = 0;

				$wrapper.find( '.custom-field-repeater-wrapper .repeater-single' ).each(function(){

					data[ i ] = {};

					$( this ).find( '.custom-field' ).each(function(){
						var $ele = $( this ).find( '.field' );
						var id = $ele.data( 'id' ),
							type = $ele.data( 'type' );
							
						if( typeof id == 'undefined' ){
							id = $ele.attr( 'id' );
							type = 'editor';
						}
						id = id.split( '-' )[0];
						data[ i ][ id ] = {
							"type"  : type,
							"value" : $ele.val()
						};
					});

					i++;
					$( this ).find( '.counter' ).text( i );

				});

				$wrapper.find( '.repeater-hidden-field' ).val( JSON.stringify( data ) );

			});

			$( document ).on( 'change', '.custom-field.repeater .field', function( e ){
				
				var data = [], i = 0; 
				$( this ).closest( '.custom-field-repeater-wrapper' ).find( '.repeater-single' ).each(function(){

					data[ i ] = {};

					$( this ).find( '.custom-field' ).each(function(){

						var $ele  = $( this ).find( '.field' ),
							type  = $ele.data( 'type' ),
							value = $ele.val();

						var id = $ele.data( 'id' );
						if( typeof id == 'undefined' ){
							id = $ele.attr( 'id' );
						}

						id = id.split( '-' )[0];
						if( $( this ).hasClass( 'editor' ) || $ele.data( 'repeater-type' ) == 'editor' ){
							type = 'editor';
							value = tinymce.get( $ele.attr( 'id' ) ).getContent();
						}

						data[ i ][ id ] = {
							"type"  : type,
							"value" : value
						};
					});

					i++;

				});

				$( this ).closest( '.custom-field.repeater' ).find( '.repeater-hidden-field' ).val( JSON.stringify( data ) );
				
			});
		}
	};

	var Field = {
		init: function(){
			var _this = this;
			$( document ).on( 'click', '.add-field', function( e ){
				e.preventDefault();
				var html = $( '#sample' ).html();
				$( '.wc-booster-custom-fields-wrapper' ).append( html );
			});

			$( document ).on( 'change', '.wc-booster-custom-fields-menu .field', function( e ){
				_this.setData();
			});

			$( document ).on( 'click', '.wc-booster-custom-fields-wrapper-inner .delete', function( e ){
				if( confirm( 'Are you sure to delete?' ) ){
					$( this ).closest( '.wc-booster-custom-fields-wrapper-inner' ).remove();
					_this.setData();
				}
			});
		},
		setData: function(){
			var data = {};
			$( '.wc-booster-custom-fields-wrapper-inner' ).each(function(){
				var post = $( this ).find( 'select[name="post_type"]' ).val();
				if( !data[ post ] ){
					data[ post ] = {};
				}

				var temp = {}, key;
				$( this ).find( '.field' ).each(function(){
					var name = $( this ).attr( 'name' );
					if( name != 'post_type' ){
						var val = $( this ).val();
						if( name == 'name' ){
							key = val;
						}else{
							temp[ name ] = val;
						}
					}
				});

				if( '' != key ){
					data[ post ][ key ] = temp;
				}

			});
			
			$( '.rbcf-data' ).val( JSON.stringify( data ) );
		}
	};

	$( window ).load(function(){

		if( typeof tinymce == 'undefined' ){
			return;
		}
		
		var editors = tinymce.get();

		editors.forEach(function( editor ){
			editor.on( 'change', function( v, c ){
				var id = this.id;
				var $field = $( '#' + id ).closest( '.custom-field.repeater' ).find( '.repeater-hidden-field' ), 
					fieldValue = $field.val(), content = this.getContent();

				if( $field.length == 0 ){
					return;
				}
				
				var index = parseInt( $( '#' + id ).closest( '.repeater-single' ).find( '.counter' ).text() );
				
				id = id.split( '-')[0];

				if( fieldValue ){
					try{

						value = JSON.parse( fieldValue );
						value[ index - 1 ][ id ] = {
							type: 'editor',
							value: content
						};

						$field.val( JSON.stringify( value ) );
					}catch( e ){
						console.log( e.message );
					}
				}
			});
		});
	});

	$( document ).ready( function(){
		
		Tab.init()
		ImageBrowser.init();
		Repeater.init();

		Field.init();
		IconSelector.init();

		$( '.custom-field .color-picker' ).wpColorPicker();

		if( $().select2 ){
			jQuery( '.wc-booster-custom-fields-multi-select' ).each(function(){
				jQuery( this ).find( 'select' ).select2({
					'placeholder' : jQuery( this ).data( 'label' )
				});
			})

			jQuery( '.wc-booster-custom-fields-dropdown-products' ).each(function(){
				jQuery(this).select2({
					placeholder: jQuery(this).data('placeholder'),
					minimumInputLength: 3,
					allowClear: false,
					ajax: {
						url: WBCF.ajax_url,
						method: 'POST',
						dataType: 'json',
						data: function (params) {
						    var query = {
						        search: params.term,
						        action: 'wc_booster_custom_fields_get_product',
						        _wpnonce: WBCF._wpnonce
						    }
						    return query;
						}
					}
				});
			});

			jQuery( '.wc-booster-custom-fields-dropdown-pages' ).each(function(){
				jQuery(this).select2({
					placeholder: jQuery(this).data('placeholder'),
					minimumInputLength: 3,
					allowClear: false,
					ajax: {
						url: WBCF.ajax_url,
						method: 'POST',
						dataType: 'json',
						data: function (params) {
						    var query = {
						        search: params.term,
						        action: 'wc_booster_custom_fields_get_pages',
						        _wpnonce: WBCF._wpnonce
						    }
						    return query;
						}
					}
				});
			});
		
			jQuery( '.wc-booster-custom-fields-dropdown-navigation' ).each(function(){
				jQuery(this).select2({
					placeholder: jQuery(this).data( 'placeholder' ),
					allowClear: false,
					ajax: {
						url: WBCF.ajax_url,
						method: 'POST',
						dataType: 'json',
						data: function (params) {
						    var query = {
						        search: params.term,
						        action: 'wc_booster_custom_fields_get_navigation',
						        _wpnonce: WBCF._wpnonce
						    }
						    return query;
						}
					}
				});
			});
		}


		$( '.wc-booster-copy-trigger' ).on( 'click', function( e ){
			var text = $( this ).prev().text(),
				$wrapper = $( this ).closest( '.wc-booster-copy-text' );

			navigator.clipboard.writeText( text ).then(function(){
		        $wrapper.addClass( 'copied' );
		        setTimeout(function(){
		        	$wrapper.removeClass( 'copied' );
		        }, 10000);
		    });
		});
	});
})( jQuery );