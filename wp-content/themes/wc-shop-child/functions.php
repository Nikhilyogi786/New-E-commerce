<?php
function enqueue_custom_shop_scripts() {
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
}
add_action('wp_enqueue_scripts', 'enqueue_bootstrap_css');

add_theme_support('menus');

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
                                <a href="<?php echo esc_url($product->get_permalink()); ?>" class="btn btn-sm btn-outline-secondary">View</a>
                                <a href="<?php echo esc_url($product->add_to_cart_url()); ?>" class="btn btn-sm btn-primary">Add to Cart</a>
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

// Register Custom Post Type
function register_customer_review_post_type() {
    $labels = array(
        'name'                  => _x( 'Customer Reviews', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Customer Review', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Customer Reviews', 'text_domain' ),
        'archives'              => __( 'Customer Review Archives', 'text_domain' ),
        'attributes'            => __( 'Customer Review Attributes', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Customer Review:', 'text_domain' ),
        'all_items'             => __( 'All Customer Reviews', 'text_domain' ),
        'add_new_item'          => __( 'Add New Customer Review', 'text_domain' ),
        'add_new'               => __( 'Add New', 'text_domain' ),
        'new_item'              => __( 'New Customer Review', 'text_domain' ),
        'edit_item'             => __( 'Edit Customer Review', 'text_domain' ),
        'update_item'           => __( 'Update Customer Review', 'text_domain' ),
        'view_item'             => __( 'View Customer Review', 'text_domain' ),
        'view_items'            => __( 'View Customer Reviews', 'text_domain' ),
        'search_items'          => __( 'Search Customer Reviews', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'featured_image'        => __( 'Featured Image', 'text_domain' ),
        'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
        'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
        'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
        'insert_into_item'      => __( 'Insert into Customer Review', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Customer Review', 'text_domain' ),
        'items_list'            => __( 'Customer Reviews list', 'text_domain' ),
        'items_list_navigation' => __( 'Customer Reviews list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter Customer Reviews list', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'Customer Review', 'text_domain' ),
        'description'           => __( 'Customer Reviews', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-testimonial',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type( 'customer_review', $args );
}
add_action( 'init', 'register_customer_review_post_type', 0 );

// Create Shortcode to Display Customer Reviews
function display_customer_reviews_shortcode() {
    $args = array(
        'post_type'      => 'customer_review',
        'posts_per_page' => -1,
    );

    $reviews = new WP_Query( $args );

    ob_start();
    if ( $reviews->have_posts() ) {
        ?>
        <div id="customer-reviews-slider" class="owl-carousel">
            <?php
            while ( $reviews->have_posts() ) {
                $reviews->the_post();
                $image = get_the_post_thumbnail_url(get_the_ID(), 'full');
                ?>
                <div class="customer-review">
                    <div class="review-inner p-4 rounded shadow">
                    <?php if ($image) : ?>
                            <img src="<?php echo esc_url($image); ?>" alt="<?php the_title_attribute(); ?>" class="img-fluid rounded-circle mb-2">
                        <?php else : ?>
                            <img src="https://via.placeholder.com/150" alt="Placeholder Image" class="img-fluid rounded-circle mb-3">
                        <?php endif; ?>
                        <h3><?php the_title(); ?></h3>
                        <p class="mb-2"><strong>Designation:</strong> <?php echo esc_html( get_post_meta( get_the_ID(), 'Designation', true ) ); ?></p>
                        <p class="mb-2"><strong>Location:</strong> <?php echo esc_html( get_post_meta( get_the_ID(), 'location', true ) ); ?></p>
                        <div class="description">
    <?php echo wp_trim_words(get_the_content(), 200, '<span id="more-' . get_the_ID() . '"> <span id="content-' . get_the_ID() . '">'); ?>
    <!-- <span id="dots-<?php echo get_the_ID(); ?>" style="display: none;">...</span>
    <a href="#" class="read-more" data-postid="<?php echo get_the_ID(); ?>">Read More</a></span> -->
</div>

                    </div>
                </div>
                <?php
            }
            ?>
        </div>
        
        <?php
    } else {
        echo '<p>No customer reviews found.</p>';
    }
    wp_reset_postdata();

    return ob_get_clean();
}
add_shortcode( 'display_customer_reviews', 'display_customer_reviews_shortcode' );



// Create Meta Box for Additional Fields
function customer_review_meta_box() {
    add_meta_box(
        'customer_review_meta_box',
        __( 'Customer Review Details', 'text_domain' ),
        'customer_review_meta_box_callback',
        'customer_review'
    );
}
add_action( 'add_meta_boxes', 'customer_review_meta_box' );

// Meta Box Callback Function
function customer_review_meta_box_callback( $post ) {
    // Add a nonce field so we can check for it later.
    wp_nonce_field( 'customer_review_meta_box', 'customer_review_meta_box_nonce' );

    // Get existing values for fields
    $Designation = get_post_meta( $post->ID, 'Designation', true );
    $location    = get_post_meta( $post->ID, 'location', true );

    // Output fields
    echo '<p><label for="Designation">Designation:</label><br />';
    echo '<input type="text" id="Designation" name="Designation" value="' . esc_attr( $Designation ) . '" size="50" /></p>';

    echo '<p><label for="location">Location:</label><br />';
    echo '<input type="text" id="location" name="location" value="' . esc_attr( $location ) . '" size="50" /></p>';
}

// Save Meta Box Data
function save_customer_review_meta_box_data( $post_id ) {
    // Check if our nonce is set.
    if ( ! isset( $_POST['customer_review_meta_box_nonce'] ) ) {
        return;
    }

    // Verify that the nonce is valid.
    if ( ! wp_verify_nonce( $_POST['customer_review_meta_box_nonce'], 'customer_review_meta_box' ) ) {
        return;
    }

    // If this is an autosave, our form has not been submitted, so we don't want to do anything.
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    // Check the user's permissions.
    if ( isset( $_POST['post_type'] ) && 'customer_review' == $_POST['post_type'] ) {
        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
        }
    }

    // Sanitize user input.
    $Designation = isset( $_POST['Designation'] ) ? sanitize_text_field( $_POST['Designation'] ) : '';
    $location    = isset( $_POST['location'] ) ? sanitize_text_field( $_POST['location'] ) : '';

    // Update the meta field in the database.
    update_post_meta( $post_id, 'Designation', $Designation );
    update_post_meta( $post_id, 'location', $location );
}
add_action( 'save_post', 'save_customer_review_meta_box_data' );
function enqueue_owl_carousel() {
    // Owl Carousel CSS
    wp_enqueue_style( 'owl-carousel-css', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css', array(), '2.3.4' );

    // Owl Carousel JS
    wp_enqueue_script( 'owl-carousel-js', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', array( 'jquery' ), '2.3.4', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_owl_carousel' );


function register_custom_post_type_blog() {
    $labels = array(
        'name'               => _x( 'Blog', 'post type general name', 'textdomain' ),
        'singular_name'      => _x( 'Blog Post', 'post type singular name', 'textdomain' ),
        'menu_name'          => _x( 'Blog', 'admin menu', 'textdomain' ),
        'name_admin_bar'     => _x( 'Blog Post', 'add new on admin bar', 'textdomain' ),
        'add_new'            => _x( 'Add New', 'blog', 'textdomain' ),
        'add_new_item'       => __( 'Add New Blog Post', 'textdomain' ),
        'new_item'           => __( 'New Blog Post', 'textdomain' ),
        'edit_item'          => __( 'Edit Blog Post', 'textdomain' ),
        'view_item'          => __( 'View Blog Post', 'textdomain' ),
        'all_items'          => __( 'All Blog Posts', 'textdomain' ),
        'search_items'       => __( 'Search Blog Posts', 'textdomain' ),
        'parent_item_colon'  => __( 'Parent Blog Posts:', 'textdomain' ),
        'not_found'          => __( 'No blog posts found.', 'textdomain' ),
        'not_found_in_trash' => __( 'No blog posts found in Trash.', 'textdomain' )
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __( 'Description.', 'textdomain' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'blog' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
        'menu_icon'          => 'dashicons-welcome-write-blog'
    );

    register_post_type( 'blog', $args );
}
add_action( 'init', 'register_custom_post_type_blog' );

function display_blog_posts_shortcode() {
    $args = array(
        'post_type'      => 'blog',
        'posts_per_page' => 3, // Change this number as needed
    );

    $blog_posts = new WP_Query( $args );

    ob_start();
    if ( $blog_posts->have_posts() ) {
        ?>
        <style>
           
        </style>
        <div class="row">
            <?php while ( $blog_posts->have_posts() ) : $blog_posts->the_post(); ?>
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title"><?php the_title(); ?></h5>
                            <img class="card-img-top" src="<?php the_post_thumbnail_url( 'large' ); ?>" alt="<?php the_title_attribute(); ?>">
                            <p class="card-text"><?php the_excerpt(); ?></p>
                            <a href="<?php the_permalink(); ?>" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
        <?php
    } else {
        echo '<p>No blog posts found.</p>';
    }
    wp_reset_postdata();

    return ob_get_clean();
}
add_shortcode( 'display_blog_posts', 'display_blog_posts_shortcode' );


add_action( 'admin_menu', 'add_customizer_link_to_menu' );

function add_customizer_link_to_menu() {
    // Replace 'your_theme_slug' with your actual theme's slug
    $theme = wp_get_theme();
    if ( 'wc-shop' === $theme->get_template() ) {
        add_theme_page( 'Customize', 'Customize', 'edit_theme_options', 'customize.php' );
    }
}

function custom_register_woocommerce_sidebar() {
    register_sidebar(array(
        'name' => __('WooCommerce Sidebar', 'wc-shop'),
        'id' => 'woocommerce-sidebar',
        'description' => __('Widgets in this area will be shown on WooCommerce shop pages.', 'wc-shop'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
}
add_action('widgets_init', 'custom_register_woocommerce_sidebar');

function filter_products() {
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => -1
    );

    if (isset($_GET['s'])) {
        $args['s'] = sanitize_text_field($_GET['s']);
    }

    if (isset($_GET['product_cat']) && !empty($_GET['product_cat'])) {
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'product_cat',
                'field' => 'slug',
                'terms' => sanitize_text_field($_GET['product_cat'])
            )
        );
    }

    if (isset($_GET['min_price']) && isset($_GET['max_price'])) {
        $args['meta_query'] = array(
            'relation' => 'AND',
            array(
                'key' => '_price',
                'value' => (int)$_GET['min_price'],
                'compare' => '>=',
                'type' => 'NUMERIC'
            ),
            array(
                'key' => '_price',
                'value' => (int)$_GET['max_price'],
                'compare' => '<=',
                'type' => 'NUMERIC'
            )
        );
    }

    $products = new WP_Query($args);

    if ($products->have_posts()) {
        while ($products->have_posts()) {
            $products->the_post();
            global $product;
            ?>
            <div class="col-md-4">
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
            </div>
            <?php
        }
        wp_reset_postdata();
    } else {
        echo '<p class="col-12">No products found.</p>';
    }

    wp_die();
}
add_action('wp_ajax_filter_products', 'filter_products');
add_action('wp_ajax_nopriv_filter_products', 'filter_products');
