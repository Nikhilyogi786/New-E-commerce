<input type="checkbox" class="field" data-type="<?php echo esc_attr( $type ); ?>" data-id="<?php echo esc_attr( $id ); ?>" name="<?php echo esc_attr( $name ); ?>" <?php checked( 'on', $value, true ); ?> />

<?php if( !empty( $description ) ): ?>
	<p class="desc"><?php echo esc_html( $description ); ?></p>
<?php endif; ?>