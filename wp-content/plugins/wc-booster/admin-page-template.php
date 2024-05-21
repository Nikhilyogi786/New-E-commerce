<div class="wc-booster-welcome-page">
    <div class="wc-booster-welcome-page-header">
        <div class="wc-booster-welcome-page-header-left">
            <h1>WC Booster - V <?php echo WC_Booster_Version; ?></h1>
            <p>Advance your business by giving customers a distinctive shopping experience with WC Booster</p>
        </div>

        <div class="wc-booster-welcome-page-header-right">
            <a href="//www.eaglevisionit.com/downloads/" target="_blank">
                <span class="dashicons dashicons-admin-customizer"></span>
                Browse Compatible Themes
            </a>          
            <a href="//www.eaglevisionit.com/downloads/wc-booster/" target="_blank" class="rate-us-btn">
                <span class="dashicons dashicons-star-filled"></span> 
                Rate Us 
            </a>
            <a href="//www.eaglevisionit.com/contact-us/" target="_blank" class="get-support-btn">
                <span class="dashicons dashicons-admin-links"></span>
                Get Support 
            </a>
          
        </div>
    </div>

    <div class="wc-booster-welcome-page-body">
        <div class="wc-booster-welcome-page-body-left">
            <h1>WC Booster Features</h1>
            <div class="wc-booster-blocks-wrapper">
                <?php
                $contents = WC_Booster_Helper::get_blocks_info();

                // sort by title
                usort($contents, function( $a, $b ){
                    return $a[ 'title' ] <=> $b[ 'title' ];
                });

                foreach( $contents as $block_id => $content ):
                    ?>
                    <div class="wc-booster-blocks-items">
                        <?php if( isset( $content[ 'is_pro' ] ) && $content[ 'is_pro' ] === true ): ?>
                            <span class="pro">Premium</span>
                        <?php endif; ?>

                        <div class="wc-booster-blocks-items-inner">
                            <div class="wc-booster-blocks-image">
                                <?php WC_Booster_Helper::render_svg( $content[ 'icon' ] ); ?>
                            </div>
                            <h3><?php echo esc_html( $content[ 'title' ] ); ?></h3>
                            <p><?php echo esc_html( $content[ 'description' ] ); ?></p>
                            <a href="#">Explore More</a>
                        </div>
                    </div>
                    <?php
                endforeach;
                ?>
            </div>
        </div>       
    </div>
</div>