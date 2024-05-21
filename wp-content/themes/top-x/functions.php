<?php
/**********************/
// child style enqueue
/**********************/
function top_x_styles(){
    $themeVersion = wp_get_theme()->get('Version');
    // Enqueue our style.css with our own version
    wp_enqueue_style('top-x-styles', get_template_directory_uri() . '/style.css',array(), $themeVersion);
    wp_add_inline_style('top-x-styles', top_x_custom_styles());
}
add_action('wp_enqueue_scripts', 'top_x_styles', 100);
function top_x_admin_script() {
	wp_enqueue_style('top-x-admin-css', get_theme_file_uri() . '/admin.css', array(), '1.0.0', 'all');

}
add_action( 'admin_enqueue_scripts', 'top_x_admin_script' );

function top_x_setup(){

    add_theme_support( 'title-tag' );
    add_theme_support( 'automatic-feed-links' );

require_once get_stylesheet_directory() . '/inc/header-function.php';
require_once get_stylesheet_directory() . '/inc/admin-function.php';

define('TOP_X_LAYOUT', get_theme_file_uri(). "/images/top-x-main-header2.png");

}
add_action( 'after_setup_theme', 'top_x_setup' );

/**********************/
//customize setting
/**********************/

function top_x_setting( $wp_customize ){

// theme color
 $wp_customize->add_setting('top_store_theme_clr', array(
        'default'        => '#294722',
        'capability'     => 'edit_theme_options',
        'sanitize_callback' => 'top_store_sanitize_color',
        'transport'         => 'postMessage',
    ));
$wp_customize->add_control( 
    new WP_Customize_Color_Control($wp_customize,'top_store_theme_clr', array(
        'label'      => __('Theme Color', 'top-x' ),
        'section'    => 'top-store-gloabal-color',
        'settings'   => 'top_store_theme_clr',
        'priority' => 1,
    ) ) 
 );    
//main header color
$wp_customize->add_setting('top_store_main_hdr_bg_clr', array(
        'default'           => '#294722',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'top_store_sanitize_color',
        'transport'         => 'postMessage',
    ));
$wp_customize->add_control( 
    new Top_Store_Customizer_Color_Control($wp_customize,'top_store_main_hdr_bg_clr', array(
        'label'      => __('Background Color', 'top-x' ),
        'section'    => 'top-store-main-header-clr',
        'settings'   => 'top_store_main_hdr_bg_clr',
        'priority'   => 1,
    ) ) 
 ); 
// choose col layout
if(class_exists('Top_Store_WP_Customize_Control_Radio_Image')){
        $wp_customize->add_setting(
            'top_store_main_header_layout', array(
                'default'           => 'mhdrfive',
                'sanitize_callback' => 'top_store_sanitize_radio',
            )
        );
$wp_customize->add_control(
            new Top_Store_WP_Customize_Control_Radio_Image(
                $wp_customize, 'top_store_main_header_layout', array(
                    'label'    => esc_html__( 'Header Layout', 'top-x' ),
                    'section'  => 'top-store-main-header',
                    'priority'   => 1,
                    'choices'  => array(
                        'mhdrfour' => array(
                            'url' => TOP_STORE_MAIN_HEADER_LAYOUT_ONE,
                        ),
                        'mhdrfive' => array(
                            'url' => TOP_X_LAYOUT,
                        ),
                        'mhdrsix' => array(
                            'url' => TOP_STORE_MAIN_HEADER_LAYOUT_THREE,
                        ),
                        'mhdrseven' => array(
                            'url' => TOP_STORE_MAIN_HEADER_LAYOUT_FOUR,
                        ),
                                     
                    ),
                )
            )
        );
} 
$wp_customize->add_setting('top_store_menu_alignment', array(
                'default'               => 'center',
                'sanitize_callback'     => 'top_store_sanitize_select',
            ) );
$wp_customize->add_control( new top_store_Customizer_Buttonset_Control( $wp_customize, 'top_store_menu_alignment', array(
                'label'                 => esc_html__( 'Menu Alignment', 'top-x' ),
                'section'               => 'top-store-main-header',
                'settings'              => 'top_store_menu_alignment',
                'choices'               => array(
                    'left'              => esc_html__( 'Left', 'top-x' ),
                    'center'            => esc_html__( 'center', 'top-x' ),
                    'right'             => esc_html__( 'Right', 'top-x' ),
                ),
        ) ) );


$wp_customize->add_setting('top_store_sidebar_front_option', array(
        'default'        => 'disable-right-sidebar',
        'capability'     => 'edit_theme_options',
        'sanitize_callback' => 'top_store_sanitize_select',
    ));
$wp_customize->add_control( 'top_store_sidebar_front_option', array(
        'settings' => 'top_store_sidebar_front_option',
        'label'    => __('Front Page','top-x'),
        'section'  => 'top-store-section-sidebar-group',
        'type'     => 'select',
        'choices'    => array(
        'active-sidebar' => __('Active Both Sidebar','top-x'),
        'disable-left-sidebar'  => __('Disable Left Sidebar','top-x'),
        'disable-right-sidebar' => __('Disable Right Sidebar','top-x'),
        ),
    ));
$wp_customize->add_setting('top_store_sidebar_ineternal_option', array(
        'default'        => 'disable-right-sidebar',
        'capability'     => 'edit_theme_options',
        'sanitize_callback' => 'top_store_sanitize_select',
    ));
$wp_customize->add_control( 'top_store_sidebar_ineternal_option', array(
        'settings' => 'top_store_sidebar_ineternal_option',
        'label'    => __('Internal Pages','top-x'),
        'section'  => 'top-store-section-sidebar-group',
        'type'     => 'select',
        'choices'    => array(
        'active-sidebar' => __('Active Both Sidebar','top-x'),
        'no-sidebar' => __('No Sidebar','top-x'),
        'disable-left-sidebar'  => __('Disable Left Sidebar','top-x'),
        'disable-right-sidebar' => __('Disable Right Sidebar','top-x'),
        ),
    ));
}

