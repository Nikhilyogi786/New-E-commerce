/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./src/blocks/wish-list-button/wish-list.js ***!
  \**************************************************/
(function ($) {
  function Loader($ele) {
    var cls = 'loading';
    this.element = $ele;
    this.activate = function () {
      this.element.addClass(cls);
    };
    this.deactivate = function () {
      this.element.removeClass(cls);
    };
  }
  var $http = function (args) {
    var $btn = new Loader(args.button);
    $btn.activate();
    return $.ajax({
      url: args.url,
      type: 'post',
      data: args.data,
      error: function (res) {
        // args.error( res );
      },
      success: function (res) {
        args.success(res.data || res);
      },
      complete: function () {
        if (args.complete) {
          args.complete();
        }
        $btn.deactivate();
      }
    });
  };
  var WishList = {
    init: function () {
      $(document).on('click', '.wc-booster-wishlist-button', this.request);
    },
    request: function (e) {
      e.preventDefault();
      var product_id = $(this).data('item_id'),
        count = $(this).attr('data-count'),
        that = $(this);
      var onSuccess = function (data) {
        if (data.response == 'added') {
          that.addClass('added');
          count++;
          $('span.wishlist-count').html(count);
          $('.wc-booster-wishlist-button').attr('data-count', count);
        } else {
          that.removeClass('added');
          count--;
          $('span.wishlist-count').html(count);
          $('.wc-booster-wishlist-button').attr('data-count', count);
        }
      };
      $http({
        url: woocommerce_params.ajax_url,
        data: {
          action: 'wc_booster_ajax_wish_list',
          security: WC_BOOSTER.ajax_nonce,
          post_id: product_id
        },
        success: onSuccess,
        button: $(this)
      });
    }
  };
  WishList.init();
})(jQuery);
/******/ })()
;
//# sourceMappingURL=wish-list.js.map