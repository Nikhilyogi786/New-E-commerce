<?php
function enqueue_custom_shop_scripts()
{
    wp_localize_script('custom-shop-js', 'ajax_object', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_custom_shop_scripts');

function wc_shop_child_enqueue_styles()
{
    // Enqueue parent theme's stylesheet
    wp_enqueue_style('ecom-parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('ecom-custom-js', get_stylesheet_directory_uri() . '/custom.js', array(), wp_get_theme()->get('Version'), true);

    // Enqueue child theme's custom stylesheet
}
add_action('wp_enqueue_scripts', 'wc_shop_child_enqueue_styles');

function enqueue_bootstrap_css()
{
    wp_enqueue_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css', array(), '4.5.2');
    wp_enqueue_style('bootstrap-icons', 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css');
}
add_action('wp_enqueue_scripts', 'enqueue_bootstrap_css');


function display_recent_products_shortcode()
{
    // Get recent products
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => -1, // Number of products to display
        'orderby'        => 'date',
        'order'          => 'DESC',
    );

    $products = new WP_Query($args);

    // Output products
    if ($products->have_posts()) {
        ob_start();
        echo '<div class="row">';
        while ($products->have_posts()) {
            $products->the_post();
            global $product;
?>
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <div class="zoom">
                        <img class="card-img-top" src="<?php echo get_the_post_thumbnail_url($product->get_id(), 'medium'); ?>" alt="<?php the_title_attribute(); ?>">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><?php the_title(); ?></h5>
                        <p class="card-text"><?php echo $product->get_price_html(); ?></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="<?php echo esc_url($product->get_permalink()); ?>" class="btn btn-md btn-outline-secondary animated-button">
                                    <i class="bi bi-eye-fill"></i> View
                                    <div class="image-popup">
                                        <img src="image.jpg" alt="Image">
                                    </div>
                                </a>
                                <a href="<?php echo esc_url($product->add_to_cart_url()); ?>" class="btn btn-md btn-primary animated-button">
                                    <i class="bi bi-cart-fill"></i> Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<?php
        }
        echo '</div>';
        wp_reset_postdata();
        return ob_get_clean();
    } else {
        return '<p>No recent products found.</p>';
    }
}
add_shortcode('display_recent_products', 'display_recent_products_shortcode');
