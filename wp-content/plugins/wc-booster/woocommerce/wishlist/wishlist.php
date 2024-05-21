<?php
/**
 * Wish list template.
 *
 * @author  WC Booster.
 * @since   1.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

$block_header = do_blocks( '<!-- wp:template-part {"slug":"header","tagName":"header"} /-->');
$block_footer = do_blocks( '<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->');
$block_content = do_blocks( '<!-- wp:wc-booster/wish-list-table {"block_id":"wc-booster-wishlist-table-block-instance-0-80976e5d-255b-4791-958f-e6e6e1de439e"} /-->');
?>
<?php wp_head(); ?>
<body <?php body_class(); ?>>
			
	<?php wp_body_open(); ?>
	<div class="wp-site-blocks">
		<?php echo $block_header; ?>
		<h2 class="wc-booster-wishlist-title"> <?php  esc_html_e( 'Wishlist', 'wc-booster' ); ?> </h2>
		<?php  echo $block_content; ?>	
		<?php echo $block_footer; ?>
		<?php wp_footer(); ?>
	</div>	
</body>
</html>


