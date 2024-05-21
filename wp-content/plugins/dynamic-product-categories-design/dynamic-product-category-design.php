<?php
use dpcdCategoryDesign\Helper;
/**
 * Plugin Name: Dynamic Product Categories Design
 * Description: WooCommerce plugin extension to design product categories section in a nice slider and grid layout.
 * Author: Dynamic Web Lab
 * Author URI:  https://dynamicweblab.com
 * Version: 1.1.1
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wc-pcd
 * Domain Path: /languages/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * This is mane class for the plugin
 */
final class DPCD_Categories_Design {

	/**
	 * Plugin version
	 *
	 * @var string
	 */
	const version = '1.1.1';

	private function __construct() {

		$this->define_constants();

		add_action( 'wp_enqueue_scripts', [ $this, 'wc_pcd_assets' ] );

		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueues' ] );

		add_action( 'init', [ $this, 'load_plugin_text_domain' ] );

		add_action( 'plugins_loaded', [ $this, 'plugins_loaded' ] );

		add_action( 'admin_init', [ $this, 'handle_post_meta' ] );

		register_activation_hook( __FILE__, [ $this, 'wc_pcd_active' ] );

	}

	/**
	 * Inisialize Plugin instence
	 *
	 * @access public
	 * @static
	 *
	 * @return \Woocommerce_Product_Categories_Design
	 */
	public static function init() {

		$instence = false;

		if ( ! $instence ) {
			$instence = new self();
		}

		return $instence;
	}

	/**
	 * Load Plugin textdomain.
	 *
	 * Load gettext translate for Elementor text domain.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	function load_plugin_text_domain() {
		load_plugin_textdomain( 'wc-pcd', false, plugin_basename( dirname( __FILE__ ) ) . '/languages' );
	}

	/**
	 * defin plugin constence
	 *
	 * @void
	 */
	public function define_constants() {

		define( 'DPCD_VERSION', self::version );
		define( 'DPCD_FILE', __FILE__ );
		define( 'DPCD_PATH', __DIR__ );
		define( 'DPCD_URL', plugins_url( '', DPCD_FILE ) );
		define( 'DPCD_ASSETS', DPCD_URL . '/assets' );

	}

	/**
	 * Do stuff upon plugin activation
	 *
	 * @return void
	 */
	public function wc_pcd_active() {
		$installed = get_option( 'wc_pcd_installed' );

		if ( ! $installed ) {
			update_option( 'wc_pcd_installed', time() );
		}
		update_option( 'wc_pcd_version', DPCD_VERSION );
	}

	/**
	 * Include Files
	 *
	 * Load core files required to run the plugin.
	 *
	 * @access public
	 */
	public function plugins_loaded() {	

		// Check if Woocommerce installed and activated
		if ( !defined('WC_VERSION') ) {
			add_action( 'admin_notices', array( $this, 'admin_notice_missing_main_plugin' ) );
			return;
		}

		require_once DPCD_PATH . '/include/helper.php';
		require_once DPCD_PATH . '/include/functions.php';
		require_once DPCD_PATH . '/include/Frontend/Shortcode.php';
		require_once DPCD_PATH . '/include/Admin/Custom_Post_Type.php';
		require_once DPCD_PATH . '/include/Admin/Admin.php';
		

		/**
		 * Include CMB 2 metabox FrameWork
		*/
		require_once DPCD_PATH . '/lib/cmb2/init.php';

		require_once DPCD_PATH . '/lib/CMB2-radio-image/cmb2-radio-image.php';

		require_once DPCD_PATH . '/lib/cmb2-tabs/cmb2-tabs.php';
		
		/**
		 * Include CMB 2 metabox FrameWork
		*/
		require_once DPCD_PATH . '/include/Metaboxes/Cat_Showcase_Metabox.php';

		// Check if Elementor installed and activated
		if ( did_action( 'elementor/loaded' ) ) {
			include_once DPCD_PATH . '/include/elementor/ElementorWidgets.php';
		}
	}

	/**
	 * Admin notice
	 *
	 * Warning when the site doesn't have Elementor installed or activated.
	 *
	 * @since 1.1.0
	 * @access public
	 */

