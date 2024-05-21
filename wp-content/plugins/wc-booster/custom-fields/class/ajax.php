<?php
namespace WC_Booster_Custom_Fields;
use WP_Query;

class Ajax{

	public function __construct(){

		add_action( 'wp_ajax_wc_booster_custom_fields_get_navigation', array( $this, 'get_navigation' ) );
		add_action( 'wp_ajax_nopriv_wc_booster_custom_fields_get_navigation', array( $this, 'get_navigation' ) );

		add_action( 'wp_ajax_wc_booster_custom_fields_get_pages', array( $this, 'get_pages' ) );
		add_action( 'wp_ajax_nopriv_wc_booster_custom_fields_get_pages', array( $this, 'get_pages' ) );
	}

	public function get_navigation(){

		check_admin_referer( 'wc_booster_custom_field_nonce' );

		$status = 404;
		$data = array( 
			"results" => array(
				array(
					'id'   => '-1',
					'text' => esc_html__( 'Select', 'wc-booster' )
				)
			), 
			"pagination" => array( "more"=> false ) 
		);

		if( current_user_can( 'edit_posts' ) ){

			$nav_menus  = wp_get_nav_menus();

			if( !empty( $nav_menus ) ){
				$status = 200;
				foreach ( $nav_menus as $menu ){
					$data[ "results" ][] = array(
						'id'   => $menu->term_id,
						'text' => $menu->name
					);
				}
			} 
		}
		
		wp_send_json( $data, $status, true );
		wp_die();
	}

	public function get_pages(){

		check_admin_referer( 'wc_booster_custom_field_nonce' );

		$data = array( "results" => array(), "pagination" => array( "more" => false ) );
		$status = 404;

		if( current_user_can( 'edit_posts' ) ){
			$query = new WP_Query(array(
		       'post_type'      => 'page',
		       'posts_per_page' => -1,
		       'post_status'    => 'publish',
		       's'              => wp_kses_post( $_POST[ 'search' ] )
			));

			if( $query->have_posts() ){
				$status = 200;
				while( $query->have_posts() ){
					$query->the_post();
					$data[ "results" ][] = array(
						'id'   => get_the_ID(),
						'text' => get_the_title()
					);
				}
			}

			wp_reset_postdata();
		}
		wp_send_json( $data, $status, true );
		wp_die();
	}
}
