<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Get all Product category for meta value
 * @param $term_slug
 *
 * @return array|bool
 */

function dpcd_options_taxonomy_terms( ) {

    $args = array(
        'taxonomy'   => 'product_cat',
        'hide_empty' => false,
    );

    $wc_pcd_terms = get_terms( $args );

    $wc_pcd_terms_array = [];

    foreach ( $wc_pcd_terms as $term ) {

        $wc_pcd_terms_array[ $term->slug ] = $term->name;

    }

    return $wc_pcd_terms_array;
}