	public function admin_notice_missing_main_plugin() {
		if ( isset( $_GET['activate'] ) ) {
			unset( $_GET['activate'] );
		}

		$message = sprintf(
			/* translators: 1: Plugin name 2: WooCommerce */
			esc_html__( '"%1$s" requires "%2$s" to be installed and activated.', 'wc-pcd' ),
			'<strong>' . esc_html__( 'Dynamic Product Categories Design', 'wc-pcd' ) . '</strong>',
			'<strong>' . esc_html__( 'WooCommerce', 'wc-pcd' ) . '</strong>'
		);

		printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );
	}

	/**
	 * Load plugin js and css file
	 */

	public function wc_pcd_assets() {

		wp_register_style( 'dpcd-slick', DPCD_ASSETS . '/vendors/accessible-slick/css/slick.min.css', 'all' );
		wp_register_style( 'dpcd-accessible-slick-theme', DPCD_ASSETS . '/vendors/accessible-slick/css/accessible-slick-theme.min.css', 'all' );
		wp_register_style( 'dpcd-grid', DPCD_ASSETS . '/css/pcd-grid.css', [], DPCD_VERSION );
		wp_register_style( 'dpcd-elementor', DPCD_ASSETS . '/css/pdc-elementor.css', [], DPCD_VERSION );
		wp_register_style( 'dpcd-category-design-css', DPCD_ASSETS . '/css/category-design.css', [], DPCD_VERSION );
		wp_enqueue_style( 'dpcd-category-design-css' );
		
		wp_register_script( 'dpcd-accessible-slick', DPCD_ASSETS . '/vendors/accessible-slick/js/slick.min.js', ['jquery'], DPCD_VERSION, true );
		wp_register_script( 'dpcd-slider-script', DPCD_ASSETS . '/js/slider-script.js', ['dpcd-accessible-slick'], DPCD_VERSION, true);
		wp_register_script( 'dpcd-el-slider-js', DPCD_ASSETS . '/js/el-slider.js', ['dpcd-accessible-slick'], DPCD_VERSION, true);

		$upload_dir = wp_upload_dir();
		$css_file   = $upload_dir['basedir'] . '/dynamic-product-category-design/category-design.css';

		if ( file_exists( $css_file ) ) {
			wp_enqueue_style( 'dpcd-generated', set_url_scheme( $upload_dir['baseurl'] ) . '/dynamic-product-category-design/category-design.css', null, time() );
		}
	}

	public function admin_enqueues($hook ) {
		$screen = get_current_screen(); 

		if ( ('post-new.php' == $hook OR 'post.php' == $hook) AND $screen->post_type == 'dpcd_category_design') {
			
			wp_enqueue_style( 
				'dpcd-meta-css', DPCD_ASSETS . '/css/admin.css', 
				array(), 
				DPCD_VERSION 
			);
			wp_enqueue_script(
				'dpcd-cmb2-conditional-logic', 
				plugins_url( 'assets/js/cmb2-conditional-logic.js', __FILE__ ),
				array('jquery'), 
				'1.1.1',
				true
			);
			wp_enqueue_script( 
				'dpcd-clipboard',  
				plugins_url( 'assets/vendors/clipboard/clipboard.min.js', __FILE__ ), 
				[], 
				DPCD_VERSION, 
				true
			);
			wp_enqueue_script( 
				'dpcd-admin', 
				DPCD_ASSETS . '/js/dpc-admin.js', 
				['dpcd-clipboard'], 
				DPCD_VERSION, 
				true
			);
			
		}

		

	}

	public function handle_post_meta() {
		add_action( 'save_post', [$this, 'add_generated_css_after_delete_post'], 10, 3 );
		add_action( 'before_delete_post', [$this, 'remove_generated_css_after_delete_post'], 10, 2 );
	}

	public function add_generated_css_after_delete_post( $post_id, $post, $update ) {
		
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
            return $post_id;
        }

		if( 'dpcd_category_design' !== $post->post_type ){
			return false;
		}

		Helper::generatorShortcodeCss($post_id);
	}

	public function remove_generated_css_after_delete_post( $post_id, $post ) {
		
		if ('dpcd_category_design' !== $post->post_type) {
            return $post_id;
        }

		Helper::removeGeneratorShortcodeCss( $post_id );
	}

}

/**
 * Init The main class
 *
 * @return false|DPCD_Categories_Design
 */
function dpcd_categories_design() {
	return DPCD_Categories_Design::init();
}

dpcd_categories_design();