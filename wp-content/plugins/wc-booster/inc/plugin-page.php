<?php 
use WC_Booster_Custom_Fields\Setting;

if( !class_exists( 'WC_Booster_Settings' ) ){
	class WC_Booster_Settings{

		public static $instance;
		public  $setting;

		public $menu_slug = 'wc_booster';

		public static function get_instance() {
		    if ( ! self::$instance ) {
		        self::$instance = new self();
		    }
		    return self::$instance;
		}

		public function __construct(){
			add_action( 'plugins_loaded', array( $this, 'register_menu' ), 90 );
			add_action( 'admin_menu', array( $this, 'add_submenu' ), 90 );
			add_filter( 'plugin_action_links_' . plugin_basename( WC_Booster_File ), array( $this, 'action_links' ) );
		}

		public function action_links( $links ){

			$custom_links = [];
			$custom_links[] = sprintf(
				'<a href="%s">%s</a>', 
				admin_url( 'admin.php?page=wc_booster_options' ),
				esc_html__( 'Settings', 'wc-booster' )
			);

			$show_pro_label = apply_filters( 'wc_booster_show_pro_label', true );

			if( $show_pro_label ){
				$custom_links[] = sprintf( 
					'<a style="font-weight: 800;" href="%s" target="_blank">%s</a>',
					esc_url( '//wcbooster.com/pricing/' ),
					esc_html__( 'Go Pro', 'wc-booster' )
				);
			}
			
			return array_merge( $custom_links, $links );
		}

		public function add_submenu(){

			add_menu_page(
		       esc_html__( 'WooCommerce Booster', 'wc-booster' ), # page title
		       esc_html__( 'WC Booster', 'wc-booster' ), # menu title
		       'manage_options', # capability
		       $this->menu_slug,
		       array( $this, 'render_main_page' ),
		       'dashicons-cart', # icon
		       55
		    );

			add_submenu_page( 
				$this->menu_slug, # parent slug
				esc_html__( 'Settings', 'wc-booster' ), # page title
				esc_html__( 'Settings', 'wc-booster' ), # menu title
				'manage_options', # capability
				'wc_booster_options', # menu_slug
				array( $this->setting, 'render' ), # function
				10 # position
			);
		}

		public function render_main_page(){
			include WC_Booster_Path . 'admin-page-template.php';
		}

		public function register_menu(){

			$this->setting = new Setting([
				'key'  => 'wc_booster',
				'slug' => 'wc_booster',
				'wc-booster-options'
			]);

			$fields = apply_filters( 'wc_booster_admin_fields', [] );
			$this->setting->add_fields( $fields );
		}

		public function get_settings(){
			return $this->setting->get();
		}

		public function get_field( $key ){
			return $this->setting->get( $key );
		}
	}

	WC_Booster_Settings::get_instance();
}