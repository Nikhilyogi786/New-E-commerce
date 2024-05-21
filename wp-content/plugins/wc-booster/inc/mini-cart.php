<?php
/**
 * Add mini cart 
 * 
 * @since WooCommerce Booster 1.0
 */
if( !class_exists( 'WC_Booster_Mini_Cart' ) ){

    class WC_Booster_Mini_Cart{

        public static $instance;

        public $slide_id = 'mini-cart-slide';

        public $settings;

        public static function get_instance() {
            if ( ! self::$instance ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

    	public function __construct(){
            add_action( 'init', array( $this, 'init' ) );
            add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'add_to_cart_fragment' ) );
    	}

        public function init(){

            $this->settings = WC_Booster_Settings::get_instance();
            add_shortcode( 'wc_booster_mini_cart', array( $this, 'render_shortcode' ) );

            if( 'on' == $this->settings->get_field( 'enable_mini_cart' ) ){
                
                new WC_Booster_Slide_Out([
                    'id'   => $this->slide_id,
                    'path' => WC_Booster_Url . '/class/slide',
                    'mode' => 'slide' // slide || popup
                ]);

                add_action( 'slide_out_content', array( $this, 'mini_cart' ) );

                add_filter( 'slide_out_toggler', array( $this, 'toggler' ) );

                add_action( 'wp_ajax_wc_booster_empty_cart', array( $this, 'empty_cart' ) );
                add_action( 'wp_ajax_nopriv_wc_booster_empty_cart', array( $this, 'empty_cart' ) );

                add_filter( 'slide_out_close_text', array( $this, 'close_icon' ) );

                add_filter( 'wp_nav_menu', array( $this, 'assign_to_menu' ), 30, 2 );
            }

            add_filter( 'woocommerce_cart_item_quantity', array( $this, 'item_quantity' ), 10, 3 );
        }

        public function item_quantity( $product_quantity, $cart_item_key, $cart_item ){
            
            $product_quantity = str_replace( 'type="number"', 'type="number" tabindex="-1"', $product_quantity );

            return $product_quantity;
        }

        public function render_shortcode(){

            if( is_cart() || is_checkout() || 'on' != $this->settings->get_field( 'enable_mini_cart' ) ){
                return;
            }

            ob_start();
            WC_Booster_Slide_Out::get_instance_by_id( $this->slide_id )->toggler();
            return ob_get_clean();
        }

        public function mini_cart( $slide ){

            if( is_cart() || is_checkout() ){
                return;
            }

            if( $this->slide_id == $slide->id ){
                woocommerce_mini_cart();
            }
        }

        public function empty_cart(){
            WC()->cart->empty_cart();
            woocommerce_mini_cart();
            wp_die();
        }

        public function add_to_cart_fragment( $fragments ) {
            $fragments[ 'total-cart-items' ] = WC()->cart->cart_contents_count;
            return $fragments;
        }
        
        public function get_product_info( $p ){

            $_product      = $p[ 'product' ];
            $cart_item     = $p[ 'cart_item' ];
            $cart_item_key = $p[ 'cart_item_key' ];

            $link = $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '#';
            $data = array(
                'name'        => apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ),
                'id'          => apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key ),
                'thumbnail'   => apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key ),
                'price'       => apply_filters( 'woocommerce_cart_item_price',WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key ),
                'permalink'   => apply_filters( 'woocommerce_cart_item_permalink', $link, $cart_item, $cart_item_key ),
                'remove_link' => esc_url( wc_get_cart_remove_url( $cart_item_key ) )
            );
            return $data;
        }

        public function toggler( $slide ){
            if( $this->slide_id == $slide->id ):
                $link  = wc_get_cart_url();
                $count = WC()->cart->cart_contents_count;
            ?>
                <a href="<?php echo esc_url( $link ); ?>" class="cart-icon">
                    <i class="fa fa-shopping-cart"></i>
                    <span class="count"><?php echo ( $count > 0 ) ? esc_html( $count ) : 0; ?></span>
                    <span class="cart-text"><?php esc_html_e( 'Cart', 'wc-booster' ); ?></span>
                </a>
            <?php
            endif;
        }

        public function close_icon( $icon ){
            $icons = WC_Booster_Icons::get_instance();
            return $icons->get_close_icon();
        }

        public function assign_to_menu( $nav_menu, $args ){

            $menu_id = $this->settings->get_field( 'mini_cart_menu' );
            if( $menu_id != $args->menu->term_id ){
                return $nav_menu;
            }

            ob_start();

            /**
             * Escaped internally in callback function
             * 
             */
            echo do_shortcode( '[wc_booster_mini_cart]' );
            $mini_cart = ob_get_clean();
            $nav_menu .= $mini_cart;

            return $nav_menu;
        }
    }
    
    WC_Booster_Mini_Cart::get_instance();
}