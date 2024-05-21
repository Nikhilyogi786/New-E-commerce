<?php
if( !class_exists( 'WC_Booster_Cta_Block' ) ){

	class WC_Booster_Cta_Block extends WC_Booster_Base_Block{

		public $slug = 'call-to-action';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Call To Action';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'This Block helps you engage your audience, increase conversions, and improve your online presence. Customize it to achieve your goals easily.';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
		<path fill="#ffffff" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/>
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

				$heading_typo = self::get_initial_responsive_props();
	    			if( isset( $attrs[ 'headingTypo' ] ) ){
	    				$heading_typo = self::get_typography_props(  $attrs[ 'headingTypo' ] );
	    		}

				$sub_heading_typo = self::get_initial_responsive_props();
					if( isset( $attrs[ 'subDescriptionTypo' ] ) ){
						$sub_heading_typo = self::get_typography_props(  $attrs[ 'subDescriptionTypo' ] );
				}

				$padding = self::get_dimension_props( 'padding', $attrs[ 'padding' ] );
				$subDescriptionMargin = self::get_dimension_props( 'margin', $attrs[ 'subDescriptionMargin' ] );

				$contentWidth = self::get_dimension_props( 'width', $attrs[ 'contentWidth' ] );

				
				foreach( self::$devices as $device ){

					$styles = [

						[
							'selector' => '',
							'props' => $padding[ $device ]
						],
						[
							'selector' => '.wc-booster-cta-content',
							'props' => $contentWidth[ $device ]
						],
						[
							'selector' => '.wc-booster-cta-content h2',
							'props' => $heading_typo[ $device ]
						],
						[
							'selector' => '.wc-booster-cta-content p',
							'props' => $sub_heading_typo[ $device ]
						],
						[
							'selector' => '.wc-booster-cta-content p',
							'props' => $subDescriptionMargin[ $device ]
						]
						
					];

					self::add_styles([
						'attrs' => $attrs,
						'css'   => $styles,
					], $device );
				}

				$opacity = $attrs[ 'opacity' ] / 10;

				$bg_image = ( $attrs[ 'bgImage' ] && $attrs[ 'bgImage' ][ 'url' ] ) ? $attrs[ 'bgImage' ][ 'url' ] : '';
				$bg_attachment = $attrs[ 'bgAttachment' ] ? "fixed" : "scroll";
				$bg_repeat = $attrs[ 'bgRepeat' ] ? "repeat" : "no-repeat";

				$desktop_css = [
					[
						'selector' => '',
						'props'    => [
							'border-radius' => [
								'unit' => 'px',
								'value' => $attrs[ 'borderRadius' ]
							],
							'background-image' => [
								'unit'  => '',
								'value' => 'url(' . $bg_image . ')'
							],
							'background-position' => 'bgPosition',
							'background-attachment' => [
								'unit'  => '',
								'value' => $bg_attachment
							],
							'background-repeat' => [
								'unit'  => '',
								'value' => $bg_repeat
							],
							'background-color' => 'bgColor',
							'background-size'  => 'bgSize'

							
						]
					],
					[
						'selector' => '.wc-booster-cta-content h2',
	    					'props'    => [
	    						'color' => 'headingColor'
	    					]
					],
					[
						'selector' => '.wc-booster-cta-content p',
						'props'    => [
							'color' => 'subDescriptionColor'
						]
					],
					[
						'selector' => '.wc-booster-cta-overlay',
						'props'    => [
							'background-color' => 'overlay',
							'opacity' => [
								'unit' => '',
								'value' => $opacity
							]
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
			
			$block_id = $attrs['block_id'];
			ob_start();
			?>

			<div id="<?php echo esc_attr( $block_id ); ?>" class="wc-booster-cta-content-wrapper <?php echo esc_attr( 'content-alignment-' . $attrs[ 'contentAlignment' ] ); ?>">
				<div class="wc-booster-cta-overlay" ></div>
				<div class="<?php echo esc_attr( 'wc-booster-align-'.$attrs['alignment'] )?> wc-booster-cta-content " >
					<div>
						<h2> <?php echo ( $attrs['heading'] )?> </h2>
					</div>	
					<div>
						<p><?php echo ( $attrs['subDescription'] )?></p>
					</div>				
					<div>
						<?php echo $content ?>
					</div>
				</div>
			</div>

			<?php
			return ob_get_clean();
		}
	}

	WC_Booster_Cta_Block::get_instance();
}