<?php 
/**
 * Category page features
 * 
 * @since WooCommerce Booster 1.0
 */
use WC_Booster_Custom_Fields\Taxonomy;

if( !class_exists( 'WC_Booster_Category' ) ){
	class WC_Booster_Category{

		public static $instance;

		public $settings;

		public $taxonomy = 'product_cat';

		public static function get_instance() {
		    if ( ! self::$instance ) {
		        self::$instance = new self();
		    }
		    return self::$instance;
		}

		public function __construct(){

			add_action( 'init', array( $this, 'init' ) );

		}

		public function init(){

			$field = new Taxonomy( $this->taxonomy );

			$category_field = [
				'wc_booster_category_icon' => [
					'label' => __( 'Icon', 'wc-booster' ),
					'type'  => 'icon-selector',
					'description' => esc_html__( 'For WC Booster Block.', 'wc-booster' )
				]
			];
			
			$field->add_fields( $category_field );
			
		}

	}

	WC_Booster_Category::get_instance();
}