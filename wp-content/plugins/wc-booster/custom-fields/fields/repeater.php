<input type="hidden" class="repeater-hidden-field" name="<?php echo esc_attr( $name ); ?>" value="<?php echo esc_attr( json_encode( $value ) ); ?>">

<div class="sample hidden">
	<div class="repeater-single">
		<span class="counter"></span>
		<?php 
			foreach( $fields as $id => $field ){

				$field[ 'id' ]    = $id;
				$field[ 'name' ]  = '';
				$field[ 'value' ] = '';
				$field[ 'mode' ]  = 'repeater';

				if( 'editor' == $field[ 'type' ] ){
					$field[ 'type' ] = 'textarea';
				}

				$this->render( $field );
			}
		?>
		<button class="custom-field-repeater-delete button button-secondary">
			<?php esc_html_e( 'Delete', 'wc-booster' ); ?>
		</button>
	</div>
</div>

<div class="custom-field-repeater-wrapper">
	<?php
		if( is_array( $value )){
			$i = 0; $counter = 0;
			foreach( $value as $repeaters ){
				?>
				<div class="repeater-single">
					<span class="counter"><?php echo esc_html( ++$counter ); ?></span>
					<?php 
						foreach( $repeaters as $id => $field ){

							$field[ 'id' ]    = $id . '-' . $i;
							$field[ 'name' ]  = '';
							
							$field[ 'label' ] = $fields[ $id ][ 'label' ];
							if( 'select' == $field[ 'type' ] ){
								$field[ 'choices' ] = $fields[ $id ][ 'choices' ];
							}

							$this->render( $field );
							$i++; 
						}
					?>
					<button class="custom-field-repeater-delete button button-secondary">
						<?php esc_html_e( 'Delete', 'wc-booster' ); ?>
					</button>
				</div>
				<?php
			}
		}
	?>
</div>
<div class="custom-field-repeater-add-button-wrapper">
	<button class="custom-field-repeater-add button button-primary">
		<?php esc_html_e( 'Add', 'wc-booster' ); ?>
	</button>
</div>