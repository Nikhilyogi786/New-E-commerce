(function($){
    "use strict";
    
    let WidgetDPCSliderHandler = function ($scope, $) {

          let slider_elem = $scope.find('.pcd-cat-slider');

            if ( slider_elem.length > 0) {

                slider_elem.each(function(){

                let $this = $(this);
                console.log($this);

                $this.slick({
                    dots: Boolean( $this.data('dots') ),
                    infinite: true,
                    speed: $this.data('speed'),
                    slidesToShow: $this.data('desktop'),
                    autoplay: Boolean( $this.data('autoplay') ),
                    autoplaySpeed: $this.data('speed'),
                    adaptiveHeight: true,
                    arrows: Boolean( $this.data('arrows') ),
                    margin: 10,
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
    
            };
        };
        
        // Run this code under Elementor.
        $(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction( 'frontend/element_ready/dpcd-category-design.default', WidgetDPCSliderHandler);
        });
    })(jQuery);