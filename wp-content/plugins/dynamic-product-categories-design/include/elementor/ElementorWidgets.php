<?php
namespace dpcdCategoryDesign;

use Elementor\Plugin;
/**
 * Class Plugin
 *
 * Main Plugin class
 * @since 1.2.0
 */
class Elementor_Widgets {

	/**
	 * Instance
	 *
	 * @since 1.2.0
	 * @access private
	 * @static
	 *
	 * @var Plugin The single instance of the class.
	 */
	private static $_instance = null;

	/**
	 * Instance
	 *
	 * Ensures only one instance of the class is loaded or can be loaded.
	 *
	 * @since 1.2.0
	 * @access public
	 *
	 * @return Plugin An instance of the class.
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * widget_scripts
	 *
	 * Load required plugin core files.
	 *
	 * @since 1.2.0
	 * @access public
	 */
	public function widget_scripts() {
	
	}

	/**
	 * Editor scripts
	 *
	 * Enqueue plugin javascripts integrations for Elementor editor.
	 *
	 * @since 1.2.1
	 * @access public
	 */
	public function editor_scripts() {

		wp_enqueue_script( 'dpcd-accessible-slick' );
		wp_enqueue_script( 'dpcd-slider-script' );
		wp_enqueue_script( 'dpcd-el-slider-js' );
	}

	public function editor_styles(){

		wp_enqueue_style('dpcd-slick');
		wp_enqueue_style('dpcd-accessible-slick-theme');
		wp_enqueue_style('dpcd-category-design-css');
		wp_enqueue_style('dpcd-elementor');
		

	}
	/**
	 * Force load editor script as a module
	 *
	 * @since 1.2.1
	 *
	 * @param string $tag
	 * @param string $handle
	 *
	 * @return string
	 */
	public function editor_scripts_as_a_module( $tag, $handle ) {

	}

	public function register_widget_category( $elements_manager ) {

		$elements_manager->add_category(
			'dwl-items',
			[
				'title' => __( 'DWL Elements', 'wc-pcd' ),
				'icon' => 'fa fa-plug',
			]
		);
	}

	/**
	 * Include Widgets files
	 *
	 * Load widgets files
	 *
	 * @since 1.2.0
	 * @access private
	 */
	private function include_widgets_files() {
		require_once( __DIR__ . '/widgets/Category.php' );
	}

	/**
	 * Register Widgets
	 *
	 * Register new Elementor widgets.
	 *
	 * @since 1.2.0
	 * @access public
	 */
	public function register_widgets() {
		// Its is now safe to include Widgets files
		$this->include_widgets_files();

		// Register Widgets
        Plugin::instance()->widgets_manager->register_widget_type( new Elementor\Widgets\Category() );

	}


	/**
	 *  Plugin class constructor
	 *
	 * Register plugin action hooks and filters
	 *
	 * @since 1.2.0
	 * @access public
	 */
	public function __construct() {

		// Register widget scripts
		add_action( 'elementor/frontend/after_register_scripts', [ $this, 'widget_scripts' ] );

		// Register widgets
		add_action( 'elementor/widgets/widgets_registered', [ $this, 'register_widgets' ] );

		add_action( 'elementor/elements/categories_registered', [ $this, 'register_widget_category' ] );

		add_action( 'elementor/preview/enqueue_scripts', array( $this, 'editor_scripts' ) );
		
		add_action( 'elementor/preview/enqueue_styles', array( $this, 'editor_styles' ) );

	}
}

// Instantiate Plugin Class
Elementor_Widgets::instance();