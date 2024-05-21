<input type="hidden" id="<?php echo esc_attr( $id ); ?>" name="<?php echo esc_attr( $name ); ?>" value="<?php echo esc_attr( $value ); ?>">
<button 
	type="button" 
	class="wc-booster-icon-selector-btn" 
	data-value="<?php echo esc_attr( $value ); ?>" 
	data-id="<?php echo esc_attr( $id ); ?>"
>
	<?php echo esc_html__( 'Browse Icon' , 'wc-booster' ); ?>
</button>
<span class="selected-icon <?php echo esc_attr( $id ); ?>">
	<i class="<?php echo esc_attr( $value ); ?>"></i>
</span>

<?php if( !empty( $description ) ): ?>
	<p class="desc"><?php echo esc_html( $description ); ?></p>
<?php endif; ?>