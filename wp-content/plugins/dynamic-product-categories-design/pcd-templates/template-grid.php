
<!-- Start Grid Layout -->
    <div class="pcd-cat-grid-wrap pcd-<?php echo esc_attr($content_position); ?>"> 
        <?php 
            
            do_action( 'pcd_before_loop_start', 'grid' );

            foreach ( $pcd_cats as $category ):

                $cat_thumb_id	= get_term_meta( $category->term_id, 'thumbnail_id', true );
                $term_url		= get_term_link( $category, 'product_cat' );
                $term_id        = get_term_by('name', $category->name, 'product_cat');
                $special_offer  = get_term_meta( $term_id->term_id, 'wc_pcd_cat_special_offer', true);?>

				<div class="pcd-single-cat-grid-item pcd-single-card pcd-single-card__overlay-design">
                    <div class="pcd-wrap">
                        <?php if(!empty( $cat_thumb_id ) AND ! $hide_thumbnail): ?>
                            <a href="<?php echo esc_url( $term_url ); ?>">
                                <?php echo wp_get_attachment_image( $cat_thumb_id , 'medium' );?>
                            </a>
                        <?php endif; ?>

                        <div class="pcd-grid-cat-info">
                            <?php if( ! $hide_category_name ):?>
                                <a  href="<?php echo esc_url( $term_url ); ?>">
                                    <?php echo wp_kses_post( $category->name ); ?>
                                </a>
                            <?php endif;?>

                            <?php if(!empty($special_offer) AND ! $hide_show_special_offer): ?>
                                <div class="pcd-grid-special-offer">
                                    <?php echo wp_kses_post( $special_offer ); ?>
                                </div>
                            <?php endif; ?>
                        </div>

                        <?php if( ! $hide_category_description ):?>
                            <div class="pcd-grid-description">
                                <?php echo category_description( $category->term_id ); ?>
                            </div>
                        <?php endif;?>

                        <?php if( empty($hide_show_now_btn) ):?>
                            <a class="pcd-btn pcd-shop-now" href="<?php echo esc_url( $term_url ); ?>">
                                <?php echo esc_html( $show_now_btn_label ); ?>
                            </a>
                        <?php endif;?>
                    </div> 
				</div>
        <?php endforeach; ?>
        <?php do_action( 'pcd_after_loop_start', 'grid' ); ?>
    </div>
<!-- End Grid Layout -->