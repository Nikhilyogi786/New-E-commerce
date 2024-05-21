<input class="color-picker field" data-type="<?php echo esc_attr( $type ); ?>" data-id="<?php echo esc_attr( $id ); ?>" name="<?php echo esc_attr( $name ); ?>" type="text" value="<?php echo esc_attr( $value ); ?>" data-default-color="<?php echo esc_attr( $default ); ?>">
<?php if( !empty( $description ) ): ?>
	<p class="desc"><?php echo esc_html( $description ); ?></p>
<?php endif; ?>