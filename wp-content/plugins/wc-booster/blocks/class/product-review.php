<?php
if( !class_exists( 'WC_Booster_Product_Review_Block' ) ){

	class WC_Booster_Product_Review_Block extends WC_Booster_Base_Block{

		public $slug = 'product-review';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Product Review';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'This block allows users to select a preferred review for highlighting, adding a personal touch to showcase the most compelling feedback.';


		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512">
			<path
			d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"
			/>
			</svg>
			';

	    protected static $instance;
	    
	    public static function get_instance() {
	        if ( null === self::$instance ) {
	            self::$instance = new self();
	        }

	        return self::$instance;
	    }

        /**
		* Generate & Print Frontend Styles
		* Called in wp_head hook
		* @access public
		* @since 1.0.0
		* @return null
		*/
		public function prepare_scripts(){
			
		    if( count( $this->blocks ) > 0 ){

		    	wp_enqueue_script( 'slick', WC_Booster_Url . 'assets/vendors/slick/slick.min.js', [ 'jquery' ], '1.8.1' );
      	    	wp_enqueue_style( 'slick', WC_Booster_Url . 'assets/vendors/slick/slick.min.css' );

		        foreach( $this->blocks as $block ){

		            $attrs = self::get_attrs_with_default( $block[ 'attrs' ] );

		            if( in_array( $attrs[ 'block_id' ], $this->block_ids ) ){
		            	continue;
		            }

		            $this->block_ids[] = $attrs[ 'block_id' ];

		            $title_typo = self::get_initial_responsive_props();
		            if( isset( $attrs[ 'titleTypo' ] ) ){
		                $title_typo = self::get_typography_props(  $attrs[ 'titleTypo' ] );
		            }

		            $author_typo = self::get_initial_responsive_props();
		            if( isset( $attrs[ 'authorTypo' ] ) ){	
		            	$author_typo = self::get_typography_props(  $attrs[ 'authorTypo' ] );
		            }

		            $date_typo = self::get_initial_responsive_props();
		            if( isset( $attrs[ 'dateTypo' ] ) ){	
		            	$date_typo = self::get_typography_props(  $attrs[ 'dateTypo' ] );
		            }

		            $comment_typo = self::get_initial_responsive_props();
		            if( isset( $attrs[ 'commentTypo' ] ) ){	
		            	$comment_typo = self::get_typography_props(  $attrs[ 'commentTypo' ] );
		            }

		            $rating_typo = self::get_initial_responsive_props();
		            if( isset( $attrs[ 'ratingTypo' ] ) ){	
		            	$rating_typo = self::get_typography_props(  $attrs[ 'ratingTypo' ] );
		            }

	    			$contentWidth       = self::get_dimension_props( 'width', $attrs[ 'contentWidth' ] );
		            $arrowPositionTop   = self::get_dimension_props( 'top', $attrs[ 'arrowPosition' ] );
	    			$arrowPositionRight = self::get_dimension_props( ['', 'right'], $attrs[ 'arrowPosition' ] );
	    			$arrowPositionLeft  = self::get_dimension_props( ['', '', 'left'], $attrs[ 'arrowPosition' ] );
	    			$imageHeight        = self::get_dimension_props( 'height', $attrs[ 'imageSize' ] );
	    			$imageWidth         = self::get_dimension_props( 'width', $attrs[ 'imageSize' ] );
	    			$itemMargin         = self::get_dimension_props( 'margin', $attrs[ 'itemMargin' ] );
	    			$ratingMargin       = self::get_dimension_props( 'margin', $attrs[ 'ratingMargin' ] );
	    			$titleMargin        = self::get_dimension_props( 'margin', $attrs[ 'titleMargin' ] );
	    			$commentMargin      = self::get_dimension_props( 'margin', $attrs[ 'commentMargin' ] );
	    			$contentPadding     = self::get_dimension_props( 'padding', $attrs[ 'contentPadding' ] );


		           	foreach( [ 'mobile', 'tablet', 'desktop' ] as $device ){
		                $css = [
		                    [
					            'selector' => '.wc-booster-slider-arrow',
					            'props' => $arrowPositionTop[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-inner-wrapper',
					            'props' => $contentWidth[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-next-arrow',
					            'props' => $arrowPositionRight[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-prev-arrow',
					            'props' => $arrowPositionLeft[ $device ],
					        ],
					        [
		                        'selector' => '.wc-booster-product-review-title',
		                        'props'    => $title_typo[ $device ]
		                    ],
					        [
					            'selector' => '.wc-booster-product-review-author',
					            'props' => $author_typo[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-date',
					            'props' => $date_typo[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-comment-text',
					            'props' => $comment_typo[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-rating',
					            'props' => $rating_typo[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-inner-wrapper',
					            'props' => $contentPadding[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-init .slick-list .slick-slide > div',
					            'props' => $itemMargin[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-title',
					            'props' => $titleMargin[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-rating',
					            'props' => $ratingMargin[ $device ],
					        ],
					        [
					            'selector' => '.wc-booster-product-review-comment-text',
					            'props' => $commentMargin[ $device ],
					        ],
					        [
					        	'selector' => [ '.wc-booster-product-review-avatar img, .wc-booster-product-review-product-img img' ],
					        	'props' => array_merge( $imageHeight[ $device ], $imageWidth[ $device ] ),
					        ]
		                ];

		                self::add_styles( [
		                    'attrs' => $attrs,
		                    'css'   => $css,
		                ], $device );
		            }

		            $dynamic_css = [
		            	[
		                    'selector' => '.wc-booster-product-review-card-wrapper',
		                    'props' => [
		                        'background-color' => 'bgColor'
		                    ]
		                ],
		                [
		                    'selector' => '.wc-booster-product-review-title a',
		                    'props' => [
		                        'color' => 'titleColor'
		                    ]
		                ],
		                [
		                    'selector' => '.wc-booster-product-review-author',
		                    'props' => [
		                        'color' => 'authorColor'
		                    ]
		                ],
		                [
		                    'selector' => '.wc-booster-product-review-date',
		                    'props' => [
		                        'color' => 'dateColor'
		                    ]
		                ],
		                [
		                    'selector' => '.wc-booster-product-review-comment-text',
		                    'props' => [
		                        'color' => 'commentColor'
		                    ]
		                ],
		                [
		                    'selector' => '.wc-booster-product-review-rating',
		                    'props' => [
		                        'color' => 'ratingColor'
		                    ]
		                ],
		                [
					        'selector' => '.wc-booster-prev-arrow',
					        'props'    => [
					            'background-color' => 'arrowLeftBgColor'
					        ]
					    ],
					    				    [
					        'selector' => '.wc-booster-prev-arrow i',
					        'props'    => [
					            'color' => 'arrowLeftColor'
					        ]
					    ],
					    [
					        'selector' => '.wc-booster-next-arrow',
					        'props'    => [
					            'background-color' => 'arrowRightBgColor'
					        ]
					    ],
					    [
					        'selector' => '.wc-booster-next-arrow i',
					        'props'    => [
					            'color' => 'arrowRightColor'
					        ]
					    ],
					    [
					        'selector' => '.slick-dots li.slick-active button',
					        'props' => [
					            'color' => 'dotColor',
					            'background' => 'dotColor',
					        ],
					    ],
					    [
					        'selector' => '.wc-booster-slider-arrow',
					        'props'    => [
					            'border-radius' => 'arrowRadius',
					            'height' => [
					                'unit'  => 'px',
					                'value' => $attrs[ 'arrowHeight' ]
					            ],
					            'width' => [
					                'unit'  => 'px',
					                'value' => $attrs[ 'arrowWidth' ]
					            ]
					        ]
					    ],
					    [
					    	'selector' => ['.wc-booster-product-review-avatar img', '.wc-booster-product-review-product-img img'],
					    	'props'    => [
					    		'border-radius' => [
					    			'unit' => '%',
					    			'value' => $attrs[ 'imageRadius' ]
					    		]
					    	]
					    ],
					    [
					    	'selector' => '.wc-booster-product-review-card-wrapper',
					    	'props'    => [
					    		'border-radius' => [
					    			'unit' => 'px',
					    			'value' => $attrs[ 'itemBoxRadius' ]
					    		]
					    	]
					    ]
		            ];

		            self::add_styles( [
		                'attrs' => $attrs,
		                'css'   => $dynamic_css,
		            ]);
		            
		            $query = $this->get_query( $attrs );

		            
		            
	    			if( !is_array( $attrs[ 'slidesToShow' ] ) ){
	    				$slidesToShow = [
	    					'values' => [
	    						'desktop' => $attrs[ 'slidesToShow' ],
	    						'tablet'  => $attrs[ 'slidesToShow' ],
	    						'mobile'  => $attrs[ 'slidesToShow' ],
	    					]
	    				];
	    			}else{
	    				$slidesToShow = $attrs[ 'slidesToShow' ];
	    			}

	    			ob_start();
	    			?>
	    			
	    			var params = {
	    				slidesToShow: <?php echo count($query) > esc_attr( $slidesToShow[ 'values' ][ 'desktop' ] ) ? esc_attr( $slidesToShow[ 'values' ][ 'desktop' ] ) : count($query); ?>,
	    				slidesToScroll: 1,
	    				autoplay: <?php echo $attrs['autoplay'] ? 'true' : 'false'; ?>,
	    				infinite: true,
	    				pauseOnHover: <?php echo $attrs['pauseOnHover'] ? 'true' : 'false'; ?>,
	    				arrows: <?php echo $attrs['enableArrow'] ? 'true' : 'false'; ?>,
	    				dots: <?php echo $attrs['enableDots'] ? 'true' : 'false'; ?>,
	    				prevArrow: '<button type="button" class="wc-booster-prev-arrow wc-booster-slider-arrow"><i class="fa fa-angle-left"></i></button>',
	    				nextArrow: '<button type="button" class="wc-booster-next-arrow wc-booster-slider-arrow"><i class="fa fa-angle-right"></i></button>',
	    				responsive: [
	    					{
	    						breakpoint: 767,
	    						settings: {
	    							slidesToShow: <?php echo esc_attr( $slidesToShow[ 'values' ][ 'mobile' ] ); ?>
	    						}
	    					},
	    					{
	    						breakpoint: 1024,
	    						settings: {
	    							slidesToShow: <?php echo esc_attr( $slidesToShow[ 'values' ][ 'tablet' ] ); ?>
	    						}
	    					}
	    				]
	    			};
	    			jQuery('#<?php echo esc_attr( $attrs[ 'block_id' ] ); ?> .wc-booster-product-review-init').slick( params );

	    			<?php
	    			$js = ob_get_clean();
	    			self::add_scripts( $js );

		        }
		    }
		}

		public function get_query( $attrs ) {
		    $data = isset( $attrs['product_id'] ) ? json_decode( $attrs['product_id'] ) : array();

		    $comments = [];
		    $counter = 0;
		    if ( is_array( $data ) && ! empty( $data ) ) {
		        foreach ( $data as $obj ) {
		            if ( isset( $obj->id ) ) {
		                $product_id = absint( $obj->id );
		                $args = array(
		                    'post_type' => 'product',
		                    'post_id'   => $product_id,
		                    'status'    => 'approve', // Only approved comments
		                );

		                $comment = get_comments( $args );
		                if ( ! empty( $comment ) && isset( $data[$counter]->review_id ) && isset( $comment[$data[$counter]->review_id - 1] ) ) {
		                    $comments[] = $comment[$data[$counter]->review_id - 1];
		                }
		                $counter++;
		            }
		        }
		    }

		    return $comments;
		}

		public function render( $attrs, $content, $block ) {
			$block_content = '';
			$query = $this->get_query( $attrs );

			if ( $query ) {
				ob_start();

				if ( $attrs['layout'] == 'one' ) {
					$this->render_layout_one( $attrs, $query );
				} else {
					$this->render_layout_two( $attrs, $query );
				}

				$block_content = ob_get_clean();
			}

			return $block_content;
		}

	    public function render_layout_one( $attrs, $query ) {
	        ?>
	        <section id="<?php echo esc_attr( $attrs['block_id'] ); ?>" class="wc-booster-product-review-wrapper wc-booster-product-review-layout-one woocommerce wc-booster-align-<?php echo esc_attr( $attrs['alignment'] ); ?>">
	            <div class="wc-booster-product-review-init">
	                <?php foreach ( $query as $comment ) : 
	                    $date   = date('F j, Y', strtotime($comment->comment_date));
	                    $rating = get_comment_meta( $comment->comment_ID, 'rating', true);
	                    $rating_html   = wc_get_rating_html( $rating );
	                    $product_id    = absint( $comment->comment_post_ID );
	                    $product_title = get_the_title( $product_id );
	                    ?>
	                    <div class="wc-booster-product-review-card-wrapper">
	                        <div class="wc-booster-product-review-inner-wrapper">
	                            	<?php if ( $attrs['imageType'] == 'reviewer') : ?>
			                            <div class="wc-booster-product-review-avatar">
			                                <?php echo get_avatar( $comment, 60 ); ?>
			                            </div>
		                        	<?php else : ?>
		                        		<div class="wc-booster-product-review-product-img">
		                        			<a href="<?php echo esc_url( get_permalink( $product_id ) ); ?>">
		                        				<?php echo get_the_post_thumbnail( $product_id, 'thumbnail' ); ?>
		                        			</a>
		                        		</div>
		                        	<?php endif; ?>
		                            <div class="wc-booster-product-review-meta">
		                            	<?php if ( $attrs['ratingPosition'] == 'top' && $attrs['enableRating'] ) : ?>
		                            		<div class="wc-booster-product-review-rating">
		                            			<?php echo $rating_html; ?>
		                            		</div>
		                            	<?php endif; ?>
		                                <?php if ($attrs['enableTitle']) : ?>
		                                	<div class="wc-booster-product-review-title">
		                                		<a href="<?php echo esc_url( get_permalink( $product_id ) ); ?>"><?php echo esc_html( $product_title ); ?></a>
		                                	</div>
		                                <?php endif; ?>
		                           	 	<div class="wc-booster-product-review-date-author">
			                                <?php if ($attrs['enableAuthor']) : ?>
			                                    <span class="wc-booster-product-review-author">
			                                        <?php echo esc_html($comment->comment_author); ?>
			                                    </span>
			                                <?php endif; ?>
			                                <?php if ($attrs['enableDate']) : ?>
			                                    <span class="wc-booster-product-review-date">
			                                        <?php echo esc_html($date); ?>
			                                    </span>
			                                <?php endif; ?>
		                           		</div>
		                                <?php if ($attrs['enableComment']) : ?>
		                                    <div class="wc-booster-product-review-comment-text">
		                                    	<?php echo self::wordTrim( $comment->comment_content, $attrs[ 'excerptLength' ]); ?>
		                                    </div>
		                                <?php endif; ?>
										<?php if ( $attrs['ratingPosition'] == 'bottom' && $attrs['enableRating'] ) : ?>
										    <div class="wc-booster-product-review-rating">
										        <?php echo $rating_html; ?>
										    </div>
										<?php endif; ?>
		                            </div>
	                        </div>
	                    </div>
	                <?php endforeach; ?>
	            </div>
	        </section>
	        <?php
	    }

	    public function render_layout_two( $attrs, $query ) {
	        ?>
	        <section id="<?php echo esc_attr( $attrs['block_id'] ); ?>" class="wc-booster-product-review-wrapper wc-booster-product-review-layout-two woocommerce wc-booster-align-<?php echo esc_attr( $attrs['alignment'] ); ?>">
	            <div class="wc-booster-product-review-init">
	                <?php foreach ( $query as $comment ) : 
	                    $date   = date('F j, Y', strtotime($comment->comment_date));
	                    $rating = get_comment_meta( $comment->comment_ID, 'rating', true);
	                    $rating_html   = wc_get_rating_html( $rating );
	                    $product_id    = absint( $comment->comment_post_ID );
	                    $product_title = get_the_title( $product_id );
	                    ?>
	                    <div class="wc-booster-product-review-card-wrapper">
	                        <div class="wc-booster-product-review-inner-wrapper">
	                            	<?php if ( $attrs['imageType'] == 'reviewer') : ?>
			                            <div class="wc-booster-product-review-avatar">
			                                <?php echo get_avatar( $comment, 60 ); ?>
			                            </div>
		                        	<?php else : ?>
		                        		<div class="wc-booster-product-review-product-img">
		                        			<a href="<?php echo esc_url( get_permalink( $product_id ) ); ?>">
		                        				<?php echo get_the_post_thumbnail( $product_id, 'thumbnail' ); ?>
		                        			</a>
		                        		</div>
		                        	<?php endif; ?>
		                            <div class="wc-booster-product-review-meta">
		                            	<?php if ( $attrs['ratingPosition'] == 'top' && $attrs['enableRating'] ) : ?>
		                            		<div class="wc-booster-product-review-rating">
		                            			<?php echo $rating_html; ?>
		                            		</div>
		                            	<?php endif; ?>
		                                <?php if ($attrs['enableTitle']) : ?>
		                                	<div class="wc-booster-product-review-title">
		                                		<a href="<?php echo esc_url( get_permalink( $product_id ) ); ?>"><?php echo esc_html( $product_title ); ?></a>
		                                	</div>
		                                <?php endif; ?>
		                           	 	<div class="wc-booster-product-review-date-author">
			                                <?php if ($attrs['enableAuthor']) : ?>
			                                    <span class="wc-booster-product-review-author">
			                                        <?php echo esc_html($comment->comment_author); ?>
			                                    </span>
			                                <?php endif; ?>
			                                <?php if ($attrs['enableDate']) : ?>
			                                    <span class="wc-booster-product-review-date">
			                                        <?php echo esc_html($date); ?>
			                                    </span>
			                                <?php endif; ?>
		                           		</div>
		                                <?php if ($attrs['enableComment']) : ?>
		                                    <div class="wc-booster-product-review-comment-text">
		                                    	<?php echo self::wordTrim( $comment->comment_content, $attrs[ 'excerptLength' ]); ?>
		                                    </div>
		                                <?php endif; ?>
										<?php if ( $attrs['ratingPosition'] == 'bottom' && $attrs['enableRating'] ) : ?>
										    <div class="wc-booster-product-review-rating">
										        <?php echo $rating_html; ?>
										    </div>
										<?php endif; ?>
		                            </div>
	                        </div>
	                    </div>
	                <?php endforeach; ?>
	            </div>
	        </section>
	        <?php
	    }


	}

	WC_Booster_Product_Review_Block::get_instance();
}