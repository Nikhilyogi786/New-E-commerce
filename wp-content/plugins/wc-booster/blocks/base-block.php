<?php 
abstract class WC_Booster_Base_Block extends WC_Booster_Helper {

	/**
	 * Prevent some functions to called many times
	 * @access private
	 * @since 1.0.0
	 * @var integer
	 */
	protected static $counter = 0;

	/**
     * store all the fonts that are used blocks
     *
     * @var array
     */
	protected static $fonts = array(
            # Lato is a default font for this plugin
		'Lato' => 'Lato:300,400,700,900',
	);

	/**
	* To store Array of this blocks
	*
	* @access protected
	* @since 1.0.0
	* @var array
	*/
	protected $blocks = []; 

	protected $category = '';

	/**
	 * Store arrays of css and selectors
	 *
	 * @static
	 * @access protected
	 * @since 1.0.0
	*/
	protected static $styles = [ 'mobile' => [], 'tablet' => [], 'desktop' => [] ];

	public static $devices = [ 'mobile', 'tablet', 'desktop' ];

	public static $fse_content = '';

	public static $block_names = [];

	public static $all_blocks = [];

	// store block ids to prevent from duplicate print of styles and scripts
	protected $block_ids = [];
	
	/**
	 * Store arrays of inline scripts
	 *
	 * @static
	 * @access protected
	 * @since 1.0.0
	*/
	protected static $scripts = [];

	public function __construct(){

		if( $this->is_pro() ){
			self::$block_names[] = 'wc-booster-pro/' . $this->slug;
		}else{
			self::$block_names[] = 'wc-booster/' . $this->slug;
		}
		
		$this->add_block();

		add_action( 'init', [ $this, 'register' ] );

		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );

