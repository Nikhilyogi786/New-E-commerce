<?php
/*
Template Name: Custom Shop Page
*/
get_header();
?>

<!-- <header class="page-header">
    <h1 class="page-title"><?php //the_title(); ?></h1>
</header> -->

<div class="banner-image">
    <!-- Replace 'your-banner-image.jpg' with the URL or path to your banner image -->
    <img src="http://localhost/ecommerce/wp-content/uploads/2024/05/gallery-images-4.jpg" alt="Banner Image" class="img-fluid">
</div>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

        <div class="container">
            <div class="row">

                <div class="col-md-3">
                    <aside id="secondary" class="widget-area sidebar" role="complementary">
                        <!-- Search Form -->
                        <form role="search" method="get" class="search-form form-inline" action="<?php echo esc_url(home_url('/')); ?>">
                            <div class="input-group">
                                <input type="search" class="search-field form-control" placeholder="<?php echo esc_attr_x('Search Products', 'placeholder', 'textdomain'); ?>" value="<?php echo get_search_query(); ?>" name="s" />
                                <div class="input-group-append">
                                    <button type="submit" class="search-submit btn btn-primary"><?php echo _x('Search', 'submit button', 'textdomain'); ?></button>
                                </div>
                            </div>
                        </form>

                        <!-- Category Filter -->
                        <?php
                        $args = array(
                            'show_option_none' => __('Select category', 'textdomain'),
                            'taxonomy'         => 'product_cat',
                            'name'             => 'product_cat',
                            'class'            => 'cat custom-select',
                            'orderby'          => 'name',
                            'echo'             => '0',
                            'value_field'      => 'slug',
                        );
                        ?>
                        <form>
                            <?php wp_dropdown_categories($args); ?>
                            <input type="submit" value="Filter" class="btn btn-primary mt-2" />
                        </form>

                        <!-- Price Filter -->
                        <form class="mt-3">
                            <div class="form-group">
                                <label for="min_price">Min Price</label>
                                <input type="text" id="min_price" name="min_price" class="form-control" value="" placeholder="Min Price" />
                            </div>
                            <div class="form-group">
                                <label for="max_price">Max Price</label>
                                <input type="text" id="max_price" name="max_price" class="form-control" value="" placeholder="Max Price" />
                            </div>
                            <input type="submit" value="Filter" class="btn btn-primary" />
                        </form>
                    </aside><!-- #secondary -->
                </div><!-- .col -->

                <div class="col-md-9">
                    <ul class="products row">
                        <?php   
                         $args = array(
                            'post_type'      => 'product',
                            'posts_per_page' => -1, // Number of products to display
                            'orderby'        => 'date',
                            'order'          => 'DESC',
                        );  

                        $products = new WP_Query($args);

                        // Output products
                        if ($products->have_posts()) {
                            while ($products->have_posts()) {
                                $products->the_post();
                                global $product;
                        ?>
                                <li class="col-md-4">
                                    <div class="card mb-4 shadow-sm">
                                        <div class="zoom">
                                            <img class="card-img-top img-fluid" src="<?php echo get_the_post_thumbnail_url($product->get_id(), 'medium'); ?>" alt="<?php the_title_attribute(); ?>">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title"><?php the_title(); ?></h5>
                                            <p class="card-text"><?php echo $product->get_price_html(); ?></p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <a href="<?php echo esc_url($product->get_permalink()); ?>" class="btn btn-sm btn-outline-secondary">View</a>
                                                    <a href="<?php echo esc_url($product->add_to_cart_url()); ?>" class="btn btn-sm btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                        <?php
                            }
                            wp_reset_postdata();
                        } else {
                            echo '<p class="col-12">No recent products found.</p>';
                        }
                        ?>
                    </ul>
                </div><!-- .col -->

            </div><!-- .row -->

        </div><!-- .container -->

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
?>
