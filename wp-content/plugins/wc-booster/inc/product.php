<?php 
/**
 * Product page features
 * 
 * @since WooCommerce Booster 1.0
 */
use WC_Booster_Custom_Fields\Post_Type;

if( !class_exists( 'WC_Booster_Product' ) ){
	class WC_Booster_Product{

		public static $instance;

		public $settings;

		public $post_type = 'product';

		public static function get_instance() {
		    if ( ! self::$instance ) {
		        self::$instance = new self();
		    }
		    return self::$instance;
		}

		public function __construct(){

			add_action( 'init', array( $this, 'init' ) );
			add_action( 'wp', array( $this, 'redirect' ) );
			add_filter( 'post_class', array( $this, 'post_class' ) );
			add_action( 'body_class', array( $this, 'body_class' ) );

			add_action( "template_redirect", array( $this, 'redirect_to_shop' ) );
			add_filter( 'woocommerce_quantity_input_type', [ $this, 'quantity_input_type' ] );
		}

		public function quantity_input_type( $type ){
			if( $type == 'hidden' ){
				$type = 'number';
			}

			return $type;
		}

		public function redirect_to_shop(){
		    if( is_cart() ){
		    	if( WC()->cart->cart_contents_count == 0 ){
		        	$permalink = get_permalink( wc_get_page_id( 'shop' ) );
		    	}else{
		    		$permalink = wc_get_checkout_url();
		    	}

		    	wp_safe_redirect( $permalink );
		    }
		}

		public function redirect(){
			if( !is_checkout() && 'on' == $this->settings->get_field( 'enable_add_to_cart_checkout_redirect' ) ){
				add_filter( 'option_woocommerce_cart_redirect_after_add', array( $this, '__return_yes' ), 999, 2 );
			}
		}

		public function body_class( $classes ){
			if( 'on' == $this->settings->get_field( 'enable_custom_qty_button' ) ){
				$classes[] = 'wc-booster-custom-qty-button-layout-' . $this->settings->get_field( 'custom_qty_button_layout' );
			}

			return $classes;
		}

		public function init(){

			$this->settings = WC_Booster_Settings::get_instance();

			if( 'on' == $this->settings->get_field( 'enable_custom_qty_button' ) ){
				add_action( 
				    'woocommerce_before_quantity_input_field', 
				    array( $this, 'before_quantiy_input_field' 
				));
				add_action( 
				    'woocommerce_after_quantity_input_field', 
				    array( $this, 'after_quantiy_input_field' 
				));
			}

			if( 'on' == $this->settings->get_field( 'enable_sticky_add_to_cart' ) ){
				add_action( 'woocommerce_after_single_product', array( $this, 'sticky_add_to_cart' ) );
			}

			if( 'on' == $this->settings->get_field( 'enable_specification' ) ){
				add_action( 'woocommerce_before_add_to_cart_form', array( $this, 'specification' ) );
				add_filter( 'woocommerce_product_tabs', array( $this, 'woocommerce_default_product_tabs' ) );
			}

			if( 'on' == $this->settings->get_field( 'enable_wishlist' ) ){
				add_filter( 'render_block_woocommerce/add-to-cart-form', array( $this, 'add_wishlist_icon_after_block' ), 10, 3 );
			}

			add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'discount_percent' ), 20 );

			$field = new Post_Type( $this->post_type );

			$product_fields = apply_filters( 'wc_booster_product_fields', [
				'popup_tab' => [
					'label' => __( 'Pop Up', 'wc-booster' ), # Tab Label
					'fields' => [
						'wc_booster_shortcode_popups' => [
							'label'   => __( 'Shortcode', 'wc-booster' ),
							'type'    => 'copy',
							'description' => '[wc_booster_popup id=*]'
						],
						'wc_booster_product_popups' => [
							'label'  => __( 'Pop Up', 'wc-booster' ),
							'type'   => 'repeater',
							'fields' => [
								'popup_title' => [
									'label' => __( 'Title', 'wc-booster' ),
									'type'  => 'text'
								],
								'popup_content' => [
									'label' => __( 'Content', 'wc-booster' ),
									'type'  => 'editor'
								]
							]
						]
					]
				],
				'usp_tab' => [
					'label' => __( 'USP', 'wc-booster' ), # Tab Label
					'fields' => [
						'wc_booster_product_usps_layout' => [
							'label' => __( 'Layout', 'wc-booster' ),
							'type'  => 'select',
							'choices' => [
								'default' => __( 'Default', 'wc-booster' )
							],
							'default' => 'default'
						],
						'wc_booster_product_usps' => [
							'label' => __( 'Usps', 'wc-booster' ),
							'type'  => 'repeater',
							'fields' => [
								'label' => [
									'label' => __( 'Unique selling point', 'wc-booster' ),
									'type'  => 'text'
								]
							]
						]
					]
				],
				'general_tab' => [
					'label' => __( 'General', 'wc-booster' ), # Tab Label
					'fields' => [
						'wc_booster_product_banner_img' => [
							'label' => __( 'Choose Banner Image', 'wc-booster' ),
							'type'  => 'image'
						]
					]
				]
			]);
			
			$field->add_fields( __( 'WC Booster Options', 'wc-booster' ), $product_fields );

			add_action( 'slide_out_content', array( $this, 'popup_content' ) );
			add_shortcode( 'wc_booster_popup', array( $this, 'render_shortcode' ) );

			add_filter( 'woocommerce_product_single_add_to_cart_text', array( $this, 'add_to_cart_text' ), 20, 2 );
			add_filter( 'woocommerce_product_add_to_cart_text', array( $this, 'add_to_cart_text' ), 20, 2 );
			
		}

		public function change_cart_url_to_checkout( $url ){
			return wc_get_checkout_url();
		}

		public function post_class( $class ){
			$this->settings = WC_Booster_Settings::get_instance();

			if( 'on' == $this->settings->get_field( 'enable_custom_qty_button' ) ){
				$class[] = 'wc-booster-custom-qty-button';
			}

			return $class;
		}

		public function before_quantiy_input_field(){
		    ?>
		    <button type="button" class="minus down">
		        <i class="fa fa-minus down"></i>
		    </button>
		    <?php
		}       

		public function after_quantiy_input_field(){
		    ?>
		    <button type="button" class="plus up">
		        <i class="fa fa-plus up"></i>
		    </button>
		    <?php
		}

		public function get_popups(){

			$product_id = get_the_ID();
			$popups = get_post_meta( $product_id, 'wc_booster_product_popups', true );

			if( is_array( $popups ) && count( $popups ) > 0 ){
				return $popups;
			}

			return false;
		}

		public function popup_content( $slide ){
			$popups = $this->get_popups();
			if( is_product() && $popups ){
				foreach( $popups as $key => $popup ){
					$popup_id = 'wc-booster-popup-' . $key;
					if( $slide->id == $popup_id ){
						echo wp_kses_post( $popup[ 'popup_content' ][ 'value' ] );
					}
				}
			}
		}

		public function render_shortcode( $atts ){
			ob_start(); 
			if( isset( $atts[ 'id' ] ) ){

				$popups = $this->get_popups();
				if( $popups ){

					$id    = $atts[ 'id' ] - 1;
					if( !isset( $popups[ $id ] ) ){
						return ob_get_clean();
					}

					$popup = $popups[ $id ];
					$popup_id = 'wc-booster-popup-' . $id;

					new WC_Booster_Slide_Out([
					    'id'   => $popup_id,
					    'path' => WC_Booster_Url . '/class/slide',
					    'mode' => 'popup', // slide || popup,
					    'hook' => 'wp_footer'
					]);
			?>
			    <a href="#" class="slide-out-toggler" data-id="<?php echo esc_attr( $popup_id ); ?>">
			    	<?php echo esc_html( $popup[ 'popup_title' ][ 'value' ] ); ?>
		    	</a>
			<?php
				}
			}
			return ob_get_clean();
		}

		public function sticky_add_to_cart(){

			global $product;

			if( !$product ){
				return;
			}

			if ( ! $product->is_purchasable() || !$product->is_in_stock() ) { 
				return; 
			}
			?>
			<div class="wc-booster-sticky-add-to-cart-wrapper" data-initial_price="<?php echo esc_attr( '<span class="price">' . $product->get_price_html() . '</span>' ); ?>">
				<div>
					<span class="title"><?php the_title(); ?></span>
					<span class="post-thumbnail"><?php the_post_thumbnail(); ?></span>
					<span class="price"><?php echo wp_kses_post( $product->get_price_html() ); ?></span>
					<?php
						woocommerce_quantity_input(
							array(
								'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
								'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
								'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( sanitize_key( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(), # WPCS: CSRF ok, input var ok.
							)
						);
					?>
					<div class="wc-booster-sticky-btn">
						<button class="add-to-cart">
							<?php echo esc_html( $product->single_add_to_cart_text() ); ?>
						</button>
					</div>
				</div>
			</div>
			<?php
		}

		public function specification(){
			
		    global $product;
			# remove it from additional information tab and keep it after short description
			remove_action( 'woocommerce_product_additional_information', 'wc_display_product_attributes', 10 );
		    wc_display_product_attributes( $product );
		}

		public function woocommerce_default_product_tabs( $tabs ){
			unset( $tabs[ 'additional_information' ] );
			return $tabs;
		}

		public function remove_add_to_cart_button(){
			
			global $product;

			if( !$product->is_purchasable() || !$product->is_in_stock() ){
				remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart' );
			}else{
				add_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart' );
			}
		}

		public function discount_percent(){

			global $product;

			if( !$product ){
				return;
			}

			if( $product->is_on_sale() ){
				echo wp_kses_post( sprintf( '<span class="discount-percent">-%s</span>', $this->get_discount_percent() ) );
			}
		}

		public function get_discount_percent() {

			global $product;

			if( !$product ){
				return;
			}

			if( $product->is_type( 'variable' ) ){
				$percentages = array();

				# Get all variation prices
				$prices = $product->get_variation_prices();

				# Loop through variation prices
				foreach( $prices[ 'price' ] as $key => $price ){
					# Only on sale variations
					if( $prices[ 'regular_price' ][ $key ] !== $price ){
						# Calculate and set in the array the percentage for each variation on sale
						$percentages[] = round( 100 - ( floatval( $prices[ 'sale_price' ][ $key ] ) / floatval( $prices[ 'regular_price' ][ $key ] ) * 100 ) );
					}
				}
				# We keep the highest value
				$percentage = max( $percentages ) . '%';

			}elseif( $product->is_type( 'grouped' ) ){

				$percentages = array();

				# Get all variation prices
				$children_ids = $product->get_children();

				if( is_array( $children_ids ) ){
					# Loop through variation prices
					foreach( $children_ids as $child_id ){
						$child_product = wc_get_product( $child_id );
						if( $child_product ){
							$regular_price = (float) $child_product->get_regular_price();
							$sale_price    = (float) $child_product->get_sale_price();

							if ( $sale_price != 0 || ! empty( $sale_price ) ) {
								# Calculate and set in the array the percentage for each child on sale
								$percentages[] = round( 100 - ( $sale_price / $regular_price * 100 ) );
							}
						}
					}
				}
				
				# We keep the highest value
				$percentage = max( $percentages ) . '%';

			}else{

				$regular_price = (float) $product->get_regular_price();
				$sale_price    = (float) $product->get_sale_price();

				if ( $sale_price != 0 || ! empty( $sale_price ) ) {
					$percentage = round(100 - ( $sale_price / $regular_price * 100 ) ) . '%';
				}
			}

			return $percentage;
		}

		public function __return_yes( $value, $option ){
			return 'yes';
		}

		public function __return_no( $value, $option ){
			return 'no';
		}

		public function add_to_cart_text( $text, $instance ){
			$settings = WC_Booster_Settings::get_instance();

			return $settings->get_field( 'add_to_cart_text' );
		}

		public function add_wishlist_icon_after_block( $block_content, $parsed_block, $block ){

			global $post;
			
			$post_id = isset( $block->context[ 'postId' ] ) ? $block->context[ 'postId' ] : false;
			$post_id = $post_id ?? isset( $post->ID ) ? $post->ID : false;
			$product = wc_get_product( $post_id );

			if ( ! $product ) {
				return $block_content;
			}

			$wishlist = sprintf( '<div class="wc-booster-wrapper">
					<button data-item_id="%s" class="wc-booster-wishlist-button">
						<div class="wc-booster-wishlist-icon">
							<i class="fas fa-heart" aria-hidden="true"></i>
						</div>
					</button>
				</div>',
				esc_attr( $product->get_id() )
			);

			return "$block_content $wishlist ";
		}

	}

	WC_Booster_Product::get_instance();
}