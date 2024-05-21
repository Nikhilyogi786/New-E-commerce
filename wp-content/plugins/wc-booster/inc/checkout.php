<?php
/**
 * Checkout
 * 
 * @since WooCommerce Booster 1.0
 */
if( !class_exists( 'WC_Booster_Checkout' ) ){

    class WC_Booster_Checkout{

        public static $instance;

        public static function get_instance(){

            if( !self::$instance ){
                self::$instance = new self();
            }

            return self::$instance;
        }

    	public function __construct(){
            remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10 );
            add_filter( 'the_title', array( $this, 'thankyou_page_title' ), 20, 2 );
            add_shortcode( 'wc_booster_checkout', array( $this, 'shortcode_render' ) );

            add_action( 'woocommerce_after_cart', [ $this, 'custom_terms_condition' ] );
        }

        public function shortcode_render(){
            ob_start();
            do_action( 'wc_booster_before_checkout' );
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <?php 
                    /** 
                     * Display the WooCommerce checkout on a page
                     * This is a native WooCommerce shortcode which is developed to be used directly in post 
                     * content, widgets, or template files.
                     * They undergo proper sanitation and validation internally, 
                     * reducing the risk of security vulnerabilities. 
                     * This ensures that the rendered output is safe for users without developers 
                     * needing to manually escape it.
                     * 
                     * @link https://woocommerce.com/document/woocommerce-shortcodes/#checkout
                     * 
                     */
                    echo do_shortcode( '[woocommerce_checkout]' ); 
                ?>
                <?php if( function_exists( 'is_checkout' ) && is_checkout() && !is_wc_endpoint_url( 'order-received' ) ): ?>
                    <div class="checkout-cart">
                        <?php 
                            /**
                             * Display the WooCommerce cart on a page
                             * This is a native WooCommerce shortcode which is developed to be used directly in post 
                             * content, widgets, or template files.
                             * They undergo proper sanitation and validation internally, 
                             * reducing the risk of security vulnerabilities. 
                             * This ensures that the rendered output is safe for users without developers 
                             * needing to manually escape it.
                             * 
                             * @link https://woocommerce.com/document/woocommerce-shortcodes/#cart
                             * 
                             */ 
                            echo do_shortcode( '[woocommerce_cart]' ); 
                        ?>
                    </div>
                <?php endif; ?>
            </article>
            <?php
            do_action( 'wc_booster_after_checkout' );

            return ob_get_clean();
        }

        public function custom_terms_condition(){

            $page_id = wc_get_page_id( 'cart' );
            if( $page_id && is_page( $page_id ) ){
                return;
            }

            if( apply_filters( 'woocommerce_checkout_show_terms', true ) && function_exists( 'wc_terms_and_conditions_checkbox_enabled' ) && wc_terms_and_conditions_checkbox_enabled() ){
                ?>
                <p class="wc-booster-terms-checkbox-wrapper">
                    <label>
                        <input type="checkbox" 
                            class="wc-booster-terms-checkbox" 
                            name="terms" 
                            <?php checked( apply_filters( 'woocommerce_terms_is_checked_default', isset( $_POST[ 'terms' ] ) ), true ); ?> 
                        />
                        <span class="woocommerce-terms-and-conditions-checkbox-text">
                            <?php wc_terms_and_conditions_checkbox_text(); ?>
                        </span>&nbsp;<abbr class="required" title="<?php esc_attr_e( 'required', 'wc-booster' ); ?>">*</abbr>
                    </label>
                </p>    
                <?php
            }
        ?>
            <div class="wc-booster-place-order-wrapper">
                <button class="wc-booster-place-order">
                    <?php esc_html_e( 'Place your order', 'wc-booster' ); ?>
                </button>
            </div>
        <?php
        }

        public function thankyou_page_title( $post_title, $post_id = false ){
            if( function_exists( 'is_checkout' ) && is_checkout() && is_wc_endpoint_url( 'order-received' ) ){
                $post_title = esc_html__( 'Thank you', 'wc-booster' );
            }

            return $post_title;
        }
    }

    WC_Booster_Checkout::get_instance();
}