<?php
if( !class_exists( 'WC_Booster_Usp_Block' ) ){

	class WC_Booster_Usp_Block extends WC_Booster_Base_Block{

		public $slug = 'usp';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Unique Selling Points';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'The Product Unique Selling Points block highlights key features, designed for use on the product single page template only.';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 576 512">
			<path
				fill="#ffffff"
				d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z"/>
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
			
				$icon_size = self::get_initial_responsive_props();

				if( isset( $attrs[ 'iconSize' ] ) ){
					$icon_size = self::get_dimension_props( 'font-size',
						$attrs[ 'iconSize' ]
					);
				}

				$text_typo = self::get_initial_responsive_props();
	    			if( isset( $attrs[ 'textTypo' ] ) ){
	    				$text_typo = self::get_typography_props(  $attrs[ 'textTypo' ] );
	    		}
				
				foreach( self::$devices as $device ){

					$styles = [

						[
							'selector' => 'li i',
							'props' => $icon_size[ $device ]
						],
						[
							'selector' => 'li span',
							'props' => $text_typo[ $device ]
						]
					];

					self::add_styles([
						'attrs' => $attrs,
						'css'   => $styles,
					], $device );
				}

				$desktop_css = [
					[
						'selector' => 'li i',
						'props' => [
							'color' => 'iconColor'
						]
					],
					[
						'selector' => 'li span',
						'props' => [
							'color' => 'textColor'
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

			// Check if we are on a single product page
			if ( ! is_product() ) {
				return;
			}

			global $product;

			$product_id =  is_product()  ? wc_get_product()->get_id() : '' ;

			$usps = get_post_meta( $product_id, 'wc_booster_product_usps', true );

			if( is_array( $usps ) ){
				ob_start();
				?>
				<ul  id="<?php echo esc_attr( $attrs[ 'block_id' ] ); ?>" class="wc-booster-usps">
				<?php
					foreach( $usps as $usp ){
						foreach( $usp as $u ){
							?>
							<li><i class="fa <?php echo isset( $attrs[ 'icon' ][ 'icon' ] ) ? esc_attr( $attrs[ 'icon'][ 'icon' ] ) : esc_attr( $attrs[ 'icon' ] ); ?>"></i><span><?php echo esc_html( $u[ 'value' ] ); ?></span></li>
							<?php
						}
					}
				?>
				</ul>
				<?php
			}
	        return ob_get_clean();
		}
	}

	WC_Booster_Usp_Block::get_instance();
}