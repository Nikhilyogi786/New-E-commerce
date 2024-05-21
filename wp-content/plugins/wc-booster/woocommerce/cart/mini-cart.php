<?php
/**
 * Mini cart template
 */
$icons     = WC_Booster_Icons::get_instance();
$mini_cart = WC_Booster_Mini_Cart::get_instance();
$settings  = WC_Booster_Settings::get_instance();

$wrapper_class = '';
if( 'on' == $settings->get_field( 'mini_cart_show_update_button' ) ){
	$wrapper_class = ' wc-booster-show-update-button';
}
?>
<div class="wc-booster-mini-cart woocommerce<?php echo esc_attr( $wrapper_class ); ?>">
	<div class="wc-booster-mini-cart-header">
		<h2><?php echo esc_html( $settings->get_field( 'mini_cart_title' ) ); ?></h2>
	</div>
	
	<form class="wc-booster-mini-cart-form" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
		<div class="wc-booster-mini-cart-product-wrapper" data-wc-booster-addon-cart-count="<?php echo esc_attr( WC()->cart->cart_contents_count ); ?>">
			<?php if( ! WC()->cart->is_empty() ) : ?>
			<?php 
				foreach( WC()->cart->get_cart() as $cart_item_key => $cart_item ){
					$_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
					$is_visible = apply_filters( 'woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key );
					
					if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && $is_visible ){

						$product_info = $mini_cart->get_product_info(array(
							'product'       => $_product,
							'cart_item'     => $cart_item,
							'cart_item_key' => $cart_item_key
						));
			?>
						<div class="wc-booster-mini-cart-product-single">
							<div>
								<div>
									<span class="wc-booster-mini-cart-product-name">
										<a href="<?php echo esc_url( $product_info[ 'permalink' ] ); ?>">
											<?php echo esc_html( $product_info[ 'name' ] ); ?>
										</a>								
									</span>
									<span class="wc-booster-mini-cart-product-price">
										<?php echo wp_kses_post( $product_info[ 'price' ] ); ?>
									</span>	
								</div>
								<div class="product-quantity">
									<?php
										if( $_product->is_sold_individually() ) {
											$product_quantity = sprintf( '<span class="wc-booster-wocoommerce-sale-indi">1</span> <input type="hidden" name="cart[%s][qty]" value="1" />', $cart_item_key );
										} else {
											$product_quantity = woocommerce_quantity_input(
												array(
													'input_name'   => "cart[{$cart_item_key}][qty]",
													'input_value'  => $cart_item['quantity'],
													'max_value'    => $_product->get_max_purchase_quantity(),
													'min_value'    => '0',
													'product_name' => $_product->get_name(),
												),
												$_product,
												false
											);
										}

										$product_quantity_safe = apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item );

										echo $product_quantity_safe;
									?>
								</div>
							</div>

							<div>
								<a href="<?php echo esc_url( $product_info[ 'permalink' ] ); ?>">						
									<?php echo wp_kses_post( $product_info[ 'thumbnail' ] ); ?>	
								</a>	
								<a 
									href="<?php echo esc_url( $product_info[ 'remove_link' ] ); ?>" 
									class="wc-booster-remove-mini-cart-item"
									aria-label="<?php esc_attr_e( 'Remove this item', 'wc-booster' ) ?>"
								>
									<?php 
										/**
										 * Prints hardcoded html
										 * 
										 * @see class/icons.php 
										 */
										$close_icon_safe = $icons->get_close_icon(); 
										echo $close_icon_safe;
									?>
								</a>							
							</div>
						</div>
						<?php
					}
				} 
			?>

			<?php else : ?>
				<p class="woocommerce-mini-cart__empty-message">
					<?php esc_html_e( 'No products in the cart.', 'wc-booster' ); ?>
					<a href="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>">
						<?php esc_html_e( 'Shop Now', 'wc-booster' ); ?>
					</a>
				</p>
			<?php endif; ?>
		</div>

		<!-- Provide the submit button value because wc-form-handler expects it. -->
		<input type="hidden" name="update_cart" value="Update Cart">

		<div class="wc-booster-mini-cart-btn">
			<?php if( !WC()->cart->is_empty() ): ?>
				<div class="wc-booster-mini-cart-total">
					<h3>
						<?php esc_html_e( 'Sub Total:' ,'wc-booster' ); ?> 
						<span><?php echo esc_html( wc_cart_totals_subtotal_html() ); ?></span>
					</h3>
				</div>

				<a href="<?php echo esc_url( wc_get_checkout_url() ); ?>" class="wc-booster-goto-checkout">
					<?php echo wp_kses_post( $icons->get_cart_icon() ); esc_html_e( 'Checkout', 'wc-booster' ); ?>
				</a>
			<?php endif; ?>
		</div>
		<?php if( !is_cart() ){ wp_nonce_field( 'woocommerce-cart', 'woocommerce-cart-nonce' ); } ?>
		
	</form>
</div>