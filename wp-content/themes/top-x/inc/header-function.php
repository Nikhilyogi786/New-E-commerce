<?php
/**
* Header Function for Top X theme.
*
* @package ThemeHunk
* @subpackage Top X
* @since 1.0.0
*/
/**************************************/
//Top Header function
/**************************************/
  if ( ! function_exists( 'top_store_top_header_markup' ) ){
function top_store_top_header_markup(){
$top_store_above_header_layout     = get_theme_mod( 'top_store_above_header_layout','abv-none');
$top_store_above_header_col1_set   = get_theme_mod( 'top_store_above_header_col1_set','text');
$top_store_above_header_col2_set   = get_theme_mod( 'top_store_above_header_col2_set','text');
$top_store_above_header_col3_set   = get_theme_mod( 'top_store_above_header_col3_set','text');
$top_store_menu_open = get_theme_mod('top_store_mobile_menu_open','overcenter');
if($top_store_above_header_layout!=='abv-none'):?>
<div class="top-header">
  <div class="container">
    <?php if($top_store_above_header_layout=='abv-three'){?>
    <div class="top-header-bar thnk-col-3">
      <div class="top-header-col1">
        <?php top_store_top_header_conetnt_col1($top_store_above_header_col1_set,$top_store_menu_open); ?>
      </div>
      <div class="top-header-col2">
        <?php top_store_top_header_conetnt_col2($top_store_above_header_col2_set,$top_store_menu_open); ?>
      </div>
      <div class="top-header-col3">
        <?php top_store_top_header_conetnt_col3($top_store_above_header_col3_set,$top_store_menu_open); ?>
      </div>
    </div>
    <?php } ?>
    <?php if($top_store_above_header_layout=='abv-two'){?>
    <div class="top-header-bar thnk-col-2">
      <div class="top-header-col1">
        <?php top_store_top_header_conetnt_col1($top_store_above_header_col1_set,$top_store_menu_open); ?>
      </div>
      <div class="top-header-col2">
        <?php top_store_top_header_conetnt_col2($top_store_above_header_col2_set,$top_store_menu_open); ?>
      </div>
    </div>
    <?php } ?>
    <?php if($top_store_above_header_layout=='abv-one'){
    ?>
    <div class="top-header-bar thnk-col-1">
      <div class="top-header-col1">
        <?php top_store_top_header_conetnt_col1($top_store_above_header_col1_set,$top_store_menu_open); ?>
      </div>
    </div>
    <?php } ?>
    <!-- end top-header-bar -->
  </div>
</div>
<?php endif;
}
}
add_action( 'top_store_top_header', 'top_store_top_header_markup' );
//************************************/
// top header col1 function
//************************************/
if ( ! function_exists( 'top_store_top_header_conetnt_col1' ) ){
function top_store_top_header_conetnt_col1($content,$mobileopen){ ?>
<?php if($content=='text'){?>
<div class='content-html'>
  <?php echo esc_html(get_theme_mod('top_store_col1_texthtml',  __( 'Add your content here', 'top-x' )));?>
</div>
<?php }elseif($content=='menu'){
if ( has_nav_menu('top-store-above-menu' ) ){?>
<!-- Menu Toggle btn-->
<nav>
  <div class="menu-toggle">
    <button type="button" class="menu-btn" id="menu-btn-abv">
    <div class="btn">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    </button>
  </div>
  <div class="sider above top-store-menu-hide  <?php echo esc_attr($mobileopen);?>">
    <div class="sider-inner">
      <?php top_store_abv_nav_menu();?>
    </div>
  </div>
</nav>
<?php
}else{?>
<a href="<?php echo esc_url( admin_url( 'nav-menus.php' ) ); ?>"><?php esc_html_e( 'Assign Above header menu', 'top-x' );?></a>
<?php }
}elseif($content=='widget'){?>
<div class="content-widget">
  <?php if( is_active_sidebar('top-header-widget-col1' ) ){
  dynamic_sidebar('top-header-widget-col1' );
  }else{?>
  <a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>"><?php esc_html_e( 'Add Widget', 'top-x' );?></a>
  <?php }?>
</div>
<?php }elseif($content=='social'){?>
<div class="content-social">
  <?php echo top_store_social_links();?>
</div>
<?php }elseif($content=='none'){
return true;
}?>
<?php }
}
//************************************/
// top header col2 function
//************************************/
if ( ! function_exists( 'top_store_top_header_conetnt_col2' ) ){
function top_store_top_header_conetnt_col2($content,$mobileopen){ ?>
<?php if($content=='text'){?>
<div class='content-html'>
  <?php echo esc_html(get_theme_mod('top_store_col2_texthtml',  __( 'Add your content here', 'top-x' )));?>
</div>
<?php }elseif($content=='menu'){
if ( has_nav_menu('top-store-above-menu' ) ){?>
<!-- Menu Toggle btn-->
<nav>
  <div class="menu-toggle">
    <button type="button" class="menu-btn" id="menu-btn-abv">
    <div class="btn">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    </button>
  </div>
  <div class="sider above top-store-menu-hide <?php echo esc_attr($mobileopen);?>">
    <div class="sider-inner">
      <?php top_store_abv_nav_menu();?>
    </div>
  </div>
</nav>
<?php
}else{?>
<a href="<?php echo esc_url( admin_url( 'nav-menus.php' ) ); ?>"><?php esc_html_e( 'Assign Above header menu', 'top-x' );?></a>
<?php }
}
elseif($content=='widget'){?>
<div class="content-widget">
  <?php if( is_active_sidebar('top-header-widget-col2' ) ){
  dynamic_sidebar('top-header-widget-col2' );
  }else{?>
  <a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>"><?php esc_html_e( 'Add Widget', 'top-x' );?></a>
  <?php }?>
</div>
<?php }elseif($content=='social'){?>
<div class="content-social">
  <?php echo top_store_social_links();?>
</div>
<?php }elseif($content=='none'){
return true;
}?>
<?php }
}
//************************************/
// top header col3 function
//************************************/
if ( ! function_exists( 'top_store_top_header_conetnt_col3' ) ){
function top_store_top_header_conetnt_col3($content,$mobileopen){ ?>
<?php if($content=='text'){?>
<div class='content-html'>
  <?php echo esc_html(get_theme_mod('top_store_col3_texthtml',  __( 'Add your content here', 'top-x' )));?>
</div>
<?php }elseif($content=='menu'){
if ( has_nav_menu('top-store-above-menu' ) ){?>
<!-- Menu Toggle btn-->
<nav>
  <div class="menu-toggle">
    <button type="button" class="menu-btn" id="menu-btn-abv">
    <div class="btn">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    </button>
  </div>
  <div class="sider above top-store-menu-hide <?php echo esc_attr($mobileopen);?>">
    <div class="sider-inner">
      <?php top_store_abv_nav_menu();?>
    </div>
  </div>
</nav>
<?php
}else{?>
<a href="<?php echo esc_url( admin_url( 'nav-menus.php' ) ); ?>"><?php esc_html_e( 'Assign Above header menu', 'top-x' );?></a>
<?php }
}
elseif($content=='widget'){?>
<div class="content-widget">
  <?php if( is_active_sidebar('top-header-widget-col2' ) ){
  dynamic_sidebar('top-header-widget-col2' );
  }else{?>
  <a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>"><?php esc_html_e( 'Add Widget', 'top-x' );?></a>
  <?php }?>
</div>
<?php }elseif($content=='social'){?>
<div class="content-social">
  <?php echo top_store_social_links();?>
</div>
<?php }elseif($content=='none'){
return true;
}?>
<?php }
}
/**************************************/
//Below Header function
/**************************************/
  if ( ! function_exists( 'top_store_below_header_markup' ) ){
function top_store_below_header_markup(){
$main_header_layout = get_theme_mod('top_store_main_header_layout','mhdrfive');
$main_header_opt = get_theme_mod('top_store_main_header_option','callto');
$top_store_menu_alignment = get_theme_mod('top_store_menu_alignment','center');
$top_store_menu_open = get_theme_mod('top_store_mobile_menu_open','overcenter');
?>
<div class="below-header  <?php echo esc_attr($main_header_layout);?> <?php echo esc_attr($top_store_menu_alignment);?> <?php echo esc_attr($main_header_opt);?>">
  <div class="container">
    <div class="below-header-bar thnk-col-3">
      <?php if ($main_header_layout == 'mhdrfour') {?>
      <div class="below-header-col1">
        <?php if ( class_exists( 'WooCommerce' ) ){ ?>
        <div class="menu-category-list">
          <div class="toggle-cat-wrap">
            <p class="cat-toggle" tabindex="0">
              <span class="cat-icon">
                <span class="cat-top"></span>
                <span class="cat-top"></span>
                <span class="cat-bot"></span>
              </span>
              <span class="toggle-title"><?php _e('Category','top-x'); ?></span>
              <span class="toggle-icon"></span>
            </p>
          </div>
          <?php top_store_product_list_categories(); ?>
          </div><!-- menu-category-list -->
          <?php } ?>
          <nav>
            <!-- Menu Toggle btn-->
            <div class="menu-toggle">
              <button type="button" class="menu-btn" id="menu-btn">
              <div class="btn">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </div>
              <span class="icon-text"><?php _e('Menu','top-x'); ?></span>
              </button>
            </div>
            <div class="sider main  top-store-menu-hide <?php echo esc_attr($top_store_menu_open);?>">
              <div class="sider-inner">
                <?php if(has_nav_menu('top-store-main-menu' )){
                if (strpos($_SERVER['HTTP_USER_AGENT'], 'iPad')!== false || wp_is_mobile()!== false){
                if(has_nav_menu('top-store-above-menu' )){
                top_store_abv_nav_menu();
                }
                }
                top_store_main_nav_menu();
                }else{
                wp_page_menu(array(
              'items_wrap'  => '<ul class="top-store-menu" data-menu-style="horizontal">%3$s</ul>',
              'link_before' => '<span>',
              'link_after'  => '</span>'));
              }?>
            </div>
          </div>
        </nav>
      </div>
      <?php if($main_header_opt!=='none'):?>
      <div class="below-header-col2">
        <?php
        top_store_main_header_optn();?>
      </div>
      <?php endif; }?>
    </div>
    </div> <!-- end below-header -->
    <?php }
    }
    add_action( 'top_store_below_header', 'top_store_below_header_markup' );
    /**************************************/
    //Main Header function
    /**************************************/
    if ( ! function_exists( 'top_store_main_header_markup' ) ){
    function top_store_main_header_markup(){
    $main_header_layout = get_theme_mod('top_store_main_header_layout','mhdrfive');
    $main_header_opt = get_theme_mod('top_store_main_header_option','callto');
    $top_store_menu_alignment = get_theme_mod('top_store_menu_alignment','center');
    $offcanvas = get_theme_mod('top_store_canvas_alignment','cnv-none');
    $top_store_menu_open = get_theme_mod('top_store_mobile_menu_open','overcenter');
    ?>
    <div class="main-header <?php echo esc_attr($main_header_layout);?> <?php echo esc_attr($main_header_opt);?> <?php echo esc_attr($top_store_menu_alignment);?>  <?php echo esc_attr($offcanvas);?>">
      <?php if ($main_header_layout == 'mhdrfive') { ?>
      <div class="th-search-wrapper">
        <div class="th-search-inner">
          <div class="container">
              <?php 

                top_store_th_advance_product_search();

              ?>
              <button class="th-search-close">&#10005;</button>
          </div>
      </div>
      </div>
     <?php } ?>
      <div class="container">
        <div class="main-header-bar thnk-col-3">
          <?php if ($main_header_layout == 'mhdrfour') { ?>
          <div class="main-header-col1">
            <span class="logo-content">
              <?php top_store_logo();?>
            </span>
            
          </div>
          <div class="main-header-col2">
             <?php  
                top_store_th_advance_product_search();
               ?>
          </div>
          <div class="main-header-col3">
            <div class="thunk-icon-market">
              <?php if ( class_exists( 'WooCommerce' ) ){ top_store_header_icon();}?>
              <?php if(class_exists( 'WooCommerce' )){
              if(get_theme_mod('top_store_cart_mobile_disable')==true){
              if (wp_is_mobile()!== true):
              
              ?>
              <div class="cart-icon" >

                  <?php if ( shortcode_exists( 'taiowc' ) ){
             echo do_shortcode('[taiowc]');
       } ?> 

                
              </div>
              <?php  endif; }
              elseif(get_theme_mod('top_store_cart_mobile_disable')==false){?>
              <div class="cart-icon" >

                 <?php if ( shortcode_exists( 'taiowc' ) ){
             echo do_shortcode('[taiowc]');
       } ?> 
                

              </div>
              <?php  } } ?>
            </div>
          </div>
          <?php  } elseif ($main_header_layout == 'mhdrfive'){?>
           <div class="main-header-col1">
            <span class="logo-content">
            <?php top_store_logo();?> 
          </span>
          
          </div>

           <div class="main-header-col2">
              <nav>
        <!-- Menu Toggle btn-->
        <div class="menu-toggle">
            <button type="button" class="menu-btn" id="menu-btn">
                <div class="btn">
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
               </div>
                <span class="icon-text"><?php esc_html_e('Menu','top-x'); ?></span>
            </button>
        </div>
        <div class="sider main  top-store-menu-hide <?php echo esc_attr($top_store_menu_open);?>">
        <div class="sider-inner">
          <?php if(has_nav_menu('top-store-main-menu' )){ 

             if (strpos($_SERVER['HTTP_USER_AGENT'], 'iPad')!== false 
                              || strpos($_SERVER['HTTP_USER_AGENT'], 'Android') !== false
                              || strpos($_SERVER['HTTP_USER_AGENT'], 'Silk/') !== false
                              || strpos($_SERVER['HTTP_USER_AGENT'], 'Kindle') !== false
                              || strpos($_SERVER['HTTP_USER_AGENT'], 'BlackBerry') !== false
                              || strpos($_SERVER['HTTP_USER_AGENT'], 'Opera Mini') !== false){
                   if(has_nav_menu('top-store-above-menu' )){
                                top_store_abv_nav_menu();
                       }
                  }  
                    top_store_main_nav_menu();
              }else{
                 wp_page_menu(array( 
                 'items_wrap'  => '<ul class="top-store-menu" data-menu-style="horizontal">%3$s</ul>',
                 'link_before' => '<span>',
                 'link_after'  => '</span>'));
             }?>
        </div>
        </div>
        </nav>
          </div>

           <div class="main-header-col3">
            <div class="thunk-icon-market">
            <?php top_store_header_icon_second(); ?> 
            <div class="cart-icon">
         <?php if(class_exists( 'WooCommerce' )){ 

        if (strpos($_SERVER['HTTP_USER_AGENT'], 'Android') == true 
        || strpos($_SERVER['HTTP_USER_AGENT'], 'BlackBerry') == true 
        || strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') == true){
           if(get_theme_mod('top_store_cart_mobile_disable') == false){ ?>
                      <div class="cart-icon" > 
                        <?php if ( shortcode_exists( 'taiowc' ) ){
                        echo do_shortcode('[taiowc]');
                      }
                        ?>
                         
                       </div>
                      <?php  } }
                      else{?>
                           <div class="cart-icon" >
                           <?php if ( shortcode_exists( 'taiowc' ) ){
                        echo do_shortcode('[taiowc]');
                      }
                        ?> 
                            
                          </div>
                     <?php  } } ?>
       </div>
          </div>
        
        </div>
          <?php } ?>
          </div> <!-- end main-header-bar -->
        </div>
      </div>
      <?php }
      }
      add_action( 'top_store_main_header', 'top_store_main_header_markup' );


      function top_store_main_header_optn(){
      $top_store_main_header_option = get_theme_mod('top_store_main_header_option','callto');
      if($top_store_main_header_option =='button'){?>
      <a href="<?php echo esc_url(get_theme_mod('top_store_main_hdr_btn_lnk','#')); ?>" class="btn-main-header"><?php echo esc_html(get_theme_mod('top_store_main_hdr_btn_txt', __('Button Text','top-x'))); ?></a>
      <?php }
      elseif($top_store_main_header_option =='callto'){
      if(get_theme_mod('top_store_main_hdr_calto_nub','')!==''){?>
      <div class="header-support-wrap">
        <div class="header-support-icon">
          <a class="callto-icon" href="tel:<?php echo esc_html(get_theme_mod('top_store_main_hdr_calto_nub')); ?>">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </a>
        </div>
        <div class="header-support-content">
          <span class="sprt-tel"><span><?php echo esc_html(get_theme_mod('top_store_main_hdr_calto_txt','Call To')); ?></span> <a href="tel:<?php echo esc_html(get_theme_mod('top_store_main_hdr_calto_nub')); ?>"><?php echo esc_html(get_theme_mod('top_store_main_hdr_calto_nub')); ?></a></span>
        </div>
      </div>
      <?php }
      }elseif($top_store_main_header_option =='widget'){?>
      <div class="header-widget-wrap">
        <?php
        if ( is_active_sidebar('main-header-widget') ){
        dynamic_sidebar('main-header-widget');
        }
        ?>
      </div>
      <?php  }
      }
      /**************************************/
      //logo & site title function
      /**************************************/
      if ( ! function_exists( 'top_store_logo' ) ){
      function top_store_logo(){
      $title_disable          = get_theme_mod( 'title_disable','enable');
      $tagline_disable        = get_theme_mod( 'tagline_disable','enable');
      $description            = get_bloginfo( 'description', 'display' );
      top_store_custom_logo();
      if($title_disable!='' || $tagline_disable!=''){
      if($title_disable!=''){
      ?>
      <div class="site-title"><span>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
      </span>
    </div>
    <?php
    }
    if($tagline_disable!=''){
    if( $description || is_customize_preview() ):?>
    <div class="site-description">
      <p><?php echo esc_html($description); ?></p>
    </div>
    <?php endif;
    }
    }
    }
    }
    /**********************************/
    // header icon function (Header Layout 1)
    /**********************************/
    function top_store_header_icon(){
    $whs_icon = get_theme_mod('top_store_whislist_mobile_disable',false);
    $acc_icon = get_theme_mod('top_store_account_mobile_disable',false);
    ?>
    <div class="header-icon">
      <?php
      //Yith wishlist Icon
      if( class_exists( 'YITH_WCWL' ) ){
      if($whs_icon == true){
      if (wp_is_mobile()!== true):
      ?>
      <a class="whishlist" href="<?php echo esc_url( top_store_whishlist_url() ); ?>">
        <span class="th-whishlist-text"><?php _e('My Favourite','top-x');?></span> <span><?php _e('Wishlist','top-x');?></span><i  class="fa fa-heart-o" aria-hidden="true"></i></a>
        
        <?php endif; }
        elseif($whs_icon == false){?>
        <a class="whishlist" href="<?php echo esc_url( top_store_whishlist_url() ); ?>">
          <span class="th-whishlist-text"><?php _e('My Favourite','top-x');?></span>
          <span><?php _e('Wishlist','top-x');?></span><i  class="fa fa-heart-o" aria-hidden="true"></i></a>
          <?php  }
          } elseif( class_exists( 'WPCleverWoosw' )){
          if($whs_icon == true){
          if (wp_is_mobile()!== true):
          ?>
          <a class="whishlist" href="<?php echo esc_url( WPcleverWoosw::get_url()); ?>">
            <span class="th-whishlist-text"><?php _e('My Favourite','top-x');?></span> <span><?php _e('Wishlist','top-x');?></span><i  class="fa fa-heart-o" aria-hidden="true"></i></a>
            
            <?php endif; }
            elseif($whs_icon == false){?>
            <a class="whishlist" href="<?php echo esc_url( WPcleverWoosw::get_url()); ?>">
              <span class="th-whishlist-text"><?php _e('My Favourite','top-x');?></span>
              <span><?php _e('Wishlist','top-x');?></span><i  class="fa fa-heart-o" aria-hidden="true"></i></a>
              <?php  }
              }
              if($acc_icon == true){
              if (wp_is_mobile()!== true):
              top_store_account();
              endif;
              }elseif($acc_icon == false){
              top_store_account();
              } ?>
            </div>
            <?php }
            /**************************/
            //PRELOADER
            /**************************/
            if( ! function_exists( 'top_store_preloader' ) ){
            function top_store_preloader(){
            if (( isset( $_REQUEST['action'] ) && 'elementor' == $_REQUEST['action'] ) ||
            isset( $_REQUEST['elementor-preview'] )){
            return;
            }else{
            $top_store_preloader_enable = get_theme_mod('top_store_preloader_enable',false);
            $top_store_preloader_image_upload = get_theme_mod('top_store_preloader_image_upload',TOP_STORE_PRELOADER);
            if($top_store_preloader_enable==true){ ?>
            <div class="top_store_overlayloader">
              <div class="top-store-pre-loader"><img src="<?php echo esc_url($top_store_preloader_image_upload);?>"></div>
            </div>
            <?php }
            }
            }
            }
            add_action('top_store_site_preloader','top_store_preloader');
            /**********************/
            // Sticky Header
            /**********************/
            if( ! function_exists( 'top_store_sticky_header_markup' )){
            function top_store_sticky_header_markup(){
            $top_store_menu_open = get_theme_mod('top_store_mobile_menu_open','overcenter'); ?>
            <div class="sticky-header">
              <div class="container">
                <div class="sticky-header-bar thnk-col-3">
                  <div class="sticky-header-col1">
                    <span class="logo-content">
                      <?php top_store_logo();?>
                    </span>
                  </div>
                  <div class="sticky-header-col2">
                    <nav>
                      <!-- Menu Toggle btn-->
                      <div class="menu-toggle">
                        <button type="button" class="menu-btn" id="menu-btn-stk">
                        <div class="btn">
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </div>
                        </button>
                      </div>
                      <div class="sider main  top-store-menu-hide  <?php echo esc_attr($top_store_menu_open); ?>">
                        <div class="sider-inner">
                          <?php if(has_nav_menu('top-store-sticky-menu' )){
                          if (strpos($_SERVER['HTTP_USER_AGENT'], 'iPad')!== false  || wp_is_mobile()!== false){
                          if(has_nav_menu('top-store-above-menu')){
                          top_store_abv_nav_menu();
                          }
                          }
                          top_store_stick_nav_menu();
                          }else{
                          wp_page_menu(array(
                        'items_wrap'  => '<ul class="top-store-menu" data-menu-style="horizontal">%3$s</ul>',
                        'link_before' => '<span>',
                        'link_after'  => '</span>'));
                        }?>
                      </div>
                    </div>
                  </nav>
                </div>
                <div class="sticky-header-col3">
                  <div class="thunk-icon">
                    
                    <div class="header-icon">
                      <a class="prd-search" href="#"><i class="fa fa-search"></i></a>
                      <?php
                      if( class_exists( 'WPCleverWoosw' )){ ?>
                      <a class="whishlist" href="<?php echo esc_url( WPcleverWoosw::get_url()); ?>"><i  class="fa fa-heart-o" aria-hidden="true"></i></a>
                      <?php  }
                      if( class_exists( 'YITH_WCWL' ) && (! class_exists( 'WPCleverWoosw' ))){
                      ?>
                      <a class="whishlist" href="<?php echo esc_url( top_store_whishlist_url() ); ?>"><i  class="fa fa-heart-o" aria-hidden="true"></i></a>
                      <?php }
                      top_store_account();
                      ?>
                      <?php if(class_exists( 'WooCommerce' )){ ?>
                      <div class="cart-icon" >

                         <?php if ( shortcode_exists( 'taiowc' ) ){
                          echo do_shortcode('[taiowc]');
                        } ?> 
                        
                      </div>
                      <?php  } ?>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="search-wrapper">
            <div class="container">
              <div class="search-close"><a class="search-close-btn"></a></div>
              <?php  top_store_th_advance_product_search(); ?>
            </div>
          </div>
          <?php }
          }
          if(get_theme_mod('top_store_sticky_header',false)==true):
          add_action('top_store_sticky_header','top_store_sticky_header_markup');
          endif;

