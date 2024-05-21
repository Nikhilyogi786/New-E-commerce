<?php
namespace dpcdCategoryDesign;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
class Helper {

    /**
     * Get all post status
     *
     * @return boolean
     */
    public static function getPostStatus() {
        return [
            'publish'    => esc_html__( 'Publish', 'wc-pcd' ),
            'pending'    => esc_html__( 'Pending', 'wc-pcd' ),
            'draft'      => esc_html__( 'Draft', 'wc-pcd' ),
            'auto-draft' => esc_html__( 'Auto draft', 'wc-pcd' ),
            'future'     => esc_html__( 'Future', 'wc-pcd' ),
            'private'    => esc_html__( 'Private', 'wc-pcd' ),
            'inherit'    => esc_html__( 'Inherit', 'wc-pcd' ),
            'trash'      => esc_html__( 'Trash', 'wc-pcd' ),
        ];
    }

    /**
     * Get all Order By
     *
     * @return boolean
     */
    public static function getOrderBy() {
        return [
                'date'          => esc_html__( 'Date', 'wc-pcd' ),
                'ID'            => esc_html__( 'Order by post ID', 'wc-pcd' ),
                'author'        => esc_html__( 'Author', 'wc-pcd' ),
                'title'         => esc_html__( 'Title', 'wc-pcd' ),
                'modified'      => esc_html__( 'Last modified date', 'wc-pcd' ),
                'parent'        => esc_html__( 'Post parent ID', 'wc-pcd' ),
                'comment_count' => esc_html__( 'Number of comments', 'wc-pcd' ),
                'menu_order'    => esc_html__( 'Menu order', 'wc-pcd' ),
        ];
    }


    /**
     * Get bootstrap layout class
     *
     * @return string
     */

     public static function get_grid_layout_bootstrap_class( $desktop = '1' , $tablet = '1', $mobile = '1' ){

        $desktop_class = '';
        $tablet_class = '';
        $mobile_class = '';

        $desktop_layouts = [
            '1' => 'lg-12',
            '2' => 'lg-6',
            '3' => 'lg-4',
            '4' => 'lg-3'
        ];

        $tablet_layouts = [
            '1' => 'md-12',
            '2' => 'md-6',
            '3' => 'md-4',
            '4' => 'md-3'
        ];

        $mobile_layouts = [
            '1' => '12',
            '2' => '6',
            '3' => '4',
            '4' => '3'
        ];

        if( array_key_exists( $desktop, $desktop_layouts ) ){
            $desktop_class = $desktop_layouts[$desktop];
        }

        if( array_key_exists( $tablet, $tablet_layouts ) ){
            $tablet_class = $tablet_layouts[$tablet];
        }

        if( array_key_exists( $mobile, $mobile_layouts ) ){
            $mobile_class = $mobile_layouts[$mobile];
        }

        return "pcd-col-{$desktop_class} pcd-col-{$tablet_class} pcd-col-{$mobile_class}";

    }

    /**
	 * Render.
	 *
	 * @param string  $view_name View name.
	 * @param array   $args View args.
	 * @param boolean $return View return.
	 *
	 * @return string|void
	 */
	public static function render( $view_name, $args = [], $return = false ) {
        $path = str_replace( '.', '/', $view_name );
        $template_file = DPCD_PATH . '/pcd-templates/' . $path.'.php';
        if ( $args ) {
			extract( $args );
		}

		if ( ! file_exists( $template_file ) ) {
			return;
		}

		if ( $return ) {
			ob_start();
			include $template_file;

			return ob_get_clean();
		} else {
			include $template_file;
		}
	}
    
    /**
     * Generate Shortcode for generate css
     *
     * @param integer $scID
     *
     * @return void
    */

    public static function generatorShortcodeCss( $scID ) {
        global $wp_filesystem;
        // Initialize the WP filesystem, no more using 'file-put-contents' function
        if ( empty( $wp_filesystem ) ) {
            require_once ABSPATH . '/wp-admin/includes/file.php';
            WP_Filesystem();
        }
        $upload_dir     = wp_upload_dir();
        $upload_basedir = $upload_dir['basedir'];
        $cssFile        = $upload_basedir . '/dynamic-product-category-design/category-design.css';
        if ( $css = self::render( 'style', compact( 'scID' ), true ) ) {
            $css = sprintf( '/*wc-pcd-%2$d-start*/%1$s/*wc-pcd-%2$d-end*/', $css, $scID );
            if ( file_exists( $cssFile ) && ( $oldCss = $wp_filesystem->get_contents( $cssFile ) ) ) {
                if ( strpos( $oldCss, '/*wc-pcd-' . $scID . '-start' ) !== false ) {
                    $oldCss = preg_replace( '/\/\*wc-pcd-' . $scID . '-start[\s\S]+?wc-pcd-' . $scID . '-end\*\//', '', $oldCss );
                    $oldCss = preg_replace( "/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/", '', $oldCss );
                }
                $css = $oldCss . $css;
            } elseif ( ! file_exists( $cssFile ) ) {
                $upload_basedir_trailingslashit = trailingslashit( $upload_basedir );
                $wp_filesystem->mkdir( $upload_basedir_trailingslashit . 'dynamic-product-category-design' );
            }
            if ( ! $wp_filesystem->put_contents( $cssFile, $css ) ) {
                error_log( print_r( 'Product Category Design : Error Generated css file ', true ) );
            }
        }
    }

    /**
     * Generate Shortcode for remove css
     *
     * @param integer $scID
     *
     * @return void
     */
    public static function removeGeneratorShortcodeCss( $scID ) {
        $upload_dir     = wp_upload_dir();
        $upload_basedir = $upload_dir['basedir'];
        $cssFile        = $upload_basedir . '/dynamic-product-category-design/category-design.css';
        if ( file_exists( $cssFile ) && ( $oldCss = file_get_contents( $cssFile ) ) && strpos( $oldCss, '/*wc-pcd-' . $scID . '-start' ) !== false ) {
            $css = preg_replace( '/\/\*wc-pcd-' . $scID . '-start[\s\S]+?wc-pcd-' . $scID . '-end\*\//', '', $oldCss );
            $css = preg_replace( "/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/", '', $css );
            file_put_contents( $cssFile, $css );
        }
    }

}