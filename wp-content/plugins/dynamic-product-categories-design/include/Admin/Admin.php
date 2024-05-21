<?php
namespace dpcdCategoryDesign;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class For admin function
 *
 * @param $columns
 *
 * @return mixed
 */
class Admin {

	public function __construct() {

		add_filter( 'manage_dpcd_category_design_posts_columns', [ $this, 'shortocode_in_post_column'] );

		add_filter( 'manage_dpcd_category_design_posts_custom_column', [ $this, 'shortocode_in_post_column_data' ], 10, 2 );

	}

	/**
	 * Add shortcode admin column
	 *
	 * @param $columns
	 *
	 * @return mixed
	 */
	public function shortocode_in_post_column( $columns ) {

		unset( $columns['date'] );

		$columns['shortcode'] = __( 'Shortcode', 'wc-pcd' );

		$columns['date']      = __( 'Date', 'wc-pcd' );

		return $columns;

	}

	/**
	 * Show shortcode admin column
	 *
	 * @param $column
	 * @param $post_id
	 */
	public function shortocode_in_post_column_data( $column, $post_id ) {

		switch ( $column ) {

			case 'shortcode' :
				echo '<code>[dpcd_categories_design id="'.esc_attr($post_id).'"]</code>';
				break;

		}

	}
	

}
new Admin();