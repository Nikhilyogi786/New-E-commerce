/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************************!*\
  !*** ./src/blocks/wish-list-table/wish-list-page.js ***!
  \******************************************************/
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
  var RemoveList = {
    init: function () {
      $(document).on('click', '.product-remove-btn', this.request);
    },
    request: function (e) {
      e.preventDefault();
      var product_id = $(this).data('id'),
        that = $(this);
      var onSuccess = function (data) {
        location.reload();
      };
      $http({
        url: woocommerce_params.ajax_url,
        data: {
          action: 'wc_booster_ajax_wish_list_remove',
          security: WC_BOOSTER.ajax_nonce,
          post_id: product_id
        },
        success: onSuccess,
        button: $(this)
      });
    }
  };
  RemoveList.init();
})(jQuery);
/******/ })()
;
//# sourceMappingURL=wish-list-page.js.map