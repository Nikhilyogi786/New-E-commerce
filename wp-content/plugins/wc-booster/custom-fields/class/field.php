<?php 
namespace WC_Booster_Custom_Fields;

class Field{

	public function render( $config ){

		extract( $config );

		$label       = isset( $label ) ? $label : '';
		$description = isset( $description  ) ? $description : '';
		$placeholder = isset( $placeholder ) ? $placeholder : '';
		$choices     = isset( $choices ) ? $choices : [];
		$multiple    = isset( $multiple ) ? $multiple : false;
		$default     = isset( $default ) ? $default : '';
		$settings    = isset( $settings ) ? $settings : false;
		$tooltip     = isset( $tooltip ) ? $tooltip : false;
		$show_pro_label = apply_filters( 'wc_booster_show_pro_label', isset( $is_pro ) ? $is_pro : false );

		if( 'icon-selector' == $type ){
			require_once WBCF_PATH . 'templates/icon-selector-modal.php';
		}
		
		echo sprintf( '<div class="custom-field %s %s">', esc_attr( $type ), $show_pro_label ? 'pro-option' : '' );
		
		if( isset( $label ) && !empty( $label ) ){
			echo sprintf( '<label for="%s">%s</label>', esc_attr( $id ), esc_html( $label ) );
		}

		$file = WBCF_PATH . '/fields/' . $type . '.php';
		$file = apply_filters( 'wc_booster_custom_fields_file', $file );
		if( file_exists( $file ) ){
			require $file;
		}else{
			require WBCF_PATH . '/fields/default.php';		
		}
		
		if( !$show_pro_label && $tooltip ){
			echo '<div class="wc-booster-tooltip"><span class="dashicons dashicons-info"></span><p>' . esc_html( $tooltip ) . '</p></div>';
		}

		if( $show_pro_label ){
			echo '<span class="pro-tag">Pro</span>';
		}
		echo '</div>';
	}
}