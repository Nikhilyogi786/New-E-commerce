<?php
/**
* Generates Select Field
* @since Create Custom Fields 1.0
*/
?>
<div class="wc-booster-custom-fields-select">
	<p>
		<select data-placeholder="<?php echo esc_attr( $placeholder ); ?>" data-type="<?php echo esc_attr( $type ); ?>" data-id="<?php echo esc_attr( $id ); ?>" class="wc-booster-custom-fields-dropdown-navigation field" name="<?php echo esc_attr( $name ); if( $multiple ){ echo '[]'; } ?>" class="widefat" <?php if( $multiple ){ echo 'multiple'; } ?>>
			<?php if( $value && is_array( $value ) ): ?>
				<?php foreach( $value as $v ): ?>
					<option value="<?php echo esc_attr( $v ); ?>" selected>
						<?php 
							$p = get_term( $v, 'nav_menu' );
							if( $p ){
								echo esc_html( $p->name );
							}
						?>
					</option>
				<?php endforeach; ?>
			<?php elseif( $value ): ?>
				<option value="<?php echo esc_attr( $value ); ?>" selected>
					<?php 
						$p = get_term( $value, 'nav_menu' );
						if( $p ){
							echo esc_html( $p->name );
						}else{
							esc_html_e( 'Select', 'wc-booster' );
						}
					?>
				</option>
			<?php endif; ?>
		</select>			
	</p>

	<?php if( !empty( $description ) ): ?>
		<p class="desc"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>
</div>