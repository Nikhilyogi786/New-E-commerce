<?php 
namespace WC_Booster_Custom_Fields;

class Taxonomy{

	public $taxonomy = null;
	public $fields   = null;
	public $helper   = null;
	public $field_module = null;

	public function __construct( $tax = false ){

		if( !$tax ){
			return;
		}
		
		$this->field_module = Main::get_instance( 'field' );
		$this->helper       = Main::get_instance( 'helper' );
		$this->taxonomy     = $tax;

		add_action( 'created_' . $this->taxonomy, array ( $this, 'save' ), 10, 2 );
		add_action( 'edited_' . $this->taxonomy,  array ( $this, 'save' ), 10, 2 );
	}

	public function add_fields( $fields ){

		$this->fields = $fields;
		add_action( $this->taxonomy.'_add_form_fields', array( $this, 'render_meta' ), 10, 2 );
		add_action( $this->taxonomy.'_edit_form', array( $this, 'render_meta' ), 10, 2 );
	}

	public function render_meta( $param_1, $param_2 = null ){
		if( is_array( $this->fields ) ){

			wp_nonce_field( 'wc_booster_custom_fields_meta_nonce', 'name_meta_nonce' );
			
			foreach ( $this->fields as $key => $field ) {

				if( null == $param_2 ){
					# Creating New Term
					$value = '';
				}else{
					# Editing the Term
					$value = get_term_meta( $param_1->term_id, $key, true );
				}

				$field[ 'value' ] = $value;
				// $field[ 'value' ] = $this->helper->get_value( $value, $field );
				
				if( is_array( $field ) && isset( $field[ 'type' ] ) ){

					$label       = isset( $field[ 'label' ] ) ? $field[ 'label' ] : '';
					$description = isset( $field[ 'description'] ) ? $field[ 'description' ] : '';
					$placeholder = isset( $field[ 'placeholder'] ) ? $field[ 'placeholder'] : '';
					
					$this->field_module->render(array(
						'type'        => $field[ 'type' ],
						'id'          => $key,
						'name'        => $key,
						'value'       => $value,
						'label'       => $label,
						'description' => $description,
						'choices'     => isset( $field[ 'choices' ] ) ? $field[ 'choices' ] : []
					));
				}
			}
		}	
	}

	public function save( $term_id, $tt_id ){

		# Don't update on Quick Edit
		if (defined('DOING_AJAX') ) {
			return $term_id;
		}
		
		if ( empty( $_POST ) || !isset(  $_POST[ 'name_meta_nonce' ] ) || !wp_verify_nonce( $_POST[ 'name_meta_nonce' ], 'wc_booster_custom_fields_meta_nonce' ) ) {
		    return;
		}

		$helper = Main::get_instance( 'helper' );

		foreach( $this->fields as $key => $field ){

			$value = $helper->sanitize( array( 
				'type'  => $field[ 'type' ],
				'value' => isset( $_POST[ $key ] ) ? sanitize_text_field( $_POST[ $key ] ) : ''
			));

			update_term_meta( $term_id, $key, $value );
		}
	}

}