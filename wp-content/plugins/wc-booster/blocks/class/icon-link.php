<?php
if( !class_exists( 'WC_Booster_Icon_Link_Block' ) ){

	class WC_Booster_Icon_Link_Block extends WC_Booster_Base_Block{

		public $slug = 'icon-link';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Icon Link';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'The Icon Link block adds visually appealing links with custom icons to your WordPress site, enhancing navigation and highlighting key content.';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 512">
		<path
		fill="#ffffff"
		d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
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

		        $titleMargin = self::get_dimension_props( 'margin', $attrs[ 'titleMargin' ] );

				foreach( self::$devices as $device ){

					$styles = [

						[
							'selector' => '.wc-booster-icon-link-icon',
							'props' => $icon_size[ $device ]
						],
						[
							'selector' => '.wc-booster-icon-link-title',
							'props' => $text_typo[ $device ]
						],
						[
							'selector' => '.wc-booster-icon-link-title',
							'props' => $titleMargin[ $device ]
						]
					];

					self::add_styles([
						'attrs' => $attrs,
						'css'   => $styles,
					], $device );
				}

				$desktop_css = [
					[
						'selector' => '.wc-booster-icon-link-icon',
						'props' => [
							'color' => 'iconColor'
						]
					],
					[
						'selector' => '.wc-booster-icon-link-title',
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

		    $link =  ( $attrs[ 'useExternalLink' ] && $attrs[ 'externalLink' ] ) ? $attrs[ 'externalLink' ] : get_permalink($attrs['page']); 
		    
		    ob_start();
		    
		    ?>
		    <section id="<?php echo esc_attr( $attrs[ 'block_id' ] ); ?>" class="wc-booster-icon-link">
		    	<a href="<?php echo esc_url( $link ); ?>" class="wc-booster-icon-link-wrapper">
			        <i class="fa <?php echo isset( $attrs[ 'icon' ][ 'icon' ] ) ? esc_attr( $attrs[ 'icon'][ 'icon' ] ) : esc_attr( $attrs[ 'icon' ] ); ?> wc-booster-icon-link-icon"></i>
			        <p class="wc-booster-icon-link-title"><?php echo esc_html( $attrs[ 'title' ] ?? '' ); ?></p>
			    	</a>
		    </section>
		    <?php
		    return ob_get_clean();
		}

	}

	WC_Booster_Icon_Link_Block::get_instance();
}