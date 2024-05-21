<?php
/**
 * Plugin Name: WC Booster - Minimalist product addon for WooCommmerce plugin
 * Plugin URI: https://www.eaglevisionit.com/downloads/wc-booster/
 * Description: Advance your business by giving customers a distinctive shopping experience with WC Booster.
 * Author: Eagle Vision IT
 * Author URI: https://www.eaglevisionit.com/
 * Version: 1.9
 * Requires at least: 6.1
 * Text Domain: wc-booster
 * Requires PHP: 7.3
 * 
 * WC tested up to: 8.8.2
 */

# Exit if accessed directly.
if( ! defined( 'ABSPATH' ) ){
    exit;
}

define( 'WC_Booster_File', __FILE__ );
define( 'WC_Booster_Url', plugin_dir_url( WC_Booster_File ) );
define( 'WC_Booster_Path', plugin_dir_path( WC_Booster_File ) );
define( 'WC_Booster_Version', get_file_data(__FILE__, array('Version' => 'Version'), false)['Version'] );

function wc_booster_load(){

    do_action( 'wc_booster_before_load' );

    $files = array(
        'custom-fields/main.php',
        'class/scripts.php',
        'class/slide/slide-out.php',
        'class/icons.php',
        'blocks/helper.php',
        'blocks/init.php',
        'inc/script-loader.php',
        'inc/template.php',
        'inc/plugin-page.php',
        'inc/mini-cart.php',

        /***** blocks *****/
        'inc/quick-view.php',
        'inc/product.php',
        'inc/search.php',
        'inc/wishlist.php',
        'inc/carousel-product.php',
        /***** blocks *****/

        'inc/text-domain.php',
        'inc/checkout.php',
        'inc/admin-fields.php'
    );

    if ( function_exists( 'wc_booster_pro_load' ) ) { 
       $files[] = 'inc/category.php';  
    }

    $files = array_map(function( $file ){
        return WC_Booster_Path . $file;
    }, $files );

    $files = apply_filters( 'wc_booster_files', $files );
    if( is_array( $files ) ){
        foreach( $files as $file ){
            if( file_exists( $file ) ){
                require $file;
            }
        }
    }

    do_action( 'wc_booster_after_load' );
    
}
add_action( 'woocommerce_loaded', 'wc_booster_load' );

function wc_booster_admin_notice(){
    
    if( did_action( 'woocommerce_loaded' ) ){
        return;
    }

    $class = 'notice notice-info';
    $message = __( 'Unlock enhanced features with WC Booster by installing WooCommerce. This dynamic addon takes your e-commerce experience to the next level. Get started today!', 'wc-booster' );
    printf( 
        '<div class="%1$s"><p>%2$s <a href="plugins.php">%3$s</a></p></div>', 
        esc_attr( $class ), 
        esc_html( $message ),
        esc_html__( 'Install & Activate', 'wc-booster' ) 
    );
}
add_action( 'admin_notices', 'wc_booster_admin_notice' );

add_action( 'before_woocommerce_init', function() {
    if ( class_exists( \Automattic\WooCommerce\Utilities\FeaturesUtil::class ) ) {
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility( 'custom_order_tables', __FILE__, true );
    }
});