<?php
namespace dpcdCategoryDesign;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * metabox Class .
 */
class Cat_Design_Metabox {

    private $prefix;

    /**
     * Define the metabox and field configurations.
    */
    public function __construct(){

        $this->prefix = 'wc_pcd_';

        add_action( 'cmb2_init', [$this, 'create_cat_design_metaboxes'] );

    }

    function create_cat_design_metaboxes() {

        $post_id = isset($_GET['post']) ? $_GET['post'] : 0;
		$string_velue = '<?php echo do_shortcode( "[dpcd_categories_design id=\'' . $post_id . '\']" ); ?>';
        $title = 'Copy and Past this on page or post';
		$des = 'Copy and Past this on page or post';
		$button_link = 'Get started step by step following our documentation.<br/><br/><a href="https://wordpress.org/plugins/dynamic-product-categories-design/#faq-header" target="_blank">Documentation</a>';
		$need_help_link = 'Stuck with something?<br/>For emergency case join. <br/><br/><a href="https://dynamicweblab.com/submit-a-request/" target="_blank">Get Support</a>';
		
        $cmbhelp = new_cmb2_box( 
            array(
                'id'            => 'wc_pcd_metabox_help',
                'title'         =>  esc_html__( 'Woo Product Category Design', 'wc-pcd' ),
                'object_types'  => ['dpcd_category_design'], 
                'context'       => 'normal',
                'priority'      => 'high',
                'show_names'    => true,
                
            ) 
        );

        $cmbhelp->add_field( array(
            'name' => __( 'Instructions', 'wc-pcd' ),
            'desc' => $title,
            'type' => 'title',
            'id'   => 'dpcd_settings_title'
        ) );


		$cmbhelp->add_field( array(
            'name' => __( 'Shortcode', 'wc-pcd' ),
			'desc' => 'Copy',
            'type' => 'text',
			'default' => '',
            'id'   => 'dpcd_settings_shortcode'
        ) );
			

        // $dpcDocument = new_cmb2_box( 
        //     array(
        //         'id'            => 'wc_pcd_metabox_document',
        //         'title'         =>  esc_html__( 'Documentation', 'wc-pcd' ),
        //         'object_types'  => ['dpcd_category_design'], 
        //         'context'       => 'side',
        //         'priority'      => 'low',
        //         'show_names'    => true,
        //     ) 
        // );

        // $dpcDocument->add_field( array(
        //     'name' => __( '', 'wc-pcd' ),
        //     'desc' => $button_link,
        //     'type' => 'title',
        //     'id'   => 'dpcd_settings_document'
        // ) );

		$need_help = new_cmb2_box( 
            array(
                'id'            => 'wc_pcd_metabox_need_help',
                'title'         =>  esc_html__( 'Need Help ?', 'wc-pcd' ),
                'object_types'  => ['dpcd_category_design'], 
                'context'       => 'side',
                'priority'      => 'low',
                'show_names'    => true,
            ) 
        );
	
		$need_help->add_field(array(
            'name' => __( '', 'wc-pcd' ),
            'desc' => $need_help_link,
            'type' => 'title',
            'id'   => 'dpcd_settings_need_help',
		));

		

        $cmb = new_cmb2_box( 
            array(
                'id'            => 'wc_pcd_metabox',
                'title'         =>  esc_html__( 'Woo Category Design', 'wc-pcd' ),
                'object_types'  => ['dpcd_category_design'], 
                'context'       => 'normal',
                'priority'      => 'high',
                'show_names'    => true,
                'vertical_tabs' => false, // Set vertical tabs, default false
                'tabs' => array(
                    array(
                        'id'    => 'general',
                        'icon' => 'dashicons-admin-site',
                        'title' => __( 'General Settings', 'wc-pcd' ),
                        'fields' => array(
                            $this->prefix . 'featured_cats',
							$this->prefix . 'hide_empty_cats',
							$this->prefix . 'select_category_order',
                            $this->prefix . 'layout',
                            $this->prefix . 'content_position',
                            $this->prefix . 'autoplay',
                            $this->prefix . 'show_arrow',
                            $this->prefix . 'arrow_position',
                            $this->prefix . 'dot_nav',
                        ),
                    ),
                    array(
                        'id'     => 'display-options',
                        'icon'   => 'dashicons-align-left',
                        'title'  => __( 'Display Options', 'wc-pcd' ),
                        'fields' => array(
                            $this->prefix . 'section_title',
							$this->prefix . 'section_title_color',
							$this->prefix . 'section_title_margin',
							$this->prefix . 'section_category_content',
							$this->prefix . 'section_category_content_hover',
							$this->prefix . 'offer_color',
							$this->prefix . 'show_hide_special_offer',
							$this->prefix . 'space_between_categories',
							$this->prefix . 'display_category_name',
							$this->prefix . 'section_category_name_color',
							$this->prefix . 'section_category_name_bg_color',
							$this->prefix . 'show_category_description',
							$this->prefix . 'category_description_color',
							$this->prefix . 'show_hide_shop_now_btn',
							$this->prefix . 'shop_now_button_label',
							$this->prefix . 'shop_now_button_color',
							$this->prefix . 'shop_now_hover_button_color',
							$this->prefix . 'shop_now_button_bg_color',
                            $this->prefix . 'category_thumbnail',
                        ),
                    ),
					
                )
            ) 
        );

        
        $cmb->add_field( 
            array(
				'name'       =>  esc_html__(  'Select Categories', 'wc-pcd' ),
				'desc'       =>  esc_html__(  'Select Woocommerce Product Categories', 'wc-pcd' ),
				'id'         =>  $this->prefix . 'featured_cats',
				'type'       => 'multicheck',
				'options_cb' => 'dpcd_options_taxonomy_terms'
            )
        );

		$cmb->add_field( 
            array(
				'name'    => esc_html__(  'Order By', 'wc-pcd' ),
				'desc'    => esc_html__(  'Select an order option.', 'wc-pcd' ),
				'id'      => $this->prefix . 'select_category_order',
				'type'    => 'select',
				'default' => 'ASC',
				'options' => array(
					'DESC'   => __( 'DESC', 'wc-pcd' ),
					'ASC'    => __( 'ASC ', 'wc-pcd' ),
				),				
            )
        );

		$cmb->add_field( 
            array(
				'name'       =>  esc_html__(  'Hide Empty Categories', 'wc-pcd' ),
				'desc'       =>  esc_html__(  'Check to hide empty categories', 'wc-pcd' ),
				'id'         =>  $this->prefix . 'hide_empty_cats',
				'type'       => 'checkbox',
            )
        );

        $cmb->add_field( 
			array(
				'name'           => __( 'Select Layout', 'wc-pcd' ),
				'desc'           => __( 'Select your favorite Layout for woocommerce Product Categories', 'cmb2' ),
				'id'             => $this->prefix . 'layout',
				'type'           => 'radio_image',
				'options'        => array(
					'layout_grid'   => __('Grid', 'wc-pcd'),
					'layout_slider' => __('Slider', 'wc-pcd'),
					// 'block'      => __('Block', 'wc-pcd'),
				),
				'images_path'    => DPCD_ASSETS,
				'images'         => array(
					'layout_grid'   => 'images/grid.png',
					'layout_slider' => 'images/slider.png',
					// 'block'      => 'images/block.png',
				),
				'default'        => 'layout_grid',
        	) 
		);

        $cmb->add_field(
			array(
				'name'             => __( 'Content Position', 'wc-pcd' ),
				//'desc'           => __( '', 'cmb2' ),
				'id'               => $this->prefix . 'content_position',
				'type'             => 'radio_image',
				'options'          => array(
					'below-content'   => __('Below Content', 'wc-pcd'),
					'overlay-content' => __('Overlay Content', 'wc-pcd'),
					// 'block'        => __('Block', 'wc-pcd'),
				),
				'images_path'      => DPCD_ASSETS,
				'images'           => array(
					'below-content'   => 'images/below-content.png',
					'overlay-content' => 'images/overlay-content.png',
					// 'block'        => 'images/block.png',
				),
				'default'          => 'below-content',
        	) 
		);


        $cmb->add_field( 
            array(
                'name'                       => __( 'Enable Autoplay', 'wc-pcd' ),
                'desc'                       => __( 'Enables Autoplay on the slider', 'wc-pcd' ),
                'id'                         => $this->prefix . 'autoplay',
                'classes'                    => '',
                'type'                       => 'select',
                'show_option_none'           => false,
                'default'                    => 'yes',
                'options'                    => array(
                    'yes'                    => __( 'Yes', 'wc-pcd' ),
                    'no'                     => __( 'No', 'wc-pcd' ),
                ),
                'attributes'                 => array(
                    'data-conditional-id'    => $this->prefix . 'layout',
                    'data-conditional-value' => 'layout_slider',
                ),
            )
        );

        $cmb->add_field( 
            array(
                'name'                       => __( 'Show Arrow', 'wc-pcd' ),
                'desc'                       => __( 'Show hide next previous button', 'wc-pcd' ),
                'id'                         => $this->prefix . 'show_arrow',
                'classes'                    => '',
                'type'                       => 'select',
                'show_option_none'           => false,
                'default'                    => 'yes',
                'options'                    => array(
                    'yes'                    => __( 'Yes', 'wc-pcd' ),
                    'no'                     => __( 'No', 'wc-pcd' ),
                ),
                'attributes'                 => array(
                    'data-conditional-id'    => $this->prefix . 'layout',
                    'data-conditional-value' => 'layout_slider',
                ),
            )
        );
    
        $cmb->add_field( 
            array(
				'name'                       => __( 'Arrow Position', 'wc-pcd' ),
				//'desc'                     => 'Show hide next previous button',
				'id'                         => $this->prefix . 'arrow_position',
				'classes'                    => '',
				'type'                       => 'select',
				'show_option_none'           => false,
				'default'                    => 'side',
				'options'                    => array(
					'top-right'              => __( 'Top Right', 'wc-pcd' ),
					'side'                   => __( 'Side', 'wc-pcd' ),
				),
				'attributes'                 => array(
					'data-conditional-id'    => $this->prefix . 'layout',
					'data-conditional-value' => 'layout_slider',
				),
        	)
    	);


		$cmb->add_field( 
			array(
				'name'             => __( 'Show Dot navigation', 'wc-pcd' ),
				'desc'             => __( 'Show hide dot navigation', 'wc-pcd' ),
				'id'               => $this->prefix . 'dot_nav',
				'classes'          => '',
				'type'             => 'select',
				'show_option_none' => false,
				'default'          => 'yes',
				'options'          => array(
					'yes' => __( 'Yes', 'wc-pcd' ),
					'no'   => __( 'No', 'wc-pcd' ),
				),
				'attributes'    => array(
					'data-conditional-id'     => $this->prefix . 'layout',
					'data-conditional-value'  => 'layout_slider',
				),
			)
		);

		// $cmb->add_field( 
		// 		array(
		// 		'name'             => __( 'Section Title', 'wc-pcd' ),
		// 		'desc'             => __( 'Show hide Section Title', 'wc-pcd' ),
		// 		'id'               => $this->prefix . 'section_title',
		// 		'classes'          => 'wc-pcd-nice-checkbox',
		// 		'type'             => 'checkbox',
		// 	)
		// );


		// $cmb->add_field( 
		// 	array(
		// 		'name'             => __( 'Section Title Color', 'wc-pcd' ),
		// 		'desc'             => __( 'Change Section Title Color.', 'wc-pcd' ),
		// 		'id'               => $this->prefix . 'section_title_color',
		// 		'classes'          => 'wc-pcd-heading-color',
		// 		'type'             => 'colorpicker',
		// 		'default' => '#ffffff',
		// 	)
		// );

		$cmb->add_field( 
			array(
				'name'    => __( 'Background', 'wc-pcd' ),
				'desc'    => __( 'Set color for the category content background.', 'wc-pcd' ),
				'id'      => $this->prefix . 'section_category_content',
				'classes' => 'wc-pcd-category-content',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Hover Background', 'wc-pcd' ),
				'desc'    => __( 'Set color for the category content hover background.', 'wc-pcd' ),
				'id'      => $this->prefix . 'section_category_content_hover',
				'classes' => 'wc-pcd-category-content_hover',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
				array(
				'name'    => __( 'Offer Color', 'wc-pcd' ),
				'desc'    => __( 'Set color for the offer text.', 'wc-pcd' ),
				'id'      => $this->prefix . 'offer_color',
				'classes' => 'wc-pcd-offer_color',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Special offer', 'wc-pcd' ),
				'desc'    => __( 'Show/Hide Special offer.', 'wc-pcd' ),
				'id'      => $this->prefix . 'show_hide_special_offer',
				'classes' => 'pcd-grid-special-offer',
				'type'    => 'checkbox',
			)
		);

		$cmb->add_field( 
			array(
				'name'             => __( 'Category Name', 'wc-pcd' ),
				'desc'             => __( 'Hide/Show cateogry name.', 'wc-pcd' ),
				'id'               => $this->prefix . 'display_category_name',
				'classes'          => 'wc-pcd-category-name',
				'type'             => 'checkbox',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Category Name Color', 'wc-pcd' ),
				'desc'    => __( 'Set category name color.', 'wc-pcd' ),
				'id'      => $this->prefix . 'section_category_name_color',
				'classes' => 'wc-pcd-category-content',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Category Name Background', 'wc-pcd' ),
				'desc'    => __( 'Set category name background color.', 'wc-pcd' ),
				'id'      => $this->prefix . 'section_category_name_bg_color',
				'classes' => 'wc-pcd-category-content',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Category Description', 'wc-pcd' ),
				'desc'    => __( 'Hide/show description.', 'wc-pcd' ),
				'id'      => $this->prefix . 'show_category_description',
				'classes' => 'wc-pcd-category-description',
				'type'    => 'checkbox',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Category Description Color', 'wc-pcd' ),
				'desc'    => __( 'Set category description color.', 'wc-pcd' ),
				'id'      => $this->prefix . 'category_description_color',
				'classes' => 'wc-pcd-category-description',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Shop Now Button', 'wc-pcd' ),
				'desc'    => __( 'Show/Hide shop now button.', 'wc-pcd' ),
				'id'      => $this->prefix . 'show_hide_shop_now_btn',
				'classes' => 'wc-pcd-shop-now-button',
				'type'    => 'checkbox',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Shop Now Button Label', 'wc-pcd' ),
				'desc'    => __( 'Type shop now button label', 'wc-pcd' ),
				'default' => __( 'Shop Now', 'wc-pcd' ),
				'id'      => $this->prefix . 'shop_now_button_label',
				'classes' => 'wc-pcd-shop-now-button-label',
				'type'    => 'text',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Shop Now Button Color', 'wc-pcd' ),
				'desc'    => __( 'Set shop now button color.', 'wc-pcd' ),
				'id'      => $this->prefix . 'shop_now_button_color',
				'classes' => 'wc-pcd-shop-now-btn-color',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Shop Now Background Color', 'wc-pcd' ),
				'desc'    => __( 'Set shop now button background color.', 'wc-pcd' ),
				'id'      => $this->prefix . 'shop_now_button_bg_color',
				'classes' => 'wc-pcd-shop-now-btn-bg-color',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Shop Now Hover Color', 'wc-pcd' ),
				'desc'    => __( 'Set shop now button hover color.', 'wc-pcd' ),
				'id'      => $this->prefix . 'shop_now_hover_button_color',
				'classes' => 'wc-pcd-shop-now-btn-hover-color',
				'type'    => 'colorpicker',
				'default' => '',
			)
		);

		$cmb->add_field( 
			array(
				'name'    => __( 'Space Between Categories', 'wc-pcd' ),
				'desc'    => __( 'PX', 'wc-pcd' ),
				'default' => '',
				'id'      => $this->prefix . 'space_between_categories',
				'type'    => 'text_small',
				'attributes' => array(
					'type' => 'number',
				),
			)
		);


		$cmb->add_field( 
			array(
				'name'             => __( 'Thumbnail', 'wc-pcd' ),
				'desc'             => __( 'Hide/show thumbnail.', 'wc-pcd' ),
				'id'               => $this->prefix . 'category_thumbnail',
				'classes'          => 'wc-pcd-nice-checkbox',
				'type'             => 'checkbox',
			)
		);

		$cmb->add_field( 
			array(
				'name'          => __( 'Thumbnail Sizes', 'wc-pcd' ),
				'desc'          => __( 'Set size for thumbnail.', 'wc-pcd' ),
				'id'            => $this->prefix . 'category_thumbnail_sizes',
				'classes'       => 'wc-pcd-thumbnail-size',
				'type'          => 'select',
				'options'       => array(
					'thumbnail'    => __( 'Thumbnail (default 150px x 150px)', 'wc-pcd' ),
					'medium'       => __( 'Medium resolution (default 300px x 300px)', 'wc-pcd' ),
					'medium_large' => __( 'Medium Large resolution (default 768px x 0px)', 'wc-pcd' ),
					'large'        => __( 'Large resolution (default 1024px x 1024px)', 'wc-pcd' ),
					'full'         => __( 'Original image resolution (unmodified)', 'wc-pcd' ),
				),
			)
		);



        $cmb_term = new_cmb2_box( array( 
            'id'               => $this->prefix . 'term_metabox', 
            'title'            => esc_html__( 'Product Categories Design settings', 'wc-pcd' ),
            'object_types'     => array( 'term' ),
            'taxonomies'       => 'product_cat',
        ) ); 
     
        $cmb_term->add_field( array( 
            'name' => esc_html__( 'Special offer text', 'wc-pcd' ), 
            'desc' => esc_html__( 'Add special offer text for the category product', 'wc-pcd' ), 
            'id'   => $this->prefix . 'cat_special_offer', 
            'type' => 'textarea_small', 
        ) ); 
    
    }

}
new Cat_Design_Metabox();