		if( self::$counter === 0 ){
            add_action( 'wp_head', array( __CLASS__, 'inline_scripts_styles' ), 99 );
            add_action( 'wp_enqueue_scripts', array( __CLASS__, 'enqueue_fonts' ), 99 );
            self::$counter++;
        }
	}

	public static function enqueue_fonts(){
		$scripts = array(
			array(
				'handler' => 'wc-booster-fonts',
				'style' => '//fonts.googleapis.com/css?family=' . join('|', self::$fonts) . '&display=swap',
				'absolute' => true,
				'minified' => false,
			),
		);
		self::enqueue($scripts);
	}

	protected static function add_font($key){
		$f = self::get_fonts();
		if (isset($f[$key])) {
			self::$fonts[$key] = $f[$key];
		}
	}

	public function enqueue_scripts(){
		if( method_exists( $this, 'prepare_scripts' ) ){
			$this->get_blocks();
			$this->prepare_scripts();
		}
	}

	public function register(){

		$args = [];
		if( method_exists( $this, "render" ) ){
            $args[ "render_callback" ] = [ $this, "render" ];
        }

        if( $this->is_pro() ){
        	register_block_type( WC_Booster_Pro_Path . "blocks/build/blocks/" . $this->slug, $args );
        }else{

			register_block_type( WC_Booster_Path . "blocks/build/blocks/" . $this->slug, $args );
        }
	}

	/**
	 * Returns array of the specific blocks from the content
	 *
	 * @access public
	 * @since 1.0.0
	 * @return array
	 */
	public function get_blocks(){

	    if( count( self::$all_blocks ) == 0 ){
	        self::set_blocks();
	    }

	    foreach( self::$all_blocks as $block ){
	        if( 
	        	'wc-booster/' . $this->slug == $block[ 'blockName' ] || 'wc-booster-pro/' . $this->slug == $block[ 'blockName' ]
	        ){
	            $this->blocks[] = $block;
	        }
	    }

	    return $this->blocks;
	}

	public function get_inner_block_attr( $instance, $block_id  ){

		$block = $this->get_blocks();
		$block = array_values(array_filter($block, function($b) use($block_id){
			return $block_id == $b['attrs']['block_id'];
		}));

		$inner_blocks = $block[0][ 'innerBlocks' ];

		$current_block = array_values(array_filter( $inner_blocks,  function( $b ) use( $instance ){
			return $b[ 'blockName' ] == "wc-booster/" . $instance->slug;
		}));
		
		$attrs = $instance->get_attrs_with_default( $current_block[ 0 ][ 'attrs' ] );

		return $attrs;
	}

	/**
	 * Add styes to the array
	 *
	 * @static
	 * @access protected
	 * @since 1.0.0
	 * @return null
	 */
	protected static function add_styles( $style, $device = 'desktop' ){
	    self::$styles[ $device ][] = $style;
	}

	/**
	 * Add styes to the array
	 *
	 * @static
	 * @access protected
	 * @since 1.0.0
	 * @return null
	 */
	protected static function add_scripts( $scripts ){
	    self::$scripts[] = $scripts;
	}

	public static function set_fse_content(){

	    $query = new WP_Query([
	        'post_type' => [ 'wp_block ', 'wp_template', 'wp_template_part' ],
	        'posts_per_page' => -1,
	    ]);

	    if( $query->have_posts() ) {
	        while( $query->have_posts() ){
	            $query->the_post();
	            $id = get_the_ID();
	            self::$fse_content .= get_post_field( 'post_content', $id );
	        }
	    }

	    wp_reset_postdata();

	    $widget_blocks = get_option( 'widget_block' );

	    if( is_array( $widget_blocks ) ){
	        foreach( $widget_blocks as $wb ){
	            if( is_array( $wb ) && isset( $wb[ 'content' ] ) ){
	                self::$fse_content .= $wb[ 'content' ];
	            }
	        }
	    }
	}

	/**
	 * Set array of the specific blocks from the content in blocks variable
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return array
	 */
	public static function set_blocks( $blocks = false ){

	    if( !$blocks ){

	        $id = get_the_ID();
	        $content = get_post_field( 'post_content', $id );

	        if( empty( self::$fse_content ) ){
	            self::set_fse_content();
	            $content .= self::$fse_content;
	        }

	        // Add support for patterns
	        if( class_exists( 'WP_Block_Patterns_Registry' ) ){
	            $patterns = WP_Block_Patterns_Registry::get_instance()->get_all_registered();
	            foreach( $patterns as $pattern ){
	                $content .= $pattern[ 'content' ];
	            }
	        }

	        $blocks = parse_blocks( $content );
	    }

	    if( $blocks && count( $blocks ) > 0 ){
	        foreach( $blocks as $block ){

	            if( in_array( $block[ 'blockName' ], self::$block_names ) ){
	                self::$all_blocks[] = $block;
	            }

	            if( isset( $block[ 'innerBlocks' ] ) && count( $block[ 'innerBlocks' ] ) > 0 ){
	                self::set_blocks( $block[ 'innerBlocks' ] );
	            }
	        }
	    }
	}

	/**
	 * Print all the  styes scripts
	 *
	 * @static
	 * @access public
	 * @since 1.0.0
	 * @return null
	 */
	public static function process_css($styles){
	    if( count( $styles ) > 0 ){
	        foreach( $styles as $style ){
	            $wrapper = isset( $style[ 'wrapper_selector' ] ) ? $style[ 'wrapper_selector' ] : '#';
	            self::generate_css( $style[ 'css' ], $style[ 'attrs' ], $wrapper );
	        }
	    }
	}

	/**
	 * Print all the  styes scripts
	 *
	 * @static
	 * @access public
	 * @since 1.0.0
	 * @return null
	 */
	public static function inline_scripts_styles(){
	    $styles  = apply_filters( 'wc-booster/styles', self::$styles );
	    $scripts = apply_filters( 'wc-booster/scripts', self::$scripts );
	    ?>
	    <style type="text/css" media="all" id="wc-booster-block-styles">
	        <?php self::process_css( $styles[ 'desktop' ] );?>

	        @media (max-width: 991px) {
	            <?php self::process_css( $styles[ 'tablet' ] );?>
	        }

	        @media (max-width: 767px) {
	            <?php self::process_css( $styles[ 'mobile' ] );?>
	        }
	    </style>
	    <?php

	    if( count( $scripts ) > 0 ):
	        ?>
	        <script>
	            jQuery( document ).ready(function(){
	                <?php
	                # https://developer.wordpress.org/apis/security/escaping/#toc_4
	                foreach( $scripts as $script_escaped ){
	                    echo $script_escaped;
	                }
	                ?>
	            });
	        </script>
	        <?php
	    endif;
	}

	/**
	 * Get unit for css property
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return string
	 */
	protected static function get_css_unit( $prop ){
	    switch ($prop) {

	        case 'font-size':
	        case 'margin-top':
	        case 'margin-bottom':
	        case 'margin-left':
	        case 'margin-right':
	        case 'padding-top':
	        case 'padding-bottom':
	        case 'padding-left':
	        case 'padding-right':
	        case 'border-radius':
	        case 'border-width':
	        return 'px';
	        default:
	        return;

	    }
	}

	/**
	 * get compatible array for responsive control
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return array
	 */
	public static function get_initial_responsive_props(){
	    return [
	        'mobile'  => [],
	        'tablet'  => [],
	        'desktop' => []
	    ];
	}

	/**
	 * get compatible array from the value of responsive control
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return array
	 */
	public function get_responsive_props( $attr, $prop, $devices = false ){

	    $props = $devices ? $devices : [
	        'mobile'  => [],
	        'tablet'  => [],
	        'desktop' => [],
	    ];

	    if( $attr ){
	        foreach( $props as $device => $a ){
	            if( $attr[ 'values' ] && $attr[ 'values' ][ $device ] ){
	                $props[ $device ][ $prop ] = [
	                    'unit'  => $attr[ 'activeUnit' ],
	                    'value' => $attr[ 'values' ][ $device ],
	                ];
	            }
	        }
	    }

	    return $props;
	}

	/**
	 * get compatible array from the value of typography control
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return array
	 */
	public static function get_typography_props( $typo, $devices = false ){

	    $props = $devices ? $devices : [
	        'mobile'  => [],
	        'tablet'  => [],
	        'desktop' => []
	    ];

	    if( $typo ){

	        foreach( $props as $device => $a ){

	            if( isset( $typo[ 'fontSize' ] ) ){
	                $title_size = $typo[ 'fontSize' ];
	                $props[ $device ][ 'font-size' ] = [
	                    'unit'  => $title_size[ 'activeUnit' ],
	                    'value' => $title_size[ 'values' ][ $device ]
	                ];
	            }

	            if( isset( $typo[ 'fontWeight' ] ) ){
	                $props[ $device ][ 'font-weight' ] = [
	                    'unit'  => '',
	                    'value' => $typo[ 'fontWeight' ],
	                ];
	            }

	            if( $device == 'desktop' ){

	                if( isset( $typo[ 'fontFamily' ] ) ){
	                    $props[ $device ][ 'font-family' ] = [
	                        'unit'  => '',
	                        'value' => $typo[ 'fontFamily' ]
	                    ];
	                }

	                if( isset( $typo[ 'textTransform' ] ) ){
	                    $props[ $device ][ 'text-transform' ] = [
	                        'value' => $typo[ 'textTransform' ],
	                        'unit'  => ''
	                    ];
	                }
	            }

	            if( isset( $typo[ 'lineHeight' ] ) ){

	                $title_lh = $typo[ 'lineHeight' ];

	                $props[ $device ][ 'line-height' ] = [
	                    'unit'  => $title_lh[ 'activeUnit' ],
	                    'value' => $title_lh[ 'values' ][ $device ]
	                ];
	            }
	        }
	    }
	    
        self::add_font($props['desktop']['font-family']['value']);
	    return $props;
	}

	/**
	 * get compatible array from the value of dimension control
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return array
	 */
	public static function get_dimension_props( $props, $attr, $devices = [ 'mobile', 'tablet', 'desktop' ] ){
		
	    if( !is_array( $props ) ){
	        switch( $props ){
	            case 'margin':
		            $props = [
		                'margin-top',
		                'margin-right',
		                'margin-bottom',
		                'margin-left'
		            ];
	            break;
	            case 'padding':
		            $props = [
		                'padding-top',
		                'padding-right',
		                'padding-bottom',
		                'padding-left'
		            ];
	            break;

                case 'border':
    	            $props = [
    	                'border-top-width',
    	                'border-right-width',
    	                'border-bottom-width',
    	                'border-left-width'
    	            ];
    	        break;

	            case 'border-radius':
		            $props = [
		                'border-top-left-radius',
		                'border-top-right-radius',
		                'border-bottom-left-radius',
		                'border-bottom-right-radius',
		            ];
		        break;

		        case 'border-width':
		        	$props = [ 'border-width' ];
		        break;

		        case 'font-size':
		        	$props = [ 'font-size' ];
		        break;

		        case 'height':
		        	$props = [ 'height' ];
		        break;

		        case 'max-height':
		        	$props = [ 'max-height' ];
		        break;

		        case 'min-height':
		        	$props = [ 'min-height' ];
		        break;

		        case 'line-height':
		        	$props = [ 'line-height' ];
		        break;

		        case 'top':
		        	$props = [ 'top' ];
		        break;

		        case 'right':
		        	$props = [ 'right' ];
		        break;

		        case 'left':
		        	$props = [ 'left' ];
		        break;

		        case 'width':
		        	$props = [ 'width' ];
		        break;


	        }
	    }

	    $data = [];

	    foreach( $devices as $device ){
	        $data[ $device ] = [];
	        foreach( $props as $i => $prop ){
	            if( isset( $attr[ 'values' ][ $device ] ) ){

	                if( is_array( $attr[ 'values' ][ $device ] ) ){
	                	$data[ $device ][ $prop ] = [
	                	    'unit'  => $attr[ 'activeUnit' ],
	                	    'value' => $attr[ 'values' ][ $device ][ $i ]
	                	];
	                }else{
	                	$data[ $device ][ $prop ] = [
	                	    'unit'  => $attr[ 'activeUnit' ],
	                	    'value' => $attr[ 'values' ][ $device ]
	                	];
	                }
	            }
	        }
	    }

	    return $data;
	}

	/**
	 * get compatible array for dimension control if attribute is null
	 *
	 * @access public
	 * @since 1.0.0
	 * @return array
	 */
	public static function get_dimension_attr( $attr, $v = 15, $unit = 'px' ){

	    if( is_null( $attr ) ){
	        $attr = [
	            'values' => [
	                'desktop' => [ $v, $v, $v, $v ],
	                'tablet'  => [ $v, $v, $v, $v ],
	                'mobile'  => [ $v, $v, $v, $v ],
	            ],
	            'activeUnit' => $unit,
	        ];
	    }

	    return $attr;
	}

	/**
	 * print out the css
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return void
	 */
	protected static function generate_css( $dynamic_css, $attrs, $wrapper_selector ){

	    if( count( $dynamic_css ) <= 0 ){
	        return;
	    }

	    foreach( $dynamic_css as $css ){

	        $p = '';
	        foreach( $css[ 'props' ] as $prop => $setting ){

	            $unit = null;
	            if( is_array( $setting ) ){
	                $value = isset( $setting[ 'value' ] ) ? $setting[ 'value' ] : '';
	                $unit  = isset( $setting[ 'unit' ] ) ? $setting[ 'unit' ] : '';

	            } else{
	                $value = isset( $attrs[ $setting ] ) ? esc_attr( $attrs[ $setting ] ) : '';
	            }

	            if( 0 === $value || !empty( $value ) ){
	                $unit = isset( $unit ) ? $unit : self::get_css_unit( $prop );
	                $p .= $prop . ': ' . $value . $unit . ';';
	            }
	        }

	        if( !empty( $p ) ){
	            $selector = '';

	            if( isset( $css[ 'selector' ] ) ){
	                if( is_array( $css[ 'selector'] ) ){
	                    foreach( $css[ 'selector' ] as $s ){
	                        $glue = substr( $s, 0, 1 ) == ':' ? '' : ' ';
	                        $selector .= $wrapper_selector . $attrs[ 'block_id' ] . $glue . $s . ',';
	                    }
	                    $selector = rtrim( $selector, ',' );
	                }else {

	                    $selector = $wrapper_selector . $attrs[ 'block_id' ];
	                    if( substr( $css[ 'selector' ], 0, 1 ) == ':' ){
	                        $selector .= $css[ 'selector' ];
	                    } else {
	                        $selector .= ' ' . $css[ 'selector' ];
	                    }
	                }
	            } else {
	                $selector = $wrapper_selector . $attrs[ 'block_id' ];
	            }

	            $selector_escaped = $selector;
	            $selector_escaped .= '{' . $p . '}';
	            echo $selector_escaped;
	        }
	    }
	}

	public function is_pro(){
		if( isset( $this->is_pro ) && $this->is_pro === true ){
			return true;
		}

		return false;
	}

	public function get_attrs(){

		if( $this->is_pro() ){
			$attr = file_get_contents( WC_Booster_Pro_Path . 'blocks/build/blocks/' . $this->slug .'/block.json' );
		}else{
			$attr = file_get_contents( __DIR__ . '/build/blocks/' . $this->slug .'/block.json' );
		}
		$attr = json_decode( $attr, true );
		
		return $attr[ 'attributes' ];
	}

	/**
	 * merge attribute array with default values
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return array
	 */
	public function get_attrs_with_default( $attrs ){

	    $return = $def =  [];
	    if( method_exists( $this, 'get_attrs' ) ){
	        $def = $this->get_attrs();
	    } else {
	        return $attrs;
	    }

	    foreach( $def as $key => $val ){
	        if( isset( $attrs[ $key ] ) ){
	            $return[ $key ] = $attrs[ $key ];
	        } else {
	            if( isset( $def[ $key ][ 'default' ] ) ){
	                $return[ $key ] = $def[ $key ][ 'default' ];
	            } else {
	                $return[ $key ] = false;
	            }
	        }
	    }

	    return $return;
	}
}