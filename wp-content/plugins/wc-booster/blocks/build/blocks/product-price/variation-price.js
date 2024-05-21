/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./src/blocks/product-price/variation-price.js ***!
  \*****************************************************/
(function ($) {
  // Cache the price element selector
  var priceElement = $('.wc-booster-pvp');

  // Store the initial price when the page loads
  var initialPrice = priceElement.html();

  // Listen for variation change event
  $('body').on('found_variation', '.variations_form', function (event, variation) {
    // Update the displayed price with error handling
    if (variation.price_html) {
      priceElement.html(variation.price_html);
    } else {
      // Handle case where price is not available
      priceElement.html('Price not available');
    }
  });

  // Listen for reset_variation event to restore initial price
  $('body').on('reset_data', '.variations_form', function (event) {
    priceElement.html(initialPrice);
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=variation-price.js.map