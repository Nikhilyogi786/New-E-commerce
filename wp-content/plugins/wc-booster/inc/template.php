<?php
/**
 * Override WooCommerce default templates
 * 
 * @since WooCommerce Booster 1.0
 */
if( !class_exists( 'WC_Booster_Template' ) ){

    class WC_Booster_Template{

        public static $instance;

        public static function get_instance() {
            if ( ! self::$instance ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function __construct(){
            add_action( 'init', array( $this, 'init' ), 90 );
        }

        public function init(){
            add_filter( 'woocommerce_locate_template', array( $this, 'custom_woo_templates' ), 20, 3 );
        }

        public function custom_woo_templates( $template, $template_name, $template_path ){

            $settings = WC_Booster_Settings::get_instance();

            $custom_templates = array( 
                'cart/cart-totals.php',
                'cart/cart.php',
                'single-product/product-attributes.php',
                'single-product/short-description.php',
                'checkout/form-coupon.php'
            );

            if( 'on' == $settings->get_field( 'enable_mini_cart' ) ){
                $custom_templates[] = 'cart/mini-cart.php';
            }

            if( in_array( $template_name, $custom_templates ) ){
                return WC_Booster_Path . 'woocommerce/' . $template_name;
            }

            return $template;
        }
    }

    WC_Booster_Template::get_instance();
}