	<?php 
	if( !class_exists( 'WC_Booster_Carousel_Product_Block' ) ){

		class WC_Booster_Carousel_Product_Block extends WC_Booster_Base_Block{

			public $slug = 'carousel-product';

			/**
			* Title of this block.
			*
			* @access public
			* @since 1.0.0
			* @var string
			*/
			public $title = 'Carousel Product';

			/**
			* Description of this block.
			*
			* @access public
			* @since 1.0.0
			* @var string
			*/
			public $description = 'This Block enables you to create stunning Gutenberg WooCommerce product grid, slider, and carousel blocks with ease and speed.';

			/**
			* SVG Icon for this block.
			*
			* @access public
			* @since 1.0.0
			* @var string
			*/
			protected $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 512 512">
			<path
			fill="#ffffff"
			d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
			/>
			</svg>';

			protected static $instance;


			public static function get_instance() {
				if ( null === self::$instance ) {
					self::$instance = new self();
				}

				return self::$instance;
			}

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

						$query = $this->get_query( $attrs );

						$title_typo = self::get_initial_responsive_props();
						if( isset( $attrs[ 'titleTypo' ] ) ){
							$title_typo = self::get_typography_props(  $attrs[ 'titleTypo' ] );
						}

						$meta_typo = self::get_initial_responsive_props();
						if( isset( $attrs[ 'metaTypo' ] ) ){	
							$meta_typo = self::get_typography_props(  $attrs[ 'metaTypo' ] );
						}

						$price_typo = self::get_initial_responsive_props();
						if( isset( $attrs[ 'priceTypo' ] ) ){	
							$price_typo = self::get_typography_props(  $attrs[ 'priceTypo' ] );
						}

						$description_typo = self::get_initial_responsive_props();
						if( isset( $attrs[ 'descriptionTypo' ] ) ){	
							$description_typo = self::get_typography_props(  $attrs[ 'descriptionTypo' ] );
						}

						$rating_typo = self::get_initial_responsive_props();
						if( isset( $attrs[ 'ratingTypo' ] ) ){	
							$rating_typo = self::get_typography_props(  $attrs[ 'ratingTypo' ] );
						}

						$button_typo = self::get_initial_responsive_props();
						if( isset( $attrs[ 'buttonTypo' ] ) ){	
							$button_typo = self::get_typography_props(  $attrs[ 'buttonTypo' ] );
						}

						$iconSize = self::get_initial_responsive_props();
						if( isset( $attrs[ 'arrowSize' ] ) ){

							$iconSize = self::get_dimension_props( [ 'height', 'width' ], $attrs[ 'arrowSize' ] );
						}

						$padding = self::get_dimension_props( 'padding', $attrs[ 'padding' ] );

						$productMargin  = self::get_dimension_props( 'margin', $attrs[ 'productMargin' ] );

						$productPadding = self::get_dimension_props( 'padding', $attrs[ 'productPadding' ] );

						$buttonPadding  = self::get_dimension_props( 'padding', $attrs[ 'buttonPadding' ] );

						$buttonMargin   = self::get_dimension_props( 'margin', $attrs[ 'buttonMargin' ] );

						$arrowPositionTop   = self::get_dimension_props( 'top', $attrs[ 'arrowPositionTop' ] );

						$contentWidth       = self::get_dimension_props( 'width', $attrs[ 'contentWidth' ] );

						$arrowPositionRight = self::get_dimension_props( 'right', $attrs[ 'arrowPositionRight' ] );

						$arrowPositionLeft  = self::get_dimension_props( 'left', $attrs[ 'arrowPositionLeft' ] );

						foreach( [ 'mobile', 'tablet', 'desktop' ] as $device ){
							$css = [
								[
									'selector' => '.wc-booster-carousel-product-post-title a',
									'props'    => $title_typo[ $device ]
								],
								[
									'selector' => '.meta-content a',
									'props'    => $meta_typo[ $device ]
								],
								[
									'selector' => '.wc-booster-carousel-product-price',
									'props'    => $price_typo[ $device ]
								],
								[
									'selector' => '.wc-booster-carousel-product-description p',
									'props'    => $description_typo[ $device ]
								],
								[
									'selector' => '.wc-booster-carousel-product-rating',
									'props'    => $rating_typo[ $device ]
								],
								[
									'selector' => '.wc-booster-carousel-product-btn',
									'props'    => $button_typo[ $device ]
								],
								[
									'selector' => '',
									'props' => $padding[ $device ],
								],
								[
									'selector' => '.wc-booster-carousel-product-inner-wrapper',
									'props' => $productMargin[ $device ],
								],
								[
									'selector' => '.wc-booster-carousel-product-inner-wrapper',
									'props' => $productPadding[ $device ],
								],
								[
									'selector' => '.wc-booster-carousel-product-btn',
									'props' => $buttonPadding[ $device ],
								],
								[
									'selector' => '.wc-booster-carousel-product-btn-wrapper',
									'props' => $buttonMargin[ $device ],
								],
								[
									'selector' => '.wc-booster-slider-arrow',
									'props' => $arrowPositionTop[ $device ],
								],
								[
									'selector' => '.wc-booster-slider-arrow',
									'props' => $iconSize[ $device ],
								],
								[
									'selector' => '.wc-booster-carousel-product-body-inner',
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
							];

							self::add_styles( [
								'attrs' => $attrs,
								'css'   => $css,
							], $device );
						}

						$dynamic_css = [
							[
								'selector' => '.wc-booster-carousel-product-meta-wrapper a',
								'props' => [
									'color' => 'metaColor'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-inner-wrapper',
								'props' => [
									'background-color' => 'productBgColor'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-btn',
								'props' => [
									'background-color' => 'buttonBackground'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-btn',
								'props' => [
									'color' => 'buttonTextColor'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-post-title a',
								'props'    =>  [
									'color' => 'titleColor'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-rating .star-rating',
								'props'    =>  [
									'color' => 'ratingColor'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-price',
								'props'    =>  [
									'color' => 'priceColor'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-body-inner ins',
								'props'    =>  [
									'color' => 'priceColor'
								]
							],
							[
								'selector' => '.meta-content a',
								'props'    => [
									'color' => 'metaColor'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-description p',
								'props'    => [
									'color' => 'descriptionColor'
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
								'selector' => '',
								'props'    => [
									'background-color' => 'bgColor'
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
								'selector' => '.wc-booster-carousel-product-btn',
								'props'    => [
									'border-radius' => 'buttonRadius'
								]
							],
							[
								'selector' => '.wc-booster-carousel-product-card-image',
								'props'    => [
									'border-radius' => [
										'unit' => 'px',
										'value' => $attrs[ 'imageRadius' ]
									]
								]
							],
							[
								'selector' => '.wc-booster-slider-arrow',
								'props'    => [
									'border-radius' => [
										'unit' => 'px',
										'value' => $attrs[ 'arrowRadius' ]
									]
								]
							]
						];
						
						self::add_styles( [
							'attrs' => $attrs,
							'css'   => $dynamic_css,
						]);

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
							slidesToShow: <?php echo $query->post_count > esc_attr( $slidesToShow[ 'values' ][ 'desktop' ] ) ? esc_attr( $slidesToShow[ 'values' ][ 'desktop' ] ) : $query->post_count; ?>,
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
						jQuery('#<?php echo esc_attr( $attrs[ 'block_id' ] ); ?> .wc-booster-carousel-product-init').slick( params );

						<?php
						$js = ob_get_clean();
						self::add_scripts( $js );
					}
				}
			}

			public function get_query( $attrs ){

				$args = array(
					'post_type'   => 'product',
					'post_status' => 'publish',
					'ignore_sticky_posts' => true,
					'posts_per_page' => $attrs[ 'postsToShow' ],
					'order' => $attrs[ 'order' ],
					'orderby' => $attrs[ 'orderBy' ],
					'tax_query' => array(),
				);

				if( isset( $attrs[ 'categories' ] ) && ! empty( $attrs[ 'categories' ] ) ){
					$args['tax_query'][] = array(
						'taxonomy' => 'product_cat',
						'field'    => 'term_id',
						'terms'    => $attrs[ 'categories' ],
					);
				}

				$query = new WP_Query( $args );

				return $query;
			}

			public static function make_category_arr( $_cat ){
				$cat = false;
				if( $_cat ){
					$cat = array(
						'name' => $_cat->name,
						'link' => get_category_link( $_cat->term_id )
					);
				}

				return $cat;
			}

			public function render( $attrs, $content, $block ) {
				$block_content = '';
				$query = $this->get_query( $attrs );

				if ( $attrs[ 'enableQuickView' ] ) {
					$quick_view = WC_Booster_Quick_View_Block::get_instance();
					$qv_attrs = $this->get_inner_block_attr( $quick_view, $attrs['block_id'] );
				}

				if ( $attrs[ 'enableWishList' ] ) {
					$wishlist = WC_Booster_Wish_List_Button_Block::get_instance();
					$wl_attrs = $this->get_inner_block_attr( $wishlist, $attrs['block_id'] );
				}
				if( $query->have_posts() ):
					ob_start();

					if( isset( $attrs[ 'categories' ] ) ) {
						$_cat = get_term( absint( $attrs['categories'] ), 'product_cat' );
						$cat = self::make_category_arr( $_cat );
					}

					$section_cls = 'wc-booster-carousel-product-wrapper wc-booster-align-' . esc_attr( $attrs[ 'alignment' ] );
					
					?>
					<section id="<?php echo esc_attr( $attrs[ 'block_id' ] ); ?>" class="<?php echo esc_attr( $section_cls ); ?>">
						<div class="wc-booster-carousel-product-overlay"></div>
						<div class="wc-booster-carousel-product-init <?php echo esc_attr( $attrs[ 'sliderLayout' ] ); ?>">
							<?php while( $query->have_posts() ):
								$query->the_post();

								$id  = get_the_ID();
								$src = '';
								$banner_img = '';

								$product = wc_get_product( $id );
								$banner_img_id = get_post_meta( $product->get_id(), 'wc_booster_product_banner_img', true );

								if ( isset( $banner_img_id ) ) {
									$banner_img = wp_get_attachment_url( $banner_img_id );
								}

								if( !isset( $attrs[ 'categories' ] ) ) {
									$_cat = get_the_terms( $id, 'product_cat' );
									$cat = self::make_category_arr( $_cat[ 0 ] );
								}

								if ( $attrs['imgType'] == 'normal' ) {
									if( has_post_thumbnail( ) ) {
										$src = get_the_post_thumbnail_url( $id, $attrs[ 'imageSize' ] );
									}
								} else {
									$src = $banner_img;
								}

								?>
								<div id="<?php echo time(); ?>" class="wc-booster-carousel-product-card-wrapper woocommerce">

									<?php 
									if ( isset( $quick_view ) || isset( $wishlist ) ) {
										$block_context = (object) [
											"context" => [
												"postId" => $id
											]
										];
									} 

									if ( $attrs[ 'enableQuickView' ] ) {
										echo $quick_view->render( $qv_attrs, '', $block_context );
									}

									if ( $attrs[ 'enableWishList' ] ) {
										echo $wishlist->render( $wl_attrs, '', $block_context );
									}

									?>
									<div class="wc-booster-carousel-product-inner-wrapper wc-booster-carousel-product-has-banner" style="background-image: url('<?php echo esc_url($attrs['sliderLayout'] == 'layout-two' ? $src : ''); ?>');">
										<?php if ( $attrs[ 'sliderLayout' ] === 'layout-one'  ) : ?>
											<div>
												<a href="<?php the_permalink(); ?>" target="<?php echo ( $attrs[ 'wrapperTarget' ] ) ? "_blank" : "_self" ?>">
													<img
													src="<?php echo esc_url( $src ); ?>"
													class="wc-booster-carousel-product-card-image">
												</img>
											</a>
										</div>
									<?php endif; ?>
									<div class="wc-booster-carousel-product-card">
										<div class="wc-booster-carousel-product-body">
											<div class="wc-booster-carousel-product-body-inner">
												<?php if( $attrs[ 'enableRating' ] ): ?>
													<div class="wc-booster-carousel-product-rating">
														<?php echo wc_get_rating_html( $product->get_average_rating() ); ?>
													</div>
												<?php endif; ?>
												<div class="wc-booster-carousel-product-post-cat meta-content">
													<?php if( $attrs[ 'enableCategory' ] ): ?>
														<?php if (!empty($cat)) : ?>
															<a href="<?php echo esc_url( $cat[ 'link' ] ); ?>" target="<?php echo ( $attrs[ 'wrapperTarget' ] ) ? "_blank" : "_self" ?>">
																<span><?php echo esc_html( $cat[ 'name' ] ); ?></span>
															</a>
														<?php endif; ?>
													<?php endif; ?>
												</div>

												<?php if( $attrs[ 'enableTitle' ] ): ?>
													<h2 class="wc-booster-carousel-product-post-title">
														<a href="<?php the_permalink(); ?>" target="<?php echo ( $attrs[ 'wrapperTarget' ] ) ? "_blank" : "_self" ?>">
															<?php the_title(); ?>
														</a>
													</h2>
												<?php endif; ?>
												<?php if( $attrs[ 'enablePrice' ] ): ?>
													<div class="wc-booster-carousel-product-price">
														<?php echo $product->get_price_html(); ?>
													</div>
												<?php endif; ?>
												<?php if( $attrs[ 'enableDescription' ] ): ?>
													<div class="wc-booster-carousel-product-description">
														<?php the_excerpt(); ?>
													</div>
												<?php endif; ?>
												<?php if( $attrs[ 'enableButton' ] ): ?>
													<div class="wc-booster-carousel-product-btn-wrapper">
														<a href="<?php the_permalink(); ?>" class="wc-booster-carousel-product-btn" target="<?php echo ( $attrs[ 'wrapperTarget' ] ) ? "_blank" : "_self" ?>">
															<?php echo esc_html( $attrs[ 'shopNowText' ] );  ?>
														</a>
													</div>
												<?php endif; ?>
											</div>
										</div>
									</div>
								</div>
							</div>
							<?php
						endwhile;
						?>
					</div>
				</section>
				<?php
				wp_reset_postdata();
				$block_content = ob_get_clean();
			endif;
			return $block_content;
		}

	}

	WC_Booster_Carousel_Product_Block::get_instance();

}