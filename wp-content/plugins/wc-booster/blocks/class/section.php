<?php
if( !class_exists( 'WC_Booster_Section_Block' ) ){

	class WC_Booster_Section_Block extends WC_Booster_Base_Block{

		public $slug = 'section';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Section';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'This block enables you to add a section with a desired layout that allows you to add other block within it';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 576 512">
			<path
				fill="#ffffff"
				d="M48 115.8C38.2 107 32 94.2 32 80c0-26.5 21.5-48 48-48c14.2 0 27 6.2 35.8 16H460.2c8.8-9.8 21.6-16 35.8-16c26.5 0 48 21.5 48 48c0 14.2-6.2 27-16 35.8V396.2c9.8 8.8 16 21.6 16 35.8c0 26.5-21.5 48-48 48c-14.2 0-27-6.2-35.8-16H115.8c-8.8 9.8-21.6 16-35.8 16c-26.5 0-48-21.5-48-48c0-14.2 6.2-27 16-35.8V115.8zM125.3 96c-4.8 13.6-15.6 24.4-29.3 29.3V386.7c13.6 4.8 24.4 15.6 29.3 29.3H450.7c4.8-13.6 15.6-24.4 29.3-29.3V125.3c-13.6-4.8-24.4-15.6-29.3-29.3H125.3zm2.7 64c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160zM256 320h32c35.3 0 64-28.7 64-64V224h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V320z"
			/>
		</svg>';


	    protected static $instance;
	    
	    public static function get_instance(){
	        if( null === self::$instance ) {
	            self::$instance = new self();
	        }

	        return self::$instance;
	    }


	   /**
		* Generate & Print Frontend Styles
		* Called in wp_head hook
		* @access public
		* @since 1.0.0
		* @return null
		*/
		public function prepare_scripts(){
			
			foreach( $this->blocks as $block ){

				$attrs = self::get_attrs_with_default( $block[ 'attrs' ] );

				if( in_array( $attrs[ 'block_id' ], $this->block_ids ) ){
					continue;
				}

				$this->block_ids[] = $attrs[ 'block_id' ];
				
				$padding = self::get_initial_responsive_props();
				if( isset( $attrs[ 'padding' ] ) ){
					$padding = self::get_dimension_props( 'padding', $attrs[ 'padding' ] );				
				} 

				$container_width = self::get_initial_responsive_props();
				if( ( $attrs[ "containerType" ] == 'boxed' ) && isset( $attrs[ 'containerWidth' ] ) ){
					$container_width = self::get_responsive_props( $attrs[ 'containerWidth' ], 'max-width' );
				}

				$shape_height = self::get_initial_responsive_props();
				if( isset( $attrs[ 'shapeHeight' ] ) ){
					$shape_height = self::get_responsive_props( $attrs[ 'shapeHeight' ], 'height' );
				}

				$margin = self::get_initial_responsive_props();
				if( isset( $attrs[ 'margin' ] ) ){
					$margin = self::get_dimension_props( 'margin',
						$attrs[ 'margin' ]
					);
				}

				$shape_margin = '';
				if( isset( $attrs[ 'shapeHeight' ] ) ){
					$shape_margin = $shape_height; 
				}else{
					$shape_margin = [
					    'mobile' => [
					        'height' => [
					            'unit' => 'px',
					            'value' => 50
					        ]
					    ],
					    'tablet' => [
					        'height' => [
					            'unit' => 'px',
					            'value' => 100
					        ]
					    ],
					    'desktop' => [
					        'height' => [
					            'unit' => 'px',
					            'value' => 150
					        ]
					    ]
					];
				}

				$verticalFlip = !isset( $attrs[ 'verticalFlip' ] ) ? true : false;

				foreach( self::$devices as $device ){

					$width = [];
					if(  $attrs[ "containerType" ] == 'boxed' ){
						$width =  $container_width[ $device ]; 
					}
				
					$css = array(
						array(
							'selector' => '> .wc-booster-section-wrapper',
							'props' => array_merge( $padding[ $device ], $width )
						),
						array(
							'selector' => '> .wc-booster-section-wrapper .wc-booster-section-shape svg',
							'props' => $shape_height[ $device ]
						),
						array(
							'selector' => '',
							'props' => $margin[ $device ]
						)
					);

					if( isset( $attrs[ 'shapePosition' ] ) && $attrs[ 'shapePosition' ] == 'top' && !$verticalFlip ){
						$css[] = [
							'selector' => '> .wc-booster-section-wrapper .wc-booster-section-shape',
							'props' => [
								'margin-bottom' => [
									'value' => -$shape_margin[ $device ][ 'height' ][ 'value' ],
									'unit'  => 'px'
								]
							]
						]; 
					}elseif( $verticalFlip ){
						$css[] = [
							'selector' => '> .wc-booster-section-wrapper .wc-booster-section-shape',
							'props' => [
								'margin-top' => [
									'value' => -$shape_margin[ $device ][ 'height' ][ 'value' ],
									'unit'  => 'px'
								]
							]
						]; 
					}

					self::add_styles( array(
						'attrs' => $attrs,
						'css'   => $css,
					), $device );
				}

				$css = [];
				$bg_attachment = $attrs[ 'bgAttachment' ] ? "fixed" : "scroll";
				if( ( !isset( $attrs[ 'bgType' ] ) || 'image' == $attrs[ 'bgType' ] ) && isset( $attrs[ 'bgImage' ] )  && is_array( $attrs[ 'bgImage' ] ) && $attrs[ 'bgImage' ][ 'url'  ] != '' ){

					$css[] = [
						'props'    => [
							'background-image' => [
								'unit' => '',
								'value' => 'url(' . $attrs[ 'bgImage' ][ 'url' ] . ')'
							],
							'background-attachment' => [
								'unit' => '',
								'value' => $bg_attachment
							],
							'background-position' => [
								'unit' => '',
								'value' => isset( $attrs[ 'bgPosition' ] ) ? $attrs[ 'bgPosition' ] : 'center center'
							]
						]
					];

					if( isset( $attrs[ 'bgOverlay' ] ) ){

						$css[] = [
							'selector' => '> .wc-booster-section-wrapper > .wc-booster-section-overlay',
							'props' => [
								'background-color' => [
									'unit' => '',
									'value' => $attrs[ 'bgOverlay' ]
								]
							]
						];
					}

				}elseif( isset( $attrs[ 'bgType' ] ) && 'color' == $attrs[ 'bgType' ] ){
					$css[] = [
						'props' => [
							'background-color' => 'bgColor'
						]
					];
				}

				if( isset( $attrs[ 'bgOverlay' ] ) ){

					$css[] = [
						'selector' => '> .wc-booster-section-wrapper > .wc-booster-section-overlay',
						'props' => [
							'background-color' => [
								'unit' => '',
								'value' => $attrs[ 'bgOverlay' ]
							]
						]
					];
				}
				
				$css[] = [
					'selector' => '> .wc-booster-section-wrapper .wc-booster-section-shape',
					'props' => [
						'background-color' => 'shapeBgColor',
						'z-index' => 'shapeZIndex'   
					]
				];

				$css[] = [
					'selector' => '> .wc-booster-section-wrapper .wc-booster-section-shape svg',
					'props' => [
						'fill' => 'shapeColor'
					]
				];

				self::add_styles( [
					'attrs' => $attrs,
					'css' => $css
				]);
			}
		}
	}

	WC_Booster_Section_Block::get_instance();
}