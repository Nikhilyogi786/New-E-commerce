;(function($) {

  function wcPcdCategoriesSlider(){
      var $simple_carousel = $('.pcd-cat-slider');
      if( $simple_carousel.length > 0 ){
          $simple_carousel.each(function(){
              var $this = $(this);
              $this.slick({
                  dots: Boolean( $this.data('dots') ),
                  infinite: true,
                  speed: 300,
                  slidesToShow: $this.data('desktop'),
                  autoplay: Boolean( $this.data('autoplay') ),
                  autoplaySpeed: $this.data('speed'),
                  adaptiveHeight: true,
                  arrows: Boolean( $this.data('arrows') ),
                  margin:10,
                  responsive: [
                      {
                        breakpoint: 769,
                        settings: {
                          slidesToShow: $this.data('tablet'),
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: $this.data('mobile'),
                        }
                      }
                    ]
              });
          });
      }



  }
  $(document).on('ready', function () {
    wcPcdCategoriesSlider();
  });
 
})(jQuery);