//********************************
//th advance product search 
//*******************************
function top_store_th_advance_product_search(){
  if ( shortcode_exists('th-aps') ){
                echo do_shortcode('[th-aps]');
              } elseif ( !shortcode_exists('th-aps') && is_user_logged_in()) {
                $url = admin_url('themes.php?page=thunk_started&searchp');
                      echo '<a href="'.$url.'" target="_blank" class="plugin-active-msg">'.__('Please Install "th advance product search" Plugin','top-x').'</a>';
                    }
}

/**********************************/
// header icon function (Header Layout 2)
/**********************************/
function top_store_header_icon_second(){
$whs_icon = get_theme_mod('top_store_whislist_mobile_disable',false);
$acc_icon = get_theme_mod('top_store_pro_account_mobile_disable',false);
?>
<div class="header-icon">
     <?php 
    if( class_exists( 'YITH_WCWL' ) && (! class_exists( 'WPCleverWoosw' ))){
      if (strpos($_SERVER['HTTP_USER_AGENT'], 'Android') == true 
        || strpos($_SERVER['HTTP_USER_AGENT'], 'BlackBerry') == true 
        || strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') == true){
      if($whs_icon == false){ 
        ?>
      <a class="whishlist" href="<?php echo esc_url( top_store_whishlist_url() ); ?>">
        <i  class="fa fa-heart-o" aria-hidden="true"></i></a>
      
     <?php } }
     else{ ?>
        <a class="whishlist" href="<?php echo esc_url( top_store_whishlist_url() ); ?>">
          <i  class="fa fa-heart-o" aria-hidden="true"></i></a>
    <?php  } }
    //WPC Wishlist Icon
    if( class_exists( 'WPCleverWoosw' )){
      if (strpos($_SERVER['HTTP_USER_AGENT'], 'Android') == true 
        || strpos($_SERVER['HTTP_USER_AGENT'], 'BlackBerry') == true 
        || strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') == true){
      if($whs_icon == false){ 
        ?>
      <a class="whishlist" href="<?php echo esc_url( WPcleverWoosw::get_url()); ?>">
        <i  class="fa fa-heart-o" aria-hidden="true"></i></a>
      
     <?php } }
     else{ ?>
        <a class="whishlist" href="<?php echo esc_url( WPcleverWoosw::get_url()); ?>">
          <i  class="fa fa-heart-o" aria-hidden="true"></i></a>
    <?php  } }

       if (strpos($_SERVER['HTTP_USER_AGENT'], 'Android') == true 
        || strpos($_SERVER['HTTP_USER_AGENT'], 'BlackBerry') == true 
        || strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') == true){
        if($acc_icon == false){
          if ( is_user_logged_in() ) {
  echo $return = '<a class="account" href="'.get_permalink( get_option('woocommerce_myaccount_page_id') ).'"><i class="fa fa-user-o" aria-hidden="true"></i></a>';
  } 
 else {
  echo $return = '<span><a href="'.get_permalink( get_option('woocommerce_myaccount_page_id') ).'"><i class="fa fa-lock" aria-hidden="true"></i></a></span>';
}
      }
       }else{
         if ( is_user_logged_in() ) {
  echo $return = '<a class="account" href="'.get_permalink( get_option('woocommerce_myaccount_page_id') ).'"><i class="fa fa-user-o" aria-hidden="true"></i></a>';
  } 
 else {
  echo $return = '<span><a href="'.get_permalink( get_option('woocommerce_myaccount_page_id') ).'"><i class="fa fa-lock" aria-hidden="true"></i></a></span>';
}
       } ?>
            <a href="" class="th-search"><i class="fa fa-search"></i></a>
       
</div>
<?php } 