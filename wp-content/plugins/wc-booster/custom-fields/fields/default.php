<input class="regular-text field" data-type="<?php echo esc_attr( $type ); ?>" data-id="<?php echo esc_attr( $id ); ?>" type="<?php echo esc_attr( $type ); ?>" name="<?php echo esc_attr( $name ); ?>" value="<?php echo esc_attr( $value ); ?>">
<?php if( !empty( $description ) ): ?>
	<p class="desc"><?php echo esc_html( $description ); ?></p>
<?php endif; ?>