<?php
/**
 * Load Text domain
 * 
 * @since WooCommerce Booster 1.0
 */
if( !class_exists( 'WC_Booster_Text_Domain' ) ){

    class WC_Booster_Text_Domain{

        public static $instance;

        public $settings;

        public static function get_instance() {
            if ( ! self::$instance ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

    	public function __construct(){
            add_action( 'init', array( $this, 'load' ) );
    	}

        public function load(){
            load_plugin_textdomain( 'wc-booster', false, WC_Booster_Path . '/languages' ); 
        }
    }

    WC_Booster_Text_Domain::get_instance();
}