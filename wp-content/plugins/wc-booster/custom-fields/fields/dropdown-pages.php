<?php
/**
* Generates Select Field
* @since Create Custom Fields 1.0
*/
?>
<div class="wc-booster-custom-fields-select">
	<p>
		<select data-placeholder="<?php echo esc_attr( $placeholder ); ?>" data-type="<?php echo esc_attr( $type ); ?>" data-id="<?php echo esc_attr( $id ); ?>" class="wc-booster-custom-fields-dropdown-pages field" name="<?php echo esc_attr( $name ); if( $multiple ){ echo '[]'; } ?>" class="widefat" <?php if( $multiple ){ echo 'multiple'; } ?>>
			<?php if( $value && is_array( $value ) ): ?>
				<?php foreach( $value as $v ): ?>
					<option value="<?php echo esc_attr( $v ); ?>" selected>
						<?php 
							$p = get_post( $v );
							echo esc_html( $p->post_title );
						?>
					</option>
				<?php endforeach; ?>
			<?php elseif( $value ): ?>
				<option value="<?php echo esc_attr( $value ); ?>" selected>
					<?php 
						$p = get_post( $value );
						echo esc_html( $p->post_title );
					?>
				</option>
			<?php endif; ?>
		</select>			
	</p>
	<?php if( !empty( $description ) ): ?>
		<p class="desc"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>
</div>