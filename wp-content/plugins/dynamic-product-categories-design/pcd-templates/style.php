<?php

/**
 * Generate custom css
 *
 */
// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}
$all_settings  = get_post_meta( $scID );
// var_dump($all_settings);
// die();
$selector = '#pcd-content-section-' . $scID;
$css = '';

$wc_pcd_section_category_content = isset($all_settings['wc_pcd_section_category_content']) ? $all_settings['wc_pcd_section_category_content'][0] : 'none';
$wc_pcd_space_between_categories = isset($all_settings['wc_pcd_space_between_categories']) ? $all_settings['wc_pcd_space_between_categories'][0]  : '';
$wc_pcd_section_category_name_bg_color = isset($all_settings['wc_pcd_section_category_name_bg_color']) ? $all_settings['wc_pcd_section_category_name_bg_color'][0] : '#fff';
$wc_pcd_section_category_name_bg_color = isset($all_settings['wc_pcd_section_category_name_bg_color']) ? $all_settings['wc_pcd_section_category_name_bg_color'][0] : 'none';
$wc_pcd_category_description_color = isset($all_settings['wc_pcd_category_description_color']) ? $all_settings['wc_pcd_category_description_color'][0] : '#111';
$wc_pcd_shop_now_button_color = isset($all_settings['wc_pcd_shop_now_button_color']) ? $all_settings['wc_pcd_shop_now_button_color'][0] : '#fff';
$wc_pcd_shop_now_button_bg_color = isset($all_settings['wc_pcd_shop_now_button_bg_color']) ? $all_settings['wc_pcd_shop_now_button_bg_color'][0] : '#cc2b5e';
$wc_pcd_shop_now_hover_button_color = isset($all_settings['wc_pcd_shop_now_hover_button_color']) ? $all_settings['wc_pcd_shop_now_hover_button_color'][0] : 'none';
$wc_pcd_offer_color = isset($all_settings['wc_pcd_offer_color']) ? $all_settings['wc_pcd_offer_color'][0] : '#111';
$wc_pcd_section_category_name_color = isset($all_settings['wc_pcd_section_category_name_color']) ? $all_settings['wc_pcd_section_category_name_color'][0] : '#444444';

if( isset($all_settings['wc_pcd_content_position']) AND 'overlay-content' == $all_settings['wc_pcd_content_position'][0]){
	$wc_pcd_offer_color = isset($all_settings['wc_pcd_offer_color']) ? $all_settings['wc_pcd_offer_color'][0] : '#fff';
	$wc_pcd_section_category_name_color = isset($all_settings['wc_pcd_section_category_name_color']) ? $all_settings['wc_pcd_section_category_name_color'][0] : '#fff';

}

$css .= "$selector .pcd-single-card{";
$css .= 'background-color:' . esc_html($wc_pcd_section_category_content) . ' !important ;';
$css .= '}';

$css .= "$selector .pcd-single-card{";
$css .= 'margin:' . esc_html($wc_pcd_space_between_categories) . 'px !important ;';
$css .= '}';

$css .= "$selector .pcd-grid-cat-info{";
$css .= 'background-color:' . esc_html($wc_pcd_section_category_name_bg_color) . ' !important ;';
$css .= '}';

$css .= "$selector .pcd-grid-special-offer{";
$css .= 'color:' . esc_html($wc_pcd_offer_color) . ' !important ;';
$css .= '}';

$css .= "$selector .pcd-grid-cat-info a{";
$css .= 'color:' . esc_html($wc_pcd_section_category_name_color) . ' !important ;';
$css .= '}';

$css .= "$selector .pcd-grid-cat--title{";
$css .= 'color:' . esc_html($wc_pcd_section_category_name_color) . ' !important ;';
$css .= '}';

$css .= "$selector .pcd-grid-cat--description *, $selector .pcd-grid-description *{";
$css .= 'color:' . esc_html($wc_pcd_category_description_color) . ' !important ;';
$css .= '}';

$css .= "$selector .pcd-shop-now{";
$css .= 'color:' . esc_html($wc_pcd_shop_now_button_color) . ' !important ;';
$css .= '}';

$css .= "$selector .pcd-shop-now{";
$css .= 'background-color:' . esc_html($wc_pcd_shop_now_button_bg_color) . ' !important ;';
$css .= '}';

$css .= "$selector .pcd-shop-now:hover{";
$css .= 'background-color:' . esc_html($wc_pcd_shop_now_hover_button_color) . ' !important ;';
$css .= '}';

if( $css ){
	echo wp_strip_all_tags( $css );
}

 
