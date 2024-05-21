<?php $fonts = require __DIR__ . '/font-array.php'; ?>
<div class="wc-booster-icon-selector-wrapper" data-fonts="<?php echo esc_attr( json_encode( $fonts ) ); ?>">
	<div class="overlay"></div>
	<div class="wc-booster-icon-selector-inner">
		<button class="wc-booster-close-icon-selector"><i class="fa fa-times"></i></button>
		<input type="search" class="wc-booster-icon-search" placeholder="<?php echo __( 'Search for an icon', 'wc-booster' ); ?>">
		<div class="wc-booster-icon-selector"></div>
		<div class="wc-booster-icon-selector-pagination"></div>
	</div>
</div>