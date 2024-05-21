<?php
/**
 * Cart Page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 7.4.0
 */

defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_cart' ); 
?>
<form class="woocommerce-cart-form" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
	<?php do_action( 'woocommerce_before_cart_table' ); ?>

	<table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
		<thead>
			<tr>
				<th class="product-name"><?php esc_html_e( 'Product', 'wc-booster' ); ?></th>
				<th class="product-quantity"><?php esc_html_e( 'Quantity', 'wc-booster' ); ?></th>
				<th class="product-price"><?php esc_html_e( 'Price', 'wc-booster' ); ?></th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<?php do_action( 'woocommerce_before_cart_contents' ); ?>

			<?php
				foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
					$_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
					$product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

					if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
						$product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
						?>
						<tr class="woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?>">

							<td class="product-name" data-title="<?php esc_attr_e( 'Product', 'wc-booster' ); ?>">
								<?php
									if ( ! $product_permalink ) {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;' );
									} else {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $cart_item, $cart_item_key ) );
									}

									do_action( 'woocommerce_after_cart_item_name', $cart_item, $cart_item_key );

									// Meta data.
									echo wc_get_formatted_cart_item_data( $cart_item ); // PHPCS: XSS ok.

									// Backorder notification.
									if ( $_product->backorders_require_notification() && $_product->is_on_backorder( $cart_item['quantity'] ) ) {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_backorder_notification', '<p class="backorder_notification">' . esc_html__( 'Available on backorder', 'wc-booster' ) . '</p>', $product_id ) );
									}
								?>
							</td>

							<td class="product-quantity" data-title="<?php esc_attr_e( 'Quantity', 'wc-booster' ); ?>">
								<?php
									if ( $_product->is_sold_individually() ) {
										$min_quantity = 1;
										$max_quantity = 1;
									} else {
										$min_quantity = 0;
										$max_quantity = $_product->get_max_purchase_quantity();
									}

									$product_quantity = woocommerce_quantity_input(
										array(
											'input_name'   => "cart[{$cart_item_key}][qty]",
											'input_value'  => $cart_item['quantity'],
											'max_value'    => $max_quantity,
											'min_value'    => $min_quantity,
											'product_name' => $_product->get_name(),
										),
										$_product,
										false
									);

									echo apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item ); // PHPCS: XSS ok.
								?>
							</td>

							<td class="product-subtotal" data-title="<?php esc_attr_e( 'Subtotal', 'wc-booster' ); ?>">
								<?php
									echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ); // PHPCS: XSS ok.
								?>
							</td>
							<td>
								<?php
									echo apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
										'woocommerce_cart_item_remove_link',
										sprintf(
											'<a href="%s" class="wc-booster-remove-product" aria-label="%s" data-product_id="%s" data-product_sku="%s"><i class="fa fa-times"></i></a>',
											esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
											esc_html__( 'Remove this item', 'wc-booster' ),
											esc_attr( $product_id ),
											esc_attr( $_product->get_sku() )
										),
										$cart_item_key
									);
								?>
							</td>
						</tr>
						<?php
					}
				}
			?>

			<?php do_action( 'woocommerce_cart_contents' ); ?>

			<tr>
				<td colspan="5" class="actions">
					<?php do_action( 'woocommerce_cart_actions' ); ?>
					<input 
						type="hidden" 
						name="update_cart" 
						value="<?php esc_attr_e( 'Update cart', 'wc-booster' ); ?>"
					>
					<button type="button" class="wc-booster-update-cart">
						<?php esc_attr_e( 'Update cart', 'wc-booster' ); ?>
					</button>
					<?php wp_nonce_field( 'woocommerce-cart', 'woocommerce-cart-nonce' ); ?>
				</td>
			</tr>
			<?php do_action( 'woocommerce_after_cart_contents' ); ?>
		</tbody>
	</table>

	<?php if( is_checkout() ): ?>
		<div class="woocommerce-checkout-review-order">
			<?php foreach ( WC()->cart->get_coupons() as $code => $coupon ) : ?>
				<div class="cart-discount coupon-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
					<div><?php wc_cart_totals_coupon_label( $coupon ); ?></div>
					<div data-title="<?php echo esc_attr( wc_cart_totals_coupon_label( $coupon, false ) ); ?>"><?php wc_cart_totals_coupon_html( $coupon ); ?></div>
				</div>
			<?php endforeach; ?>
		</div>

		<div class="checkout-total-wrapper">
			<div>
				<?php esc_html_e( 'Total', 'wc-booster' ); ?>
			</div>
			<div>
				<?php wc_cart_totals_order_total_html(); ?>
			</div>
		</div>
	<?php endif; ?>
	<?php do_action( 'woocommerce_after_cart_table' ); ?>
</form>

<?php woocommerce_checkout_coupon_form(); ?>

<?php do_action( 'woocommerce_after_cart' ); ?>
