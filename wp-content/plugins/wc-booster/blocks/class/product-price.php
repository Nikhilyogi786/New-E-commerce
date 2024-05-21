<?php
if( !class_exists( 'WC_Booster_Product_Price_Block' ) ){

	class WC_Booster_Product_Price_Block extends WC_Booster_Base_Block{

		public $slug = 'product-price';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Product Price';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'This block is tailored for products with multiple variations, offering flexible display and styling options for their prices.';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 320 512">
		<path
		d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
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

		            $text_typo = self::get_initial_responsive_props();
		            if( isset( $attrs[ 'textTypo' ] ) ){
		                $text_typo = self::get_typography_props(  $attrs[ 'textTypo' ] );
		            }

		            $margin = self::get_dimension_props( 'margin', $attrs[ 'margin' ] );

		           	foreach( [ 'mobile', 'tablet', 'desktop' ] as $device ){
		                $css = [
		                    [
		                        'selector' => '.wc-booster-product-price-wrapper',
		                        'props'    => $text_typo[ $device ]
		                    ],
		                    [
		                        'selector' => '.wc-booster-product-price-wrapper',
		                        'props' => $margin[ $device ],
		                    ],
		                ];

		                self::add_styles( [
		                    'attrs' => $attrs,
		                    'css'   => $css,
		                ], $device );
		            }

		            $dynamic_css = [
		            	[
		                    'selector' => '.wc-booster-product-price-wrapper',
		                    'props' => [
		                        'color' => 'color'
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

		public function render( $attrs, $content, $block ) {

		    if ( ! is_product() ) {
		        return;
		    }

		    global $product;

		    ob_start();
		    ?>

		    <div id="<?php echo esc_attr( $attrs[ 'block_id' ] ); ?>">
		        <div class="wc-booster-product-price-wrapper wc-booster-pvp">
		            <?php
		            if ($product->is_type('variable') && !$product->is_type('grouped') ) {
		                $variation_prices = array_map(function ($variation) {
		                    return wc_get_product($variation['variation_id'])->get_price();
		                }, $product->get_available_variations());

		                if ($attrs['priceType'] == 'min') {
		                    $min_price = min($variation_prices);
		                    echo ( $attrs['enablePrefix'] ? $attrs['minPrefixText'] : '' ) . wc_price($min_price);
		                } elseif ($attrs['priceType'] == 'max') {
		                    $max_price = max($variation_prices);
		                    echo ( $attrs['enablePrefix'] ? $attrs['maxPrefixText'] : '' ) . wc_price($max_price);
		                } elseif ($attrs['priceType'] == 'min_to_max') {
		                    $min_price = min($variation_prices);
		                    $max_price = max($variation_prices);
		                    echo ( $attrs['enablePrefix'] ? $attrs['minMaxPrefixText'] : '' ) . wc_price($min_price) . ' - ' . wc_price($max_price);
		                } elseif ($attrs['priceType'] == 'max_to_min') {
		                    $min_price = min($variation_prices);
		                    $max_price = max($variation_prices);
		                    echo ( $attrs['enablePrefix'] ? $attrs['minMaxPrefixText'] : '' ) . wc_price($max_price) . ' - ' . wc_price($min_price);
		                }
		            } else {
		                echo $product->get_price_html();
		            }
		            ?>
		        </div>
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	WC_Booster_Product_Price_Block::get_instance();
}