<textarea <?php if( isset( $mode ) && 'repeater' == $mode ){ 
		echo 'data-repeater-type="editor"'; 
		$type = 'editor';
	} 
?> 
class="regular-text field" data-type="<?php echo esc_attr( $type ); ?>" data-id="<?php echo esc_attr( $id ); ?>" rows="6" name="<?php echo esc_attr( $name ); ?>"><?php echo wp_kses_post( $value ); ?></textarea>
<?php if( !empty( $description ) ): ?>
	<p class="desc"><?php echo esc_html( $description ); ?></p>
<?php endif; ?>