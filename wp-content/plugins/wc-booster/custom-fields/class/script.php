<?php
/**
 * Handle script and style 
 * 
 * @since Create Custom Fields 1.0
 */
namespace WC_Booster_Custom_Fields;

class Script{

	public $version = '1.0';

	public function __construct(){
		add_action( 'admin_enqueue_scripts', array( $this, 'scripts' ) );

		$plugin_data = get_plugin_data( WC_Booster_File );
		$this->version = $plugin_data[ 'Version' ];
		
	}

	public function get_handler( $handler ){
	    return  'wc-booster-' . $handler;
	}

	public function get_directory_uri( $file ){
	    return WBCF_URL . 'assets/' . $file;
	}
	
	public function enqueue_style( $config, $absolute = false ){

	    $handler = $this->get_handler( $config[ 'handler' ] );

	    if( $absolute ){
	        $url = $config[ 'url' ];
	    }else{
	        $url = $this->get_directory_uri( $config[ 'url' ] );
	    }

	    if( isset( $config[ 'dependencies' ] ) ){
	        $dependencies = $config[ 'dependencies' ];
	    }else{
	        $dependencies = [];
	    }

	    wp_enqueue_style( $this->get_handler( $config[ 'handler' ] ), esc_url( $url ), $dependencies, $this->version );
	}

	public function enqueue_script( $config, $absolute = false ){

	    if( $absolute ){
	        $url = $config[ 'url' ];
	    }else{
	        $url = $this->get_directory_uri( $config[ 'url' ] );
	    }

	    if( isset( $config[ 'dependencies' ] ) ){
	        $dependencies = $config[ 'dependencies' ];
	    }else{
	        $dependencies = array( 'jquery' );
	    }

	    wp_enqueue_script( $this->get_handler( $config[ 'handler' ] ), esc_url( $url ), $dependencies, $this->version );
	}

	public function scripts(){

		wp_enqueue_media();

		$this->enqueue_script(array(
			'handler' => 'select2',
			'url'     => 'select2/js/select2.min.js'
		));

		$this->enqueue_style(array(
			'handler' => 'select2',
			'url'     => 'select2/css/select2.min.css'
		));

		$this->enqueue_script(array(
			'handler' => 'script',
			'url'     => 'script.js',
			'dependencies' => array( 'jquery', 'jquery-ui-sortable', 'jquery-ui-selectable', 'wp-color-picker' )
		));
		
		$this->enqueue_style(array(
			'handler' => 'style.css',
			'url'     => 'style.css',
			'dependencies' => array( 'wp-color-picker' )
		));

		$locale = array(
			'caption'               => esc_html__( 'Caption.', 'wc-booster' ),
			'link'                  => esc_html__( 'Link.', 'wc-booster' ),
			'confirm_delete'        => esc_html__( 'Are you sure to delete?', 'wc-booster' ),
			'no_select_notice'      => esc_html__( 'Please Select atleast an item?', 'wc-booster' ),
			'media_title'           => esc_html__( 'Choose an Image.', 'wc-booster' ),
			'media_btn_text'        => esc_html__( 'Insert', 'wc-booster' ),
			'media_btn_change_text' => esc_html__( 'Change Image', 'wc-booster' ),
			'image_upload_text'     => esc_html__( 'Select Image', 'wc-booster' ),
			'ajax_url'              => admin_url( 'admin-ajax.php' ),
			'_wpnonce'              => wp_create_nonce( 'wc_booster_custom_field_nonce' ),
			'wc_ajax_nonce'         => wp_create_nonce( 'wc_booster_nonce' )
		);

		wp_enqueue_style( 'editor' );

		wp_localize_script( $this->get_handler( 'script' ), 'WBCF', $locale );
	}
}