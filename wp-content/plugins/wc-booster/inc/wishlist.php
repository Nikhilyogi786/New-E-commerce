<?php
/**
 * Wishlist
 * 
 * @since WooCommerce Booster 1.3
 */
if( !class_exists( 'WC_Booster_Wishlist' ) ){

    class WC_Booster_Wishlist{

        public static $instance;
        public $settings;

        public static function get_instance(){

            if( !self::$instance ){
                self::$instance = new self();
            }

            return self::$instance;
        }

    	public function __construct(){
    		// Saves wishlist on login
			add_action( 'wp_login', array( $this, 'save_wish_list_on_login' ), 10, 2 );
            add_filter( 'page_template', array( $this, 'assign_template_to_page_id' ) );

			// Hook into the WooCommerce order completion process
			add_action( 'woocommerce_order_status_completed', array( $this, 'remove_wishlist_item_on_order_completion' ) );

			add_action( 'wp_ajax_wc_booster_ajax_wish_list', array( $this, 'add_to_wish_list' ) );
			add_action( 'wp_ajax_nopriv_wc_booster_ajax_wish_list', array( $this, 'add_to_wish_list' ) );

			add_action( 'wp_ajax_wc_booster_ajax_wish_list_remove', array( $this, 'remove_from_wish_list' ) );
			add_action( 'wp_ajax_nopriv_wc_booster_ajax_wish_list_remove', array( $this, 'remove_from_wish_list' ) );	
        }

        public function assign_template_to_page_id( $template ) {
		    $this->settings = WC_Booster_Settings::get_instance();
		    $page_id =$this->settings->get_field( 'wishlist_page_id' );

		      if ( ! empty( $page_id )  && is_page( $page_id ) ) {
		        $custom_template = WC_Booster_Path . 'woocommerce/wishlist/wishlist.php';

		        // Check if the custom template file exists
		        if ( file_exists( $custom_template ) ) {
		            return $custom_template;
		        }
		    }

		    return $template;
		}

		public function add_to_wish_list() {
		    $response = '';
		    $wishlist = [];
		    $post_id = isset( $_POST[ 'post_id' ] ) ? absint( $_POST['post_id'] ) : 0;

		    if ( $post_id ) {
		        $wishlist = $this->get_wishlist();

		        $existing_key = $this->find_product_index_in_wishlist( $post_id, $wishlist );

		        if ( $existing_key !== false ) {
		            unset( $wishlist[ $existing_key ] );
		            $response = 'removed';
		        } else {
		            $wishlist[] = [ 'date' => date("Y/m/d h:i:s"), 'product_id' => $post_id ];
		            $response = 'added';
		        }

		        $this->update_wishlist( $wishlist );

		        wp_send_json_success( [ 'wishlist' => $wishlist, 'response' => $response ]);
		    }

		    wp_send_json_error( [ 'error' => esc_html__( 'Invalid data', 'wc-booster' ) ]);
		}

		public function remove_from_wish_list() {
		    $response = '';
		    $wishlist = [];
		    $post_id = isset( $_POST[ 'post_id' ] ) ? absint( $_POST[ 'post_id' ] ) : 0;

		    if ( $post_id ) {
		        $wishlist = $this->get_wishlist();
		        
		        $existing_key = $this->find_product_index_in_wishlist( $post_id, $wishlist );

		        if ( $existing_key !== false ) {
		            unset( $wishlist[ $existing_key ] );
		            $response = 'removed';
		            $this->update_wishlist( $wishlist );
		            wp_send_json_success( [ 'wishlist' => $wishlist, 'response' => $response ] );
		        }
		    }

		    wp_send_json_error( [ 'error' => esc_html__( 'Invalid data', 'wc-booster' ) ]);
		}

        public function get_wishlist(){
        	$wishlist = [];

		    if ( is_user_logged_in() ) {
		        $wishlist = get_user_meta( get_current_user_id(), 'wc_booster_wishlist', true );
		    } elseif ( isset( $_COOKIE[ 'wc_booster_wishlist' ] ) ) {
		        $wishlist = unserialize(stripslashes( $_COOKIE[ 'wc_booster_wishlist' ]), [ 'allowed_classes' => false ] );
		    }

		    return is_array( $wishlist ) ? $wishlist : [];
        }

        public function find_product_index_in_wishlist( $product_id, $wishlist ) {
		    foreach ( $wishlist as $key => $list ) {
		        if ( $list[ 'product_id' ] == $product_id ) {
		            return $key;
		        }
		    }

		    return false;
		}

		public function update_wishlist( $wishlist ) {
		    if ( is_user_logged_in() ) {
		        update_user_meta( get_current_user_id(), 'wc_booster_wishlist', $wishlist);
		    } else {
		        setcookie( 'wc_booster_wishlist', serialize( $wishlist ), time() + ( 90 * DAY_IN_SECONDS ), COOKIEPATH, COOKIE_DOMAIN, is_ssl() );
		    }
		}

        public static function save_wish_list_on_login( $login, $user ) {
		    if ( ! $user || ! isset( $_COOKIE['wc_booster_wishlist'] ) ) {
		        return;
		    }

		    $user_id = $user->ID;
		    $wishlisted_items = unserialize( stripslashes( $_COOKIE['wc_booster_wishlist'] ), [ 'allowed_classes' => false ] );

		    if ( empty( $wishlisted_items ) ) {
		        return;
		    }

		    $wishlist = get_user_meta( $user_id, 'wc_booster_wishlist', true );

		    $wishlist = array_merge( $wishlist, $wishlisted_items );
		    $wishlist = array_map( 'unserialize', array_unique( array_map( 'serialize', $wishlist ) ) );

		    update_user_meta( $user_id, 'wc_booster_wishlist', $wishlist );

		    setcookie( 'wc_booster_wishlist', '', time() - 3600, COOKIEPATH, COOKIE_DOMAIN, is_ssl() );
		}

		public function remove_wishlist_item_on_order_completion( $order_id ) {
		    $order = wc_get_order( $order_id );

		    if ( ! $order ) {
		        return;
		    }

		    $user_id = $order->get_customer_id();

		    if ( ! $user_id ) {
		        return;
		    }

		    $wishlist = get_user_meta( $user_id, 'wc_booster_wishlist', true );

		    if ( ! is_array( $wishlist ) || empty( $wishlist ) ) {
		        return;
		    }

		    $product_ids = array();

		    foreach ( $order->get_items() as $item ) {
		        $product_id = $item->get_product_id();
		        $product_ids[] = $product_id;
		    }

		    foreach ( $wishlist as $key => $item ) {
		        if ( in_array( $item['product_id'], $product_ids ) ) {
		            unset( $wishlist[ $key ] );
		        }
		    }

		    update_user_meta( $user_id, 'wc_booster_wishlist', $wishlist );
		}


    }

    WC_Booster_Wishlist::get_instance();
}