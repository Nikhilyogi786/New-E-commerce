<?php
namespace dpcdCategoryDesign;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registar Custom Post type 
*/
class Custom_Post_Type {

    /**
     * This is Product categories shortcode
    */
    public function __construct(){

        add_action( 'init', [ $this, 'custom_post_type' ] );

    }

    /**
     * Register Custom Post type
    */
    public function custom_post_type() {

        $labels = array(
            'name'               => _x( 'Product Category Design', 'post type general name', 'wc-pcd' ),
            'singular_name'      => _x( 'Product Category Design', 'post type singular name', 'wc-pcd' ),
            'menu_name'          => _x( 'Category Design', 'admin menu', 'wc-pcd' ),
            'name_admin_bar'     => _x( 'Category Design', 'add new on admin bar', 'wc-pcd' ),
            'add_new'            => _x( 'Add New', 'Category Design', 'wc-pcd' ),
            'add_new_item'       => __( 'Add New Category Design', 'wc-pcd' ),
            'new_item'           => __( 'New Product Category Design', 'wc-pcd' ),
            'edit_item'          => __( 'Edit Product Category Design', 'wc-pcd' ),
            'view_item'          => __( 'View Product Category Design', 'wc-pcd' ),
            'all_items'          => __( 'All Designs', 'wc-pcd' ),
            'search_items'       => __( 'Search Design', 'wc-pcd' ),
            'parent_item_colon'  => __( 'Parent Design:', 'wc-pcd' ),
        );
    
        $args = array(
            'labels'             => $labels,
            'public'             => false,
            'publicly_queryable' => false,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => false,
            'capability_type'    => 'post',
            'menu_icon'          => 'dashicons-schedule',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_position'      => null,
            'supports'           => array( 'title' )
        );
    
        register_post_type( 'dpcd_category_design', $args );

    }

}

/**
 * Call Post Type main class
*/
new Custom_Post_Type();