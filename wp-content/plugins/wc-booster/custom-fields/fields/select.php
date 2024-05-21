<div class="custom-field-select-wrapper">
	<select name="<?php echo esc_attr( $name ); if( $multiple ){ echo '[]'; } ?>" data-type="<?php echo esc_attr( $type ); ?>" data-id="<?php echo esc_attr( $id ); ?>" class="wc-booster-custom-fields-select field" <?php if( $multiple ){ echo 'multiple'; } ?>>
		<?php foreach( $choices as $k => $v ): ?>
			<option value="<?php echo esc_attr( $k ); ?>" <?php selected( $k, $value, true ); ?>><?php echo esc_html( $v ); ?></option>
		<?php endforeach; ?>
	</select>

	<?php if( !empty( $description ) ): ?>
		<p class="desc"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>
</div>