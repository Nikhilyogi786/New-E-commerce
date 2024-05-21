<?php
    /**
     * Slider settings
     */
    wp_enqueue_style('dpcd-slick');
    wp_enqueue_style('dpcd-accessible-slick-theme');
    wp_enqueue_script('dpcd-accessible-slick');
    wp_enqueue_script('dpcd-slider-script');

    $arrows = isset($all_settings['wc_pcd_show_arrow']) ? 'yes' == $all_settings['wc_pcd_show_arrow'][0] ? true : false: false;
    $dot_nav = isset($all_settings['wc_pcd_dot_nav']) ? 'yes' == $all_settings['wc_pcd_dot_nav'][0] ? true : false  : false;
    $autoplay = isset($all_settings['wc_pcd_autoplay']) ? 'yes' == $all_settings['wc_pcd_autoplay'][0] ? true : false : false;
    $arrow_position = isset($all_settings['wc_pcd_arrow_position']) ? $all_settings['wc_pcd_arrow_position'][0] : 'side';
?>
<!-- Start Slider Layout -->
    <div class="pcd-cat-slider pcd-<?php echo esc_attr($content_position); ?> pcd-arrow-<?php echo esc_attr($arrow_position); ?>" 
        data-arrows="<?php echo esc_attr($arrows); ?>" 
        data-dots="<?php echo esc_attr($dot_nav); ?>"  
        data-autoplay="<?php echo esc_attr($autoplay); ?>"
        data-desktop = 4
        data-tablet = 3
        data-mobile = 1
    > 
    
        <?php 
            do_action( 'pcd_before_loop_start', 'slider' );

            foreach ( $pcd_cats as $category ):
                $cat_thumb_id	= get_term_meta( $category->term_id, 'thumbnail_id', true );
                $term_url		= get_term_link( $category, 'product_cat' );
                $term_id        = get_term_by('name', $category->name, 'product_cat');
                $special_offer  = get_term_meta( $term_id->term_id, 'wc_pcd_cat_special_offer', true); 
                ?>

				<div class="pcd-single-cat-slider-item pcd-single-card pcd-<?php echo esc_attr($content_position); ?>-design"> 
                    <div class="pcd-cat-thumbnail">
                        <a href="<?php echo esc_url( $term_url ); ?>">
                            <?php if(!empty($cat_thumb_id) AND ! $hide_thumbnail): ?>
                                <?php echo wp_get_attachment_image( $cat_thumb_id , 'medium' );  ?>
                            <?php endif; ?>
                            <?php if('overlay-content' == $content_position) : ?>
                                <div class="pcd-grid-cat-info">
                                    <a class="pcd-grid-cat--title" href="<?php echo esc_url( $term_url ); ?>"><?php echo wp_kses_post( $category->name ); ?></a>
                                    <?php if(!empty($special_offer) AND ! $hide_show_special_offer): ?>
                                        <div class="pcd-grid-special-offer">
                                            <?php echo wp_kses_post( $special_offer ); ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                        </a>
                    </div>
                    <?php if('below-content' == $content_position) : ?>
                        <div class="pcd-grid-cat--details">
                            <?php if( ! $hide_category_name ):?>
                                <a class="pcd-grid-cat--title" href="<?php echo esc_url( $term_url ); ?>">
                                    <?php echo wp_kses_post( $category->name ); ?>
                                </a>
                            <?php endif;?>

                            <?php if(!empty($special_offer) AND ! $hide_show_special_offer): ?>
                                <div class="pcd-grid-special-offer">
                                    <?php echo wp_kses_post( $special_offer ); ?>
                                </div>
                            <?php endif; ?>

                            <?php if( ! $hide_category_description ): ?>
                                <div class="pcd-grid-cat--description">
                                    <?php echo category_description($category->term_id); ?>
                                </div>
                            <?php endif; ?>
                            <?php if( empty($hide_show_now_btn) ):?>
                                <a class="pcd-btn pcd-shop-now" href="<?php echo esc_url( $term_url ); ?>"> <?php echo esc_html( $show_now_btn_label ); ?></a>
                            <?php endif;?>
                        </div><!--.pcd-grid-cat--details-->
                    <?php endif; ?>
				</div>
            <?php endforeach; ?>
         <?php do_action( 'pcd_after_loop_lend', 'slider' ); ?>
    </div>
<!-- End Slider Layout -->