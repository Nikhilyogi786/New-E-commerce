<?php
if( !class_exists( 'WC_Booster_Quick_View' ) ){

    class WC_Booster_Quick_View{

        public static $instance;

        public $popup_id = 'wc-booster-quick-view';

        public $settings;

        public static function get_instance() {
            if ( ! self::$instance ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

    	public function __construct(){
			add_action( 'after_setup_theme', array( $this, 'add_support' ) );
			add_action( 'init', array( $this, 'init' ) );
			add_filter( 'body_class', array( $this, 'body_class' ) );
		}

		public function init(){

			$this->settings = WC_Booster_Settings::get_instance();

			new WC_Booster_Slide_Out([
			    'id'   => $this->popup_id,
			    'path' => WC_Booster_Url . '/class/slide',
			    'mode' => 'popup'
			]);

			add_action( 'wp_ajax_wc_booster_ajax_quick_view', array( $this, 'load_quick_view' ) );
			add_action( 'wp_ajax_nopriv_wc_booster_ajax_quick_view', array( $this, 'load_quick_view' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ) );

			if( ! wc_current_theme_is_fse_theme() ){

				add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'render' ), 15 );

				remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );
				add_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 20 );
			}

			add_action( 'woocommerce_after_add_to_cart_button', array( $this, 'after_add_to_cart_button' ) );
			add_filter( 'slide_out_close_text', array( $this, 'close_icon' ) );
		}

		public function scripts(){

		    wp_enqueue_script( 'imagesloaded' );
		    wp_enqueue_script( 'wc-add-to-cart-variation' );
		    wp_enqueue_script( 'flexslider' );

		    if( version_compare( WC()->version, '3.0.0', '>=' ) ){
		        wp_enqueue_script( 'zoom' );
		        wp_enqueue_script( 'wc-single-product' );
		    }
		}

		public function render(){
			global $product;
			
			if( !$product )
				return;

			echo sprintf( '<span class="wc-booster-quick-view" data-id="%s">%s <i class="fa fa-eye"></i></span>',
				esc_attr( $product->get_id() ),
				esc_html( $this->settings->get_field( 'quick_view_label' ) )
			);
		}

		public function after_add_to_cart_button(){
			global $product;

			if( $product->is_type( 'simple' ) ){
				?>
				<input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>">
				<?php
			}
		}

		public function load_quick_view(){

			if ( check_ajax_referer( 'wc_booster_ajax_nonce', 'security' ) && isset( $_POST[ 'post_id' ] ) ) {

				$post_id = absint( $_POST[ 'post_id' ] );

				if ( ! $post_id ) {
					// Invalid post ID
					wp_send_json_error(
						array(
							'error' => esc_html__( 'Invalid post ID', 'wc-booster' )
						)
					);
				}

				ob_start();

				$post_type = [ "product", "product_variation" ];
				$args = array(
					'post_type' => $post_type,
					'p'         => $post_id,
				);

				$the_query = new WP_Query( $args );

				if ( $the_query->have_posts() ) {
					remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
					remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
					remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
					remove_action( 'woocommerce_after_single_product', array( WC_Booster_Product::get_instance(), 'sticky_add_to_cart' ) );
					while ( $the_query->have_posts() ) {
						$the_query->the_post();

						global $post;

						echo '<div id="' . esc_attr( $post_type ) . '-' . get_the_ID(). '" class="woocommerce ' . esc_attr( implode( " ", get_post_class( $post_type ) ) ) . '">';
							 wc_get_template_part( 'content', 'single-product' );
						echo '</div>';	
					}
				}

				$html = ob_get_clean();

				if ( ! $html ) {
					// No HTML
					wp_send_json_error(
						array(
							'error' => esc_html__( 'Invalid HTML data', 'wc-booster' )
						)
					);
				} else {
					// Success
					wp_send_json_success(
						array(
							'html' => $html
						)
					);
				}
			} else {
				// Invalid data
				wp_send_json_error(
					array(
						'error' => esc_html__( 'Invalid data', 'wc-booster' )
					)
				);
			}
		}

		public function add_support(){

			$supports = array( 
				'woocommerce', 
				'wc-product-gallery-zoom',
				'wc-product-gallery-lightbox', 
				'wc-product-gallery-slider' 
			);

			foreach( $supports as $support ){
				add_theme_support( $support );
			}
		}

		public function body_class( $classes ){

			if( 'on' == $this->settings->get_field( 'enable_quick_view' ) ){
				$classes[] = 'wc-booster-quick-view-enabled';
			}

			return $classes;
		}

		public function close_icon( $icon ){
			$icons = WC_Booster_Icons::get_instance();
			return $icons->get_close_icon();
		}
	}

	WC_Booster_Quick_View::get_instance();
}