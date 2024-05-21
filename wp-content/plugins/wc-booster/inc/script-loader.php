<?php
/**
 * Handle all the scripts here
 * 
 * @since WooCommerce Booster 1.0
 */
if( !class_exists( 'WC_Booster_Script_Loader' ) ){

    class WC_Booster_Script_Loader{

        public static $instance;

        public static function get_instance() {
            if ( ! self::$instance ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function __construct(){
            add_action( 'init', array( $this, 'init' ) );
            add_action( 'wp_enqueue_scripts', array( $this, 'dequeue' ) );
        }

        public function dequeue(){
            wp_dequeue_style( 'woocommerce-blocktheme' );
        }

        public function init(){

            if( is_admin() ){
                $script = new WC_Booster_Script([
                    'hook' => 'enqueue_block_assets',
                    'path' => WC_Booster_Url . 'blocks',
                    'type' => 'unminified'
                ]);

                $script->load([
                    [
                        'handle' => 'editor-style',
                        'style'  => 'styles/editor.css'
                    ]
                ]);
            
                $script = new WC_Booster_Script([
                    'hook' => 'enqueue_block_assets',
                    'path' => WC_Booster_Url . 'assets',
                    'type' => 'unminified'

                ]);

                $script->load([
                    [
                        'handle' => 'slick',
                        'style'  => 'vendors/slick/slick.css',
                        'version' => '1.8.0'
                    ]
                ]);

                $script = new WC_Booster_Script([
                    'hook' => 'admin_enqueue_scripts',
                    'path' => WC_Booster_Url . 'assets'
                ]);

                $script->load([
                    [
                        'handle' => 'font-awesome-new',
                        'style'  => 'vendors/font-awesome/css/all.css',
                        'version' => '6.5.1'
                    ]
                ]);
            }
            
            $script = new WC_Booster_Script([
                'hook' => 'enqueue_block_assets',
                'path' => WC_Booster_Url . 'assets'
            ]);

            $script->load([
                [
                    'handle' => 'font-awesome-new',
                    'style'  => 'vendors/font-awesome/css/all.css',
                    'version' => '6.5.1'
                ]
            ]);

            $script = new WC_Booster_Script([
                'path' => WC_Booster_Url . 'assets',
                'type' => 'unminified'
            ]);

            $settings = WC_Booster_Settings::get_instance();
            
            $script->load([ 
                [
                    'handle'  => 'wc-booster',
                    'style'   => 'build/css/style.css',
                    'version' => '1.0'
                ],
                [
                    'handle' => 'wc-booster',
                    'script' => 'build/main.js',
                    'version' => '1.0',
                    'localize' => array(
                        'key' => 'WC_BOOSTER',
                        'data' => array(
                            'ajax_url'           => admin_url( 'admin-ajax.php' ),
                            'ajax_nonce'         => wp_create_nonce( 'wc_booster_ajax_nonce' ),
                            'checkout_url'       => wc_get_checkout_url(),
                            'show_update_button' => $settings->get_field( 'mini_cart_show_update_button' ),
                            'sticky_cart_offset' => 500,
                            'search_placeholder' => $settings->get_field( 'search_placeholder' )
                        )
                    )
                ],
                
                [
                    'handle' => 'select2',
                    'style'  => 'vendors/select2/css/select2.css',
                    'version' => '4.0.13'
                ],
                [
                    'handle'  => 'select2',
                    'script'  => 'vendors/select2/js/select2.js',
                    'version' => '4.0.13'
                ],
                [
                    'handle'     => 'sweet-alert',
                    'script'     => 'vendors/sweet-alert/sweetalert2.js',
                    'version'    => '11.4.8',
                    'dependency' => [ 'jquery' ]
                ],
                [
                    'handle'  => 'sweet-alert',
                    'style'   => 'vendors/sweet-alert/sweetalert2.css',
                    'version' => '11.4.8'
                ]
            ]);
        }
    }

    WC_Booster_Script_Loader::get_instance();
}