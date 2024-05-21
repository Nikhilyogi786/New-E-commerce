<?php
if( !class_exists( 'WC_Booster_Category_Collage_Block' ) ){

	class WC_Booster_Category_Collage_Block extends WC_Booster_Base_Block{

		public $slug = 'category-collage';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Category Collage';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'The Category Collage block enables users to highlight their store\'s product categories in a visually engaging colalge with different layouts';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 448 512">
			<path
				d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z"
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

		            $description_typo = self::get_initial_responsive_props();
		            if( isset( $attrs[ 'descriptionTypo' ] ) ){
		                $description_typo = self::get_typography_props(  $attrs[ 'descriptionTypo' ] );
		            }

		            $contentPadding = self::get_dimension_props( 'padding', $attrs[ 'contentPadding' ] );

		            $imageHeight    = self::get_dimension_props( 'min-height', $attrs[ 'imageHeight' ] );

		            $contentWidth = self::get_dimension_props( 'width', $attrs[ 'contentWidth' ] );

		            foreach( [ 'mobile', 'tablet', 'desktop' ] as $device ){
		                $css = [
		                    [
		                        'selector' => '.wc-booster-category-collage-cat-title a',
		                        'props'    => $title_typo[ $device ]
		                    ],
		                    [
		                        'selector' => '.wc-booster-category-collage-cat-description',
		                        'props'    => $description_typo[ $device ]
		                    ],
		                    [
		                        'selector' => '.wc-booster-category-collage-inner-wrapper',
		                        'props' => $imageHeight[ $device ],
		                    ],
		                    [
		                        'selector' => '.wc-booster-category-collage-inner-wrapper',
		                        'props' => $contentPadding[ $device ],
		                    ],
		                    [
							'selector' => '.wc-booster-category-collage-body-inner',
							'props' => $contentWidth[ $device ]
							]
		                ];

		                self::add_styles( [
		                    'attrs' => $attrs,
		                    'css'   => $css,
		                ], $device );
		            }

		            $dynamic_css = [
		                [
		                    'selector' => '.wc-booster-category-collage-cat-title a',
		                    'props' => [
		                        'color' => 'catTextColor'
		                    ]
		                ],
		                [
		                    'selector' => '.wc-booster-category-collage-cat-description',
		                    'props' => [
		                        'color' => 'descriptionColor'
		                    ]
		                ],
		                [
		                    'selector' => '.wc-booster-category-collage-inner-wrapper',
		                    'props'    => [
		                        'border-radius' => [
		                            'unit' => 'px',
		                            'value' => $attrs[ 'imageRadius' ]
		                        ]
		                    ]
		                ]
		            ];

		            self::add_styles( [
		                'attrs' => $attrs,
		                'css'   => $dynamic_css,
		            ]);
		        }
		    }
		}

		public function get_query( $attrs ){

    		$data = isset( $attrs[ 'cat_id' ] ) ? json_decode( $attrs[ 'cat_id' ] ) : false;

            $ids = [];
            if ( $data ) {
	            foreach ( $data as $obj ) {
	                if ( isset( $obj->id )) {
	                    $ids[] = absint( $obj->id );
	                }
	            }
            }
            
    		$args = [
    			'taxonomy'   => 'product_cat',
    			'orderby' => 'include',
    			'include' => $ids,
    			'number' => '5',
    		];
    		
    		$query = get_categories( $args );
    		return $query;
    	}

		public function render( $attrs, $content, $block ){
			$block_content = '';
			$query = $this->get_query( $attrs );
			
			if( $query ):
				ob_start();

				$section_cls = 'wc-booster-category-collage-wrapper wc-booster-category-collage-layout-' . $attrs['layout'];
				
				?>
				<section id="<?php echo esc_attr( $attrs[ 'block_id' ] ); ?>" class="<?php echo esc_attr( $section_cls ); ?>">

					<?php if ( $attrs['layout'] == 'one') :
					    foreach( $query as $cat ):

					    	$id  = $cat->term_id;
					    	$src = WC_Booster_Url . '/img/default-image.jpg';

				            $thumbnail_id = get_term_meta( $id, 'thumbnail_id', true ); 
				            if( $thumbnail_id ){
				            	$src = wp_get_attachment_url( $thumbnail_id );

				            }
					    ?>
				            <div class="wc-booster-category-collage-card-wrapper">
					            <div class="wc-booster-category-collage-inner-wrapper" style="background-image: url(<?php echo esc_url( $src ); ?>)">
					                <div class="wc-booster-category-collage-card">
					                    <div class="wc-booster-category-collage-body">
					                    	<div class="wc-booster-category-collage-body-inner">

				                            	<?php if( $attrs[ 'enableTitle' ] ): ?>
				    	                            <h2 class="wc-booster-category-collage-cat-title">
				    	                                <a href="<?php echo esc_url( get_category_link( $id ) ); ?>">
				    	                                    <?php echo esc_html( $cat->name ); ?>
				    	                                </a>
				    	                            </h2>
				                            	<?php endif; ?>

				                            	<?php if( $attrs[ 'enableDescription' ] ): ?>
				    	                            <p class="wc-booster-category-collage-cat-description">
				    	                                <?php echo esc_html( $cat->description ); ?>
				    	                            </p>
				                            	<?php endif; ?>
											<?php ?>
						                	</div>
					                    </div>
					                </div>
					            </div>
				            </div>                  
						    <?php
							endforeach;
					    else:
			            $query_count = count( $query );
			            // Output all items except the last one
			            ?>
			            <div class="wc-booster-category-collage-layout-two-wrapper">
			            <?php
			            for ( $i = 0; $i < $query_count - 1; $i++ ) {
						    if ( ! isset( $query[ $i ] ) ) {
						        continue; // Skip if key does not exist
						    }
			                $cat = $query[ $i ];
			                $id  = $cat->term_id;
			                $src = WC_Booster_Url . '/img/default-image.jpg';
			                $thumbnail_id = get_term_meta( $id, 'thumbnail_id', true ); 
			                if ( $thumbnail_id ) {
			                    $src = wp_get_attachment_url( $thumbnail_id );
			                }?>

				            <div class="wc-booster-category-collage-card-wrapper">
					            <div class="wc-booster-category-collage-inner-wrapper" style="background-image: url(<?php echo esc_url( $src ); ?>)">
					                <div class="wc-booster-category-collage-card">
					                    <div class="wc-booster-category-collage-body">
					                    	<div class="wc-booster-category-collage-body-inner">

				                            	<?php if( $attrs[ 'enableTitle' ] ): ?>
				    	                            <h2 class="wc-booster-category-collage-cat-title">
				    	                                <a href="<?php echo esc_url( get_category_link( $id ) ); ?>">
				    	                                    <?php echo esc_html( $cat->name ); ?>
				    	                                </a>
				    	                            </h2>
				                            	<?php endif; ?>

				                            	<?php if( $attrs[ 'enableDescription' ] ): ?>
				    	                            <p class="wc-booster-category-collage-cat-description">
				    	                                <?php echo esc_html( $cat->description ); ?>
				    	                            </p>
				                            	<?php endif; ?>
											<?php ?>
						                	</div>
					                    </div>
					                </div>
					            </div>
				            </div>
				            <?php
			            }

			           ?>
			       		</div>
			           <?php

			            // Output the last item
			            if ( $query_count > 0 ) {
			                $l_cat = end( $query );
			                $l_id = $l_cat->term_id;
			                $l_src = WC_Booster_Url . '/img/default-image.jpg';
			                $l_thumbnail_id = get_term_meta( $l_id, 'thumbnail_id', true ); 
			                if ( $l_thumbnail_id ) {
			                    $l_src = wp_get_attachment_url( $l_thumbnail_id );
			                }

			                ?>
			              	<div class="wc-booster-category-collage-card-wrapper category-collage-right-card">
					            <div class="wc-booster-category-collage-inner-wrapper" style="background-image: url(<?php echo esc_url( $l_src ); ?>)">
					                <div class="wc-booster-category-collage-card">
					                    <div class="wc-booster-category-collage-body">
					                    	<div class="wc-booster-category-collage-body-inner">

				                            	<?php if( $attrs[ 'enableTitle' ] ): ?>
				    	                            <h2 class="wc-booster-category-collage-cat-title">
				    	                                <a href="<?php echo esc_url( get_category_link( $id ) ); ?>">
				    	                                    <?php echo esc_html( $l_cat->name ); ?>
				    	                                </a>
				    	                            </h2>
				                            	<?php endif; ?>

				                            	<?php if( $attrs[ 'enableDescription' ] ): ?>
				    	                            <p class="wc-booster-category-collage-cat-description">
				    	                                <?php echo esc_html( $l_cat->description ); ?>
				    	                            </p>
				                            	<?php endif; ?>
											<?php ?>
						                	</div>
					                    </div>
					                </div>
					            </div>
				            </div> 
			                <?php
			            }
 					endif;
 					?> 	
				</section>
				<?php
				wp_reset_postdata();
				$block_content = ob_get_clean();
			endif; 

			return $block_content;
		}
	}

	WC_Booster_Category_Collage_Block::get_instance();
}