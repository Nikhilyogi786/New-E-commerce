<?php 
	$upload_btn_text = esc_html__( 'Change Image', 'wc-booster' );

	if( empty( $value ) ){
		$upload_btn_text = esc_html__( 'Select Image', 'wc-booster' );
	}
?>
<div class="wc-booster-custom-fields-image-wrapper">
	<div class="wc-booster-custom-fields-image">
		<input type="hidden" data-type="<?php echo esc_attr( $type ); ?>" data-id="<?php echo esc_attr( $id ); ?>" class="wc-booster-custom-fields-image-input field"
			name="<?php echo esc_attr( $name ); ?>" 
			value="<?php echo esc_attr( $value ); ?>" 
		>
		<div class="wc-booster-custom-fields-image-holder">
			<?php 
				echo wp_kses( wp_get_attachment_image( $value, 'thumbnail' ), [
	                'img' => [
	                    'src'  => [],
	                ]
            	]); 
            ?>
		</div>
	</div>
	<div class="wc-booster-custom-fields-btn-group">
		<button type="button" class="button wc-booster-custom-fields-image-browse">
			<span class="wp-media-buttons-icon"></span>
			<span class="wc-booster-custom-fields-image-btn-text"><?php echo esc_html( $upload_btn_text ); ?></span>
		</button>

		<button id="<?php echo esc_attr( $d[ 'delete' ] ); ?>" class="wc-booster-custom-fields-image-delete button <?php echo empty( $value ) ? esc_attr( 'hidden' ) : ''; ?>">
			<?php echo esc_html__( 'Delete Image', 'wc-booster' ); ?>
		</button>
	</div>
</div>