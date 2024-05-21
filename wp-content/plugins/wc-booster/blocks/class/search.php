<?php
if( !class_exists( 'WC_Booster_Search_Block' ) ){

	class WC_Booster_Search_Block extends WC_Booster_Base_Block{

		public $slug = 'search';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Search';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'The Search Block provides instant search results and relevant suggestions, enhancing the search experience for users on your website.';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
			<path
				fill="#ffffff"
				d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
			/>
		</svg>';

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

			foreach( $this->blocks as $block ){

				$attrs = self::get_attrs_with_default( $block[ 'attrs' ] );

				if( in_array( $attrs[ 'block_id' ], $this->block_ids ) ){
					continue;
				}

				$this->block_ids[] = $attrs[ 'block_id' ];
			
				$padding = self::get_initial_responsive_props();
				if( isset( $attrs[ 'padding' ] ) ){
					$padding = self::get_dimension_props( [ 'padding-right', 'padding-left' ],
						$attrs[ 'padding' ]
					);
				}

				$margin = self::get_initial_responsive_props();
				if( isset( $attrs[ 'margin' ] ) ){
					$margin = self::get_dimension_props( 'margin',
						$attrs[ 'margin' ]
					);
				}

				$icon_size = self::get_initial_responsive_props();
				if( isset( $attrs[ 'iconSize' ] ) ){
					$icon_size = self::get_dimension_props( 'font-size',
						$attrs[ 'iconSize' ]
					);
				}

				$font_size = self::get_initial_responsive_props();
				if( isset( $attrs[ 'fontSize' ] ) ){
					$font_size = self::get_dimension_props( 'font-size',
						$attrs[ 'fontSize' ]
					);
				}

				$height = $line_height = self::get_initial_responsive_props();
				if( isset( $attrs[ 'height' ] ) ){
					$height = self::get_dimension_props( 'height',
						$attrs[ 'height' ]
					);
					$line_height = self::get_dimension_props( 'line-height',
						$attrs[ 'height' ]
					);
				}

				foreach( self::$devices as $device ){

					$styles = [
						[
							'selector' => '',
							'props' => array_merge( $margin[ $device ] )
						],
						[
							'selector' => 'form.wc-booster-search-form .select2-container--default .select2-selection--single .select2-selection__arrow',
							'props' => $icon_size[ $device ]
						],
						[
							'selector' => '.select2-container--default .select2-selection--single .select2-selection__placeholder',
							'props' => $font_size[ $device ]
						],
						[
							'selector' => [ '.wc-booster-search-form .select2-container', 'form.wc-booster-search-form .select2-container--default .select2-selection--single', '.select2-container--default .select2-selection--single .select2-selection__placeholder', 'form.wc-booster-search-form .select2-container--default .select2-selection--single .select2-selection__arrow' ],
							'props' => $height[ $device ]
						],
						[
							'selector' => 'form.wc-booster-search-form .select2-container--default .select2-selection--single .select2-selection__rendered',
							'props' => array_merge( $line_height[ $device ], $padding[ $device ] )
						],
						[
							'selector' => 'form.wc-booster-search-form .select2-container--default .select2-selection--single .select2-selection__arrow',
							'props' => $padding[ $device ]
						]
					];

					self::add_styles([
						'attrs' => $attrs,
						'css'   => $styles,
					], $device );
				}

				$desktop_css = [
					[
						'selector' => 'form.wc-booster-search-form .select2-container--default .select2-selection--single .select2-selection__arrow',
						'props' => array_merge(
							[ 
								'color' => 'color',
								'background-color' => 'bgColor',
								'border-left' => [
									'unit' => 'px',
									'value' => 0
								]
							]
						)
					],
					[
						'selector' => 'form.wc-booster-search-form .select2-container--default .select2-selection--single .select2-selection__arrow:after',
						'props' => [
							'color' => 'color'
						]
					]
				];

				self::add_styles( array(
					'attrs' => $attrs,
					'css'   => $desktop_css,
				));
			}
		}

		public function render( $attrs, $content, $block ){
		   
		    $post_id = isset( $block->context[ 'postId' ] ) ? $block->context[ 'postId' ] : '';
		   
	        ob_start();
	       	?>
	       	<div id="<?php echo esc_attr( $attrs[ 'block_id' ] ); ?>">
	       		<form class="wc-booster-search-form">
	    			<select data-placeholder="<?php echo esc_attr( $attrs[ 'placeholder' ] ); ?>" class="wc-booster-product" name="wc_booster_product"></select>
	    		</form>
	       	</div>
	       	<?php
	        return ob_get_clean();
		    
		}
	}

	WC_Booster_Search_Block::get_instance();
}