<?php
namespace dpcdCategoryDesign;
use dpcdCategoryDesign\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

 /**
 * Shortcode
 * 
 * @package Woocommerce Product Categories Design
 * @since 1.0.0
 */

class shortCode {

    public function __construct() {

        add_shortcode( 'dpcd_categories_design', [ $this, 'product_category_design' ] );
	
    }

    /**
     * This is Product categories shortcode
     */
    public function product_category_design( $atts, $content = null ){
        $option = array(
            'id' => '',
        );
        $settings = shortcode_atts( $option, $atts );

        if ( $settings['id'] == null || empty( $settings['id'] ) ) {
			return;
		}
        /**
         * Get category Showcase ID 
         */
        $post_id = intval( $settings['id'] );

        /**
         * Get featured category slug 
         */
        $featured_cats = get_post_meta( $post_id, 'wc_pcd_featured_cats', true );

        /**
         * Get category Section Layout Style 
         */
        $cat_layout = get_post_meta( $post_id, 'wc_pcd_layout', true ); 

        $all_settings  = get_post_meta( $post_id );

        $content_position          = isset($all_settings['wc_pcd_content_position']) ? $all_settings['wc_pcd_content_position'][0]          : 'below-content';
        $show_now_btn_label        = isset($all_settings['wc_pcd_shop_now_button_label']) ? $all_settings['wc_pcd_shop_now_button_label'][0]: 'Shop Now';
        $hide_category_name        = isset($all_settings['wc_pcd_display_category_name']) ? true                                            : false;
        $hide_show_now_btn         = isset($all_settings['wc_pcd_show_hide_shop_now_btn']) ? true                                           : false;
        $hide_show_special_offer   = isset($all_settings['wc_pcd_show_hide_special_offer']) ? true                                          : false;
        $hide_category_description = isset($all_settings['wc_pcd_show_category_description']) ? true                                        : false;
        $hide_empty_category       = isset($all_settings['wc_pcd_hide_empty_cats']) ? $all_settings['wc_pcd_hide_empty_cats'][0]            : false;
        $order_by                  = isset($all_settings['wc_pcd_select_category_order']) ? $all_settings['wc_pcd_select_category_order'][0]: 'ASC';
        $hide_thumbnail            = isset($all_settings['wc_pcd_category_thumbnail']) ? $all_settings['wc_pcd_category_thumbnail'][0]      : false;

        $args = array(
            'hide_empty' => $hide_empty_category,
            'slug'       => $featured_cats,
            'order'      => $order_by
        );
        $pcd_cats = get_terms( 'product_cat', $args ); 

        ob_start();

        if ( ! empty( $pcd_cats ) && ! is_wp_error( $pcd_cats ) ) {
            echo '<section id="pcd-content-section-'. esc_attr($post_id). '" class="pcd-content-section pcd-position-'. esc_attr($content_position). ' pcd-'. esc_attr($cat_layout). '">';
            if( $cat_layout == 'layout_grid' ){
                include DPCD_PATH . '/pcd-templates/template-grid.php';
            }
            if( $cat_layout == 'layout_slider' ){
                include DPCD_PATH . '/pcd-templates/template-slider.php';
            }
            echo '</section>';
        }

        return ob_get_clean();
        
    }
    
}
new shortCode();