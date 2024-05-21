<?php 
if( !class_exists( 'WC_Booster_Search' ) ){

    class WC_Booster_Search{ 

        public static $instance;
        public  $settings;

    	public static function get_instance() {
    	    if ( ! self::$instance ) {
    	        self::$instance = new self();
    	    }
    	    return self::$instance;
    	}

    	public function __construct(){
            add_action( 'init', array( $this, 'init' ) );
    	}

        public function init(){
            $this->settings = WC_Booster_Settings::get_instance(); 
            add_shortcode( 'wc_booster_search', array( $this, 'render_shortcode' ) );
            if( 'on' == $this->settings->get_field( 'enable_search' ) ){
                add_action( 'wp_ajax_wc_booster_get_product', array( $this, 'get_product' ) );
                add_action( 'wp_ajax_nopriv_wc_booster_get_product', array( $this, 'get_product' ) );
                add_filter( 'wp_nav_menu', array( $this, 'assign_to_menu' ), 20, 2 );
            }
        }

    	public function render_shortcode(){
            
            if( 'on' != $this->settings->get_field( 'enable_search' ) ){
                return;
            }

    		ob_start();
    		?>
    		<form class="wc-booster-search-form">
    			<select class="wc-booster-product" name="wc_booster_product"></select>
    		</form>
    		<?php
    		return ob_get_clean();
    	}

        public function get_product(){

            $data   = array( "results" => array(), "pagination" => array( "more"=> false ) );
            $status = 404;

            if( check_ajax_referer( 'wc_booster_ajax_nonce', 'security' ) ){

                $query  = false;

                $search_key = sanitize_text_field( $_POST[ 'search' ] );
                $query1 = new WP_Query([
                   'post_type'      => [ 'product', 'product_variation' ],
                   's'              => $search_key,
                   'post_status'    => 'publish',
                   'posts_per_page' => -1
                ]);

                if( $query1->have_posts() ){
                    $query = $query1;
                }else{
                    $query = new WP_Query([
                       'post_type'      => [ 'product', 'product_variation' ],
                       'posts_per_page' => -1,
                       'post_status'    => 'publish',
                       's'              => '',
                        'meta_query' => [
                            [
                                'key'   => '_sku',
                                'value' => $search_key
                            ]
                        ]
                    ]);
                }

                if( $query ){
                    $status = 200;
                    while( $query->have_posts() ){
                        $query->the_post();
                        $p = wc_get_product( get_the_ID() );

                        $data[ "results" ][] = array(
                            'id'        => get_the_ID(),
                            'text'      => $p->get_name(),
                            'thumbnail' => get_the_post_thumbnail_url(),
                            'permalink' => get_the_permalink()
                        );

                        if( 'variable' == $p->get_type() ){
                            $variations = $p->get_available_variations();
                            if( $variations ){
                                foreach( $variations as $v ){

                                    $variation_obj = new WC_Product_variation( $v[ 'variation_id' ] );
                                    $attributes = $variation_obj->get_variation_attributes();
                                    $name = $p->get_name();
                                    foreach( $attributes  as $attr ){
                                        $name .= ' - ' . $attr;
                                    }

                                    $data[ 'results' ][] = array(
                                        'id'        => $v['variation_id'],
                                        'text'      => $name,
                                        'thumbnail' => "",
                                        'permalink' => get_the_permalink()
                                    );
                                }
                            }
                        }
                    }
                }

                wp_reset_postdata();
            }
            wp_send_json( $data, $status, true );
            wp_die();
        }

        public function assign_to_menu( $nav_menu, $args ){

            $menu_id = $this->settings->get_field( 'search_menu' );
            if( $menu_id != $args->menu->term_id ){
                return $nav_menu;
            }

            ob_start();
            echo wp_kses( do_shortcode( '[wc_booster_search]' ), [
                'form' => [
                    'class'  => [],
                ],
                'select'     => [
                    'class' => [],
                    'name'  => []
                ]
            ]);
            
            $search = ob_get_clean();
            $nav_menu .= $search;

            return $nav_menu;
        }
    }

    WC_Booster_Search::get_instance();
}