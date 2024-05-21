<?php
/**
 * WC Booster Blocks
 * 
 * @since WC Booster 1.3
 */
if( !class_exists( 'WC_Booster_Blocks_Init' ) ){

    class WC_Booster_Blocks_Init extends WC_Booster_Helper{

        protected static $instance;
        
        public static function get_instance() {
            if ( null === self::$instance ) {
                self::$instance = new self();
            }

            return self::$instance;
        }

    	public function __construct(){
            add_action( 'enqueue_block_assets', [ $this, 'block_assets' ] );
            add_action( 'rest_api_init', [ $this, 'register_rest_fields' ] );
    		add_filter( 'block_categories_all', [ $this, 'register_category' ], 99, 1 );
            add_action( 'plugins_loaded', [ $this, 'include_files' ] );

            add_action( 'wp_ajax_wc_booster_update_user_favourites', array( $this, 'update_user_favourites' ) );
            add_action( 'wp_ajax_nopriv_wc_booster_update_user_favourites', array( $this, 'update_user_favourites' ) );
    	}

        public function register_category( $categories ){
            # setup category array
            $category = [
                'slug' => 'wc-booster',
                'title' => __( 'WC Booster', 'wc-booster' ),
            ];

            $category1 = [
                'slug' => 'wc-booster-single',
                'title' => __( 'WC Booster Single Product', 'wc-booster' ),
            ];

            # make a new category array and insert ours at position 1
            $new_categories = [];
            $new_categories[0] = $category;
            $new_categories[1] = $category1;

            # rebuild cats array
            foreach ($categories as $category) {
                $new_categories[] = $category;
            }

            return $new_categories;
        }

        public function include_files(){

            require_once WC_Booster_Path . "blocks/base-block.php";
            
            $dir = WC_Booster_Path . "blocks/class/*.php";
            $dirs = array_filter( glob( $dir ), 'is_file' );
            foreach( $dirs as $dir ){
                require_once $dir;
            }
        }

        public function get_product_categories( $object, $field_name, $request ){

            $product_id = $object['id'];
            $categories = wp_get_post_terms( $product_id, 'product_cat' );
            $categories_data = [];
            
            if( !empty( $categories ) ){
                foreach( $categories as $category ){
                    $categories_data[] = [
                        'id'   => $category->term_id,
                        'name' => $category->name,
                    ];
                }
            }

            return $categories_data;
        }

        public function get_user_favourites( $user, $field_name, $request ){

            $current_favourites = get_user_meta( $user['id'], 'wc_booster_favourites_demo', true );
            return $current_favourites;
        }

        public function update_user_favourites( ) {
            $data   = array( "results" => array( 'resutl') );
            $status = 404;

            check_ajax_referer( 'wc_booster_nonce', 'security' );

            $meta_key = 'wc_booster_favourites_demo';
            $demo_id = $_POST[ 'id' ];
            $user = wp_get_current_user();
           
            $current_favourites = get_user_meta( $user->ID, $meta_key, true );

            $index = false;
            if ( !is_array( $current_favourites ) ) {
                $current_favourites = array();
            }else{

                $index = array_search( $demo_id, $current_favourites );
            }


            if ( $index !== false ) {
                unset( $current_favourites[ $index ] );
            } else {
                $current_favourites[] = $demo_id;
            }

            $res = update_user_meta( $user->ID, $meta_key, $current_favourites );

            if ( $res ) {
                $data[ 'status' ] = 200;
                $data[ 'results' ] = $current_favourites;
            } else {
                $data[ 'status' ] = 500; 
                $data[ 'error' ] = 'Failed to update favourites';
            }

            wp_send_json( $data, 200, true );
            wp_die();
        }


        public function get_product_reviews( $object, $field_name, $request ){

            $product_id = $object['id'];
            $product = wc_get_product( $product_id );
            $args = array (
                'post_type' => 'product',
                'post_id' => $product_id,
                'status' => 'approve', // Only approved comments
            );
            $comments = get_comments( $args );

            $average_rating_html = wc_get_rating_html( $product->get_average_rating() );

            $reviews = array();

            foreach ( $comments as $comment ) {
                $avatar = get_avatar( $comment, 60 ); 
                $reviews[] = array(
                    'author_name' => $comment->comment_author,
                    'date' => date('F j, Y', strtotime($comment->comment_date)),
                    'rating' => $average_rating_html,
                    'review_image' => $avatar, // Assuming 'review_image' is the custom field storing the image URL
                    'comment_text' => $comment->comment_content,
                    'wc_booster_p_id' => $product_id,
                );
            }

            return $reviews;
        }


        public function get_product_price($object, $field_name, $request) {
            $product_id = $object['id'];
            $product = wc_get_product($product_id);

            if ($product) {
                $price_html = $product->get_price_html();
                if ($price_html) {
                    return $price_html;
                }
            }

            return null;
        }


        public function get_product_rating($object, $field_name, $request) {
            $product_id = $object['id'];
            $product = wc_get_product($product_id);

            if ($product) {
                return wc_get_rating_html( $product->get_average_rating() );
            }

            return null;


        }

        public function get_product_banner_img($object, $field_name, $request) {
            $product_id = $object['id'];
            $banner_img = '';

            $banner_img_id = get_post_meta( $product_id, 'wc_booster_product_banner_img', true );

            if ( isset ( $banner_img_id ) ) {
                $banner_img    = wp_get_attachment_url( $banner_img_id );
            }

            return $banner_img;
        }

        public function get_cat_icon_img($object, $field_name, $request) {
            $cat_id = $object['id'];
            $class = get_term_meta( $cat_id, 'wc_booster_category_icon', true );
            return $class;
        }

        public function get_product_category_image( $object, $field_name, $request ){

            $cat_id = $object['id'];
            $src = WC_Booster_Url . 'img/default-image.jpg';
            $thumbnail_id = get_term_meta( $cat_id, 'thumbnail_id', true ); 
            if( $thumbnail_id ){
                $src = wp_get_attachment_url( $thumbnail_id );

            }

            return $src;
        }


        public function register_rest_fields(){

            register_rest_field(
                'product_cat',
                'wc_booster_product_category_img',
                [
                    'get_callback' => [ $this, 'get_product_category_image' ],
                    'update_callback' => null,
                    'schema' => null,
                ]
            );

            register_rest_field(
                'product',
                'wc_booster_product_categories',
                [
                    'get_callback' => [ $this, 'get_product_categories' ],
                    'update_callback' => null,
                    'schema' => null,
                ]
            );

            register_rest_field(
                'product',
                'wc_booster_product_price',
                [
                    'get_callback' => [ $this, 'get_product_price' ],
                    'update_callback' => null,
                    'schema' => null,
                ]
            );

            register_rest_field(
                'product',
                'wc_booster_product_rating',
                [
                    'get_callback' => [ $this, 'get_product_rating' ],
                    'update_callback' => null,
                    'schema' => null,
                ]
            );

            register_rest_field(
                'product',
                'wc_booster_product_banner_img',
                [
                    'get_callback' => [ $this, 'get_product_banner_img' ],
                    'update_callback' => null,
                    'schema' => null,
                ]
            );

            register_rest_field(
                'product_cat',
                'wc_booster_category_icon',
                [
                    'get_callback' => [ $this, 'get_cat_icon_img' ],
                    'update_callback' => null,
                    'schema' => null,
                ]
            );

            register_rest_field(
                'product',
                'wc_booster_product_reviews',
                [
                    'get_callback' => [ $this, 'get_product_reviews' ],
                    'update_callback' => null,
                    'schema' => null,
                ]
            );

            register_rest_field(
                'user',
                'wc_booster_favourites_demo',
                [
                    'get_callback' => [ $this, 'get_user_favourites' ],
                    'update_callback' => null,
                    'schema' => null,
                ]
            );
        }

        /**
         * Register Style for banckend and frontend
         * dependencies { wp-editor }
         * @access public
         * @return void
         * @since 1.0.0
         */
        public function block_assets(){

            if (is_admin()) {
                $scripts = array(
                    array(
                        'handler' => 'wc-booster-fonts',
                        'style' => 'https://fonts.googleapis.com/css?family=' . join('|', self::get_fonts()) . '&display=swap',
                        'absolute' => true,
                        'minified' => true,
                    ),
                );

                self::enqueue($scripts);

                $size = get_intermediate_image_sizes();
                $size[] = 'full';

                $l10n = apply_filters('wc_booster_l10n', array(
                    'image_size' => $size,
                    'plugin_path' => self::get_plugin_directory_uri(),
                    'is_pro' => class_exists( "WC_Booster_Pro_Blocks_Init" ) ? "1" :"0"
                ));

                wp_localize_script( 'wc-booster-carousel-product-editor-script', 'WC_Booster_VAR', $l10n);

            }
        }
    }

    WC_Booster_Blocks_Init::get_instance();
}