add_action( 'customize_register', 'top_x_setting', 100 );



/***************************/
//custom style
/***************************/
function top_x_custom_styles(){
        $top_x_custom_style=""; 
        $top_x_theme_clr = esc_html(get_theme_mod('top_store_theme_clr','#294722'));  
        $top_store_color_scheme = esc_html(get_theme_mod('top_store_color_scheme','opn-light'));
        $top_x_custom_style.="a:hover, .top-store-menu li a:hover, .top-store-menu .current-menu-item a,.sticky-header-col2 .top-store-menu li a:hover,.woocommerce .thunk-woo-product-list .price,.thunk-product-hover .th-button.add_to_cart_button, .woocommerce ul.products .thunk-product-hover .add_to_cart_button,.woocommerce ul.products li.product .product_type_variable, .woocommerce ul.products li.product a.button.product_type_grouped,.thunk-compare .compare-button a:hover, .thunk-product-hover .th-button.add_to_cart_button:hover, .woocommerce ul.products .thunk-product-hover .add_to_cart_button :hover, .woocommerce .thunk-product-hover a.th-button:hover,.thunk-product .yith-wcwl-wishlistexistsbrowse.show:before, .thunk-product .yith-wcwl-wishlistaddedbrowse.show:before,.woocommerce ul.products li.product.thunk-woo-product-list .price,.summary .yith-wcwl-add-to-wishlist.show .add_to_wishlist::before, .summary .yith-wcwl-add-to-wishlist .yith-wcwl-wishlistaddedbrowse.show a::before, .summary .yith-wcwl-add-to-wishlist .yith-wcwl-wishlistexistsbrowse.show a::before,.woocommerce .entry-summary a.compare.button.added:before,.header-icon a:hover,.thunk-related-links .nav-links a:hover,.woocommerce .thunk-list-view ul.products li.product.thunk-woo-product-list .price,.woocommerce .woocommerce-error .button, .woocommerce .woocommerce-info .button, .woocommerce .woocommerce-message .button,.thunk-wishlist a:hover, .thunk-compare a:hover,.thunk-quik a:hover,.woocommerce ul.cart_list li .woocommerce-Price-amount, .woocommerce ul.product_list_widget li .woocommerce-Price-amount,.top-store-load-more button,.page-contact .leadform-show-form label,.thunk-contact-col .fa,
  .woocommerce .thunk-product-hover a.th-button:hover:after,ul.products .thunk-product-hover .add_to_cart_button:hover, 
.woocommerce .thunk-product-hover a.th-button:hover, 
.woocommerce ul.products li.product .product_type_variable:hover, 
.woocommerce ul.products li.product a.button.product_type_grouped:hover, 
.woocommerce .thunk-product-hover a.th-button:hover, 
.woocommerce ul.products li.product .add_to_cart_button:hover, 
.woocommerce .added_to_cart.wc-forward:hover,
ul.products .thunk-product-hover .add_to_cart_button:hover:after, 
.woocommerce .thunk-product-hover a.th-button:hover:after, 
.woocommerce ul.products li.product .product_type_variable:hover:after, 
.woocommerce ul.products li.product a.button.product_type_grouped:hover:after, 
.woocommerce .thunk-product-hover a.th-button:hover:after, 
.woocommerce ul.products li.product .add_to_cart_button:hover:after, 
.woocommerce .added_to_cart.wc-forward:hover:after,.summary .yith-wcwl-add-to-wishlist .add_to_wishlist:hover:before, .summary .yith-wcwl-add-to-wishlist .yith-wcwl-wishlistaddedbrowse a::before, .summary .yith-wcwl-add-to-wishlist .yith-wcwl-wishlistexistsbrowse a::before,.th-hlight-icon,.ribbon-btn:hover,.thunk-product .yith-wcwl-wishlistexistsbrowse:before,.woocommerce .entry-summary a.compare.button:hover:before,.th-slide-button,.th-slide-button:after,.sider.overcenter .sider-inner ul.top-store-menu li a:hover,.reply a,.single-product .product_meta a,.woosw-btn:hover:before,.woosw-added:before,.wooscp-btn:hover:before,#top-store-mobile-bar .count-item, a.th-product-compare-btn.button.btn_type.th-added-compare:before{color:{$top_x_theme_clr}} 
    
    .thunk-icon-market .cart-icon .taiowc-icon:hover{fill:{$top_x_theme_clr};}
   .thunk-icon-market .cart-icon .taiowc-cart-item:hover{color:{$top_x_theme_clr};}
 ";

if($top_store_color_scheme=='opn-dark'){
$top_x_custom_style.="body.top-store-dark a:hover, body.top-store-dark .top-store-menu > li > a:hover, body.top-store-dark .top-store-menu li ul.sub-menu li a:hover,body.top-store-dark .thunk-product-cat-list li a:hover,body.top-store-dark #sidebar-primary .top-store-widget-content a:hover,.top-store-dark .thunk-woo-product-list .woocommerce-loop-product__title a:hover,body.top-store-dark .ribbon-btn:hover,body.top-store-dark .main-header-bar .header-icon a:hover{color:{$top_x_theme_clr}}
body.top-store-dark .ribbon-btn:hover,body.top-store-dark .header-support-content a:hover,body.top-store-dark .thunk-wishlist a:hover,body.top-store-dark .thunk-compare a:hover,body.top-store-dark .thunk-quik a:hover,body.top-store-dark .th-slide-button,body.top-store-dark .th-slide-button:after{color:{$top_x_theme_clr}!important}";
}
  $top_x_custom_style.=".toggle-cat-wrap,#search-button,.thunk-icon .cart-icon,.single_add_to_cart_button.button.alt, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .woocommerce #respond input#submit, .woocommerce button.button, .woocommerce input.button,.cat-list a:after,.tagcloud a:hover, .thunk-tags-wrapper a:hover,.btn-main-header,.page-contact .leadform-show-form input[type='submit'],.woocommerce .widget_price_filter .top-store-widget-content .ui-slider .ui-slider-range,
.woocommerce .widget_price_filter .top-store-widget-content .ui-slider .ui-slider-handle,.entry-content form.post-password-form input[type='submit'],#top-store-mobile-bar a,
.header-support-icon,
.count-item,.nav-links .page-numbers.current, .nav-links .page-numbers:hover,.woocommerce .thunk-woo-product-list span.onsale,.top-store-site section.thunk-ribbon-section .content-wrap:before,.woocommerce .return-to-shop a.button,.widget_product_search [type='submit']:hover,.comment-form .form-submit [type='submit'],.top-store-slide-post .owl-nav button.owl-prev:hover, .top-store-slide-post .owl-nav button.owl-next:hover,body.top-store-dark .top-store-slide-post .owl-nav button.owl-prev:hover, body.top-store-dark .top-store-slide-post .owl-nav button.owl-next:hover{background:{$top_x_theme_clr}}
  .open-cart p.buttons a:hover,
  .woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce #respond input#submit:hover, .woocommerce button.button:hover, .woocommerce input.button:hover,.thunk-slide .owl-nav button.owl-prev:hover, .thunk-slide .owl-nav button.owl-next:hover,.thunk-list-grid-switcher a.selected, .thunk-list-grid-switcher a:hover,.woocommerce .woocommerce-error .button:hover, .woocommerce .woocommerce-info .button:hover, .woocommerce .woocommerce-message .button:hover,#searchform [type='submit']:hover,article.thunk-post-article .thunk-readmore.button,.top-store-load-more button:hover,.woocommerce nav.woocommerce-pagination ul li a:focus, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li span.current,.thunk-top2-slide.owl-carousel .owl-nav button:hover,.product-slide-widget .owl-carousel .owl-nav button:hover, .thunk-slide.thunk-brand .owl-nav button:hover,.th-testimonial .owl-carousel .owl-nav button.owl-prev:hover,.th-testimonial .owl-carousel .owl-nav button.owl-next:hover,body.top-store-dark .thunk-slide .owl-nav button.owl-prev:hover,body.top-store-dark .thunk-slide .owl-nav button.owl-next:hover{background-color:{$top_x_theme_clr};} 
  .thunk-product-hover .th-button.add_to_cart_button, .woocommerce ul.products .thunk-product-hover .add_to_cart_button,.woocommerce ul.products li.product .product_type_variable, .woocommerce ul.products li.product a.button.product_type_grouped,.open-cart p.buttons a:hover,.top-store-slide-post .owl-nav button.owl-prev:hover, .top-store-slide-post .owl-nav button.owl-next:hover,body .woocommerce-tabs .tabs li a::before,.thunk-list-grid-switcher a.selected, .thunk-list-grid-switcher a:hover,.woocommerce .woocommerce-error .button, .woocommerce .woocommerce-info .button, .woocommerce .woocommerce-message .button,#searchform [type='submit']:hover,.top-store-load-more button,.thunk-top2-slide.owl-carousel .owl-nav button:hover,.product-slide-widget .owl-carousel .owl-nav button:hover, .thunk-slide.thunk-brand .owl-nav button:hover,.page-contact .leadform-show-form input[type='submit'],.widget_product_search [type='submit']:hover,.thunk-slide .owl-nav button.owl-prev:hover, .thunk-slide .owl-nav button.owl-next:hover,body.top-store-dark .thunk-slide.owl-carousel .owl-nav button.owl-prev:hover, body.top-store-dark .thunk-slide.owl-carousel .owl-nav button.owl-next:hover,body.top-store-dark .top-store-slide-post .owl-nav button.owl-prev:hover, body.top-store-dark .top-store-slide-post .owl-nav button.owl-next:hover,.th-testimonial .owl-carousel .owl-nav button.owl-prev:hover,.th-testimonial .owl-carousel .owl-nav button.owl-next:hover{border-color:{$top_x_theme_clr}} .loader {
    border-right: 4px solid {$top_x_theme_clr};
    border-bottom: 4px solid {$top_x_theme_clr};
    border-left: 4px solid {$top_x_theme_clr};}
    .site-title span a:hover,.main-header-bar .header-icon a:hover,.woocommerce div.product p.price, .woocommerce div.product span.price,body.top-store-dark .top-store-menu .current-menu-item a,body.top-store-dark .sider.overcenter .sider-inner ul.top-store-menu li a:hover{color:{$top_x_theme_clr}}";

   $top_store_main_hdr_bg_clr  = esc_html(get_theme_mod('top_store_main_hdr_bg_clr','#294722'));
   $top_x_custom_style.= ".main-header:before,body.top-store-dark .main-header:before{
   background:{$top_store_main_hdr_bg_clr};}";

   $top_store_main_hdr_txt_clr  = esc_html(get_theme_mod('top_store_main_hdr_txt_clr','#fff'));
   $top_x_custom_style.= ".mhdrfive .top-store-menu > li > a{color:{$top_store_main_hdr_txt_clr};} .mhdrfive .top-store-menu > li > a:hover{color:{$top_store_main_hdr_txt_clr}!important;}";

        return $top_x_custom_style;
}

function top_x_customizer_script_registers(){
wp_enqueue_script( 'top-x-custom-customizer-script', get_theme_file_uri() . '/customizer/js/customizer.js', array("jquery"), '', true  ); 
}
add_action('customize_controls_enqueue_scripts', 'top_x_customizer_script_registers',100 );