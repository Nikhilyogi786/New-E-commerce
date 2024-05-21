<?php
namespace dpcdCategoryDesign\Elementor\Widgets;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

use dpcdCategoryDesign\Helper;
use \Elementor\Controls_Manager;
use \Elementor\Group_Control_Border;
use \Elementor\Group_Control_Box_Shadow;
use \Elementor\Group_Control_Image_Size;
use \Elementor\Group_Control_Typography;
use \Elementor\Group_Control_Background;
use \Elementor\Plugin;
use \Elementor\Utils;
use \Elementor\Widget_Base;

/**
 * Elementor dpcdCategoryDesign Posts Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Category extends Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve oEmbed widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'dpcd-category-design';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve oEmbed widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget title.
	 */
	public function get_title() {
		return __( 'Product Categories Design', 'wc-pcd' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve oEmbed widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-user-circle-o';
	}

	/**
	 * Checks for preview mode.
	 *
	 * @return boolean
	 */
	public function isPreview() {
		return \Elementor\Plugin::$instance->preview->is_preview_mode() || \Elementor\Plugin::$instance->editor->is_edit_mode();
	}

	public function get_style_depends() {

		if($this->isPreview()){
			return [];
		}

		return [ 'dpcd-category-design-css', 'dpcd-grid', 'dpcd-elementor', 'dpcd-slick', 'dpcd-accessible-slick-theme' ];

	}

	public function get_script_depends() {

		if($this->isPreview()){
			return [];
		}

		return [ 'dpcd-accessible-slick', 'dpcd-el-slider-js' ];
	}
	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the oEmbed widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return [ 'dwl-items' ];
	}


	private function get_all_taxonomy( $taxonomy = 'category' ) {

		$options = array();

		if ( ! empty( $taxonomy ) ) {
			// Get categories for post type.
			$terms = get_terms(
				array(
					'taxonomy'   => $taxonomy,
					'hide_empty' => false,
				)
			);
			if ( ! empty( $terms ) ) {
				foreach ( $terms as $term ) {
					if ( isset( $term ) ) {
						if ( isset( $term->slug ) && isset( $term->name ) ) {
							$options[ $term->slug ] = $term->name;
						}
					}
				}
			}
		}

		return $options;
	}

	/**
	 * Content Query Options.
	 */
	private function query_options() {

		$this->start_controls_section(
			'layout',
			[
				'label' => __( 'Layout', 'wc-pcd' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'layout_type',
			[
				'label' => esc_html__( 'Layout Type', 'wc-pcd' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'grid',
				'options' => [
					'grid' => esc_html__( 'Grid', 'wc-pcd' ),
					'slider' => esc_html__( 'Slider', 'wc-pcd' ),
				]
			]
		);

		$this->add_responsive_control(
			'columns',
			[
				'label' => __( 'Columns', 'wc-pcd' ),
				'type' => Controls_Manager::SELECT,
				'default' => '4',
				'tablet_default' => '2',
				'mobile_default' => '1',
				'options' => [
					'1' => '1',
					'2' => '2',
					'3' => '3',
					'4' => '4',
				],
			]
		);

		$this->add_control(
			'content_position',
			[
				'label' => esc_html__( 'Content Position', 'wc-pcd' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'below-content',
				'options' => [
					'below-content' => esc_html__( 'Below Content', 'wc-pcd' ),
					'overlay-content' => esc_html__( 'Overlay Content', 'wc-pcd' ),
				]
			]
		);

		$this->add_control(
			'Autoplay_Speed',
			[
				'label' => esc_html__( 'Autoplay Speed', 'wc-pcd' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'default' => esc_html__( '4000', 'wc-pcd' ),
				'placeholder' => esc_html__( 'Type your Autoplay Speed Number', 'wc-pcd' ),
				'condition' => [
					'layout_type' => 'slider',
				],
			]
		);

		$this->add_control(
			'enable_autoplay',
			[
				'label' => esc_html__( 'Enable Autoplay', 'wc-pcd' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'ON', 'wc-pcd' ),
				'label_off' => esc_html__( 'OFF', 'wc-pcd' ),
				'return_value' => 'yes',
				'default' => 'yes',
				'condition' => [
					'layout_type' => 'slider',
				],
			]
		);

		$this->add_control(
			'show_arrow',
			[
				'label' => esc_html__( 'Show Arrow', 'wc-pcd' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'wc-pcd' ),
				'label_off' => esc_html__( 'Hide', 'wc-pcd' ),
				'return_value' => 'yes',
				'default' => 'yes',
				'condition' => [
					'layout_type' => 'slider',
				],
			]
		);

		$this->add_control(
			'show_dot_navigation',
			[
				'label' => esc_html__( 'Show Dot navigation', 'wc-pcd' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'wc-pcd' ),
				'label_off' => esc_html__( 'Hide', 'wc-pcd' ),
				'return_value' => 'yes',
				'default' => 'yes',
				'condition' => [
					'layout_type' => 'slider',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_query',
			[
				'label' => __( 'Query', 'wc-pcd' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		// Post categories
		$this->add_control(
			'product_cat',
			[
				'label'       => __( 'Product Category', 'wc-pcd' ),
				'label_block' => true,
				'type'        => Controls_Manager::SELECT2,
				'multiple'    => true,
				'options'     => $this->get_all_taxonomy('product_cat'),

			]
		);

		$this->add_control(
			'hide_empty_categories',
			[
				'label' => esc_html__( 'Hide Empty Categories', 'wc-pcd' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Hide', 'wc-pcd' ),
				'label_off' => esc_html__( 'Show', 'wc-pcd' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);

		$this->add_control(
			'orderby',
			[
				'label' => __( 'Order By', 'wc-pcd' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'date',
				'options' 	  => Helper::getOrderBy(),
			]
		);

		$this->add_control(
			'order',
			[
				'label' => __( 'Order', 'wc-pcd' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'desc',
				'options' => [
					'asc' => __( 'ASC', 'wc-pcd' ),
					'desc' => __( 'DESC', 'wc-pcd' ),
				]
			]
		);

		$this->end_controls_section();

	}

	private function style_options(){
		//Image
		$this->start_controls_section(
			'posts_image_section',
			[
				'label' => esc_html__( 'Image', 'wc-pcd'),
				'tab' => Controls_Manager::TAB_STYLE
			]
		);

		$this->add_control(
			'show_image',
			[
				'label' => __( 'Show Image', 'wc-pcd' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'wc-pcd' ),
				'label_off' => __( 'Hide', 'wc-pcd' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);

		$this->add_responsive_control(
			'posts_image',
			[
				'label' => esc_html__( 'Margin', 'wc-pcd'),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .pcd-single-card a img' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->end_controls_section();

		//Title
		$this->start_controls_section(
			'category_name',
			[
				'label' => esc_html__( 'Category Name', 'wc-pcd'),
				'tab' => Controls_Manager::TAB_STYLE
			]
		);

		$this->add_control(
			'show_category_name',
			[
				'label' => __( 'Show Category Name', 'wc-pcd' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'wc-pcd' ),
				'label_off' => __( 'Hide', 'wc-pcd' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);

		$this->add_control(
			'category_name_color',
			[
				'label' => esc_html__( 'Category Name Color', 'wc-pcd'),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pcd-grid-cat-info a' => 'color: {{VALUE}};',
				],
			]
		);
  
		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
			 'name' => 'category_name_typography',
			 'selectors' => [
				'{{WRAPPER}} .pcd-grid-cat-info a' => 'font-family: {{VALUE}};',
			],
			]
		);
  
		$this->add_responsive_control(
			'category_name_margin',
			[
				'label' => esc_html__( 'Margin', 'wc-pcd'),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .pcd-grid-cat-info a' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();


		//Sub Title
		$this->start_controls_section(
			'pcd_offer',
			[
				'label' => esc_html__( 'Offer', 'wc-pcd'),
				'tab' => Controls_Manager::TAB_STYLE
			]
		);

		$this->add_control(
			'show_offer',
			[
				'label' => __( 'Show Offer', 'wc-pcd' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'wc-pcd' ),
				'label_off' => __( 'Hide', 'wc-pcd' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);		

		$this->add_control(
			'pcd_offer_color',
			[
				'label' => esc_html__( 'Offer Color', 'wc-pcd'),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pcd-grid-special-offer' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
			'name' => 'posts_sub_title_typography',
			'selector' => '{{WRAPPER}} .pcd-grid-special-offer',
			]
		);

		$this->add_responsive_control(
			'posts_sub_title_margin',
			[
				'label' => esc_html__( 'Margin', 'wc-pcd'),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .pcd-grid-special-offer' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		//Exceprt
		$this->start_controls_section(
			'category_description',
			[
				'label' => esc_html__( 'Category Description', 'wc-pcd'),
				'tab' => Controls_Manager::TAB_STYLE
			]
		);

		$this->add_control(
			'show_category_description',
			[
				'label' => __( 'Show Category Description', 'wc-pcd' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'wc-pcd' ),
				'label_off' => __( 'Hide', 'wc-pcd' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
		

		$this->add_control(
			'posts_excerpt_color',
			[
				'label' => esc_html__( 'Category Description Color', 'wc-pcd'),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pcd-grid-description p' => 'color: {{VALUE}};',
				],
			]
		);
  
		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
			 'name' => 'posts_excerpt_typography',
			 'selector' => '{{WRAPPER}} .pcd-grid-description p',
			]
		);
  
		$this->add_responsive_control(
			'posts_excerpt_margin',
			[
				'label' => esc_html__( 'Margin', 'wc-pcd'),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .pcd-grid-description p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();


		// shop now button
		$this->start_controls_section(
			'shop_now_button',
			[
				'label' => esc_html__( 'Shop Now Button', 'wc-pcd'),
				'tab' => Controls_Manager::TAB_STYLE
			]
		);

		$this->add_control(
			'shop_now_text',
			[
				'label' => esc_html__( 'Button Text', 'wc-pcd' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Shop Now', 'wc-pcd' ),
				'placeholder' => esc_html__( 'Type your button Text', 'wc-pcd' ),
			]
		);

		$this->add_control(
			'posts_button_heading',
			[
				'label' => __( 'Shop Now Button', 'wc-pcd'),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->start_controls_tabs( 'tabs_button_style' );

		$this->start_controls_tab(
			'tab_button_normal',
			[
				'label' => __( 'Normal', 'wc-pcd' ),
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => __( 'Text Color', 'wc-pcd' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .pcd-shop-now' => 'fill: {{VALUE}}; color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'background',
				'label' => __( 'Background', 'wc-pcd' ),
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => '{{WRAPPER}} .pcd-shop-now',
				'fields_options' => [
					'background' => [
						'default' => 'classic',
					],
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_button_hover',
			[
				'label' => __( 'Hover', 'wc-pcd' ),
			]
		);

		$this->add_control(
			'hover_color',
			[
				'label' => __( 'Text Color', 'wc-pcd' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pcd-shop-now:hover, {{WRAPPER}} .pcd-shop-now:focus' => 'color: {{VALUE}};',
					'{{WRAPPER}} .pcd-shop-now:hover svg, {{WRAPPER}} .pcd-shop-now:focus svg' => 'fill: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'button_background_hover',
				'label' => __( 'Background', 'wc-pcd' ),
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => '{{WRAPPER}} .pcd-shop-now:hover, {{WRAPPER}} .pcd-shop-now:focus',
				'fields_options' => [
					'background' => [
						'default' => 'classic',
					],
				],
			]
		);

		$this->add_control(
			'button_hover_border_color',
			[
				'label' => __( 'Border Color', 'wc-pcd' ),
				'type' => Controls_Manager::COLOR,
				'condition' => [
					'border_border!' => '',
				],
				'selectors' => [
					'{{WRAPPER}} .pcd-shop-now:hover, {{WRAPPER}} .pcd-shop-now:focus' => 'border-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'hover_animation',
			[
				'label' => __( 'Hover Animation', 'wc-pcd' ),
				'type' => Controls_Manager::HOVER_ANIMATION,
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'border',
				'selector' => '{{WRAPPER}} .pcd-shop-now',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'border_radius',
			[
				'label' => __( 'Border Radius', 'wc-pcd' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .pcd-shop-now' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'button_box_shadow',
				'selector' => '{{WRAPPER}} .pcd-shop-now',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
			 'name' => 'button_typography',
			 'selector' => '{{WRAPPER}} .pcd-shop-now',
			]
		);

		$this->add_responsive_control(
			'text_padding',
			[
				'label' => __( 'Padding', 'wc-pcd' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .pcd-shop-now' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);


		$this->end_controls_section();

		// slider arrow butn
		$this->start_controls_section(
			'slider_style',
			[
				'label' => esc_html__( 'Slider style', 'wc-pcd'),
				'tab' => Controls_Manager::TAB_STYLE
			]
		);

	
		$this->add_control(
			'slider_dot_avigation_color',
			[
				'label' => esc_html__( 'Dot Navigation Color', 'wc-pcd'),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .slick-dot-icon' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'slider_dot_avigation_active_color',
			[
				'label' => esc_html__( 'Dot Navigation Active Color', 'wc-pcd'),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .slick-active button .slick-dot-icon' => 'color: {{VALUE}};',
					'{{WRAPPER}} .pcd-elementor-cat-slider .slick-dots li button:focus .slick-dot-icon:before' => 'color: {{VALUE}};',
					'{{WRAPPER}} .pcd-layout_slider .slick-dots li.slick-active button .slick-dot-icon ' => 'color: {{VALUE}};',
				],
			]
		);

		
		$this->start_controls_tabs( 'tabs_slider_button_style' );

		$this->start_controls_tab(
			'tab_slider_button_normal',
			[
				'label' => __( 'Normal', 'wc-pcd' ),
			]
		);

		$this->add_control(
			'slider_arrow_icon_color',
			[
				'label' => esc_html__( 'Arrow icon color', 'wc-pcd'),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pcd-elementor-cat-slider .slick-next .slick-next-icon' => 'color: {{VALUE}};',
					'{{WRAPPER}} .pcd-elementor-cat-slider .slick-prev .slick-prev-icon' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_slider_button_hover',
			[
				'label' => __( 'Hover', 'wc-pcd' ),
			]
		);

		$this->add_control(
			'slider_hover_color',
			[
				'label' => __( 'Arrow icon color', 'wc-pcd' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pcd-elementor-cat-slider .slick-next .slick-next-icon:hover, {{WRAPPER}} .pcd-elementor-cat-slider .slick-next .slick-next-icon:focus' => 'color: {{VALUE}};',
					'{{WRAPPER}} .pcd-elementor-cat-slider .slick-prev .slick-prev-icon:hover, {{WRAPPER}} .pcd-elementor-cat-slider .slick-prev .slick-prev-icon:focus' => 'color: {{VALUE}};',
					'{{WRAPPER}} .pcd-elementor-cat-slider .slick-prev .slick-prev-icon:hover svg, {{WRAPPER}} .pcd-elementor-cat-slider .slick-prev .slick-prev-icon:focus svg' => 'fill: {{VALUE}};',
				],
			]
		);


		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		// color, Typography & Spacing
		$this->start_controls_section(
			'posts_article_settings',
			[
				'label' => esc_html__( 'Container Settings', 'wc-pcd'),
				'tab' => Controls_Manager::TAB_STYLE
			]
		);

		$this->add_responsive_control(
			'posts_article_margin',
			[
				'label' => esc_html__( 'Margin', 'wc-pcd'),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .pcd-content-section' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'posts_article_padding',
			[
				'label' => esc_html__( 'Padding', 'wc-pcd'),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .pcd-content-section' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
			 'name' => 'posts_article_border',
				'selector' => '{{WRAPPER}} .pcd-content-section',
			]
		);

		$this->end_controls_section();


	}

	/**
	 * Register oEmbed widget controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function _register_controls() {

		$this->query_options();
		$this->style_options();

	}

	/**
	 * Render oEmbed widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {

		$settings = $this->get_settings_for_display();
		
		$desktop_column = isset($settings['columns']) ? $settings['columns'] : '4';
		$tablet_column = isset($settings['columns_tablet']) ? $settings['columns_tablet'] : '3';
		$mobile_column = isset($settings['columns_mobile']) ? $settings['columns_mobile'] : '1';
		$order = isset($settings['order']) ? $settings['order'] : 'ASC';
		$hide_empty = isset($settings['hide_empty_categories']) ? $settings['hide_empty_categories'] : 'true';
		$orderby = isset($settings['orderby']) ? $settings['orderby'] : 'name';

        $args = array(
            'hide_empty'	=> $hide_empty,
            'slug' => $settings['product_cat'],
			'orderby' => $orderby,
			'order' => $order,
        );

		$bootstrap_class_name = Helper::get_grid_layout_bootstrap_class($desktop_column, $tablet_column, $mobile_column);

        $pcd_cats = get_terms( 'product_cat', $args );

        if ( ! empty( $pcd_cats ) && ! is_wp_error( $pcd_cats ) ) : ?>

            <section class="pcd-content-section pcd-position-<?php echo esc_attr($settings['content_position']); ?>">
			<?php
 
            include DPCD_PATH . '/pcd-templates/elementor/template-'.esc_attr($settings['layout_type']).'.php';
	
			?>
            </section>
		<?php	
        endif; 
	}

}