<?php
namespace WC_Booster_Custom_Fields;

define( 'WBCF_FILE', __FILE__ );
define( 'WBCF_PATH', plugin_dir_path( WBCF_FILE ) );
define( 'WBCF_URL', plugin_dir_url( WBCF_FILE ) );

class Main{

    public static $modules;

    public static $instances = array();

    public static $instance;

    public function __construct( $modules = false ){

        if( $modules ){
            self::$modules = $modules;
        }

        add_action( 'plugins_loaded', array( $this, 'load_modules' ) );
        add_filter( 'wp_check_filetype_and_ext', array( $this, 'allow_svg' ), 10, 4 );
    }

    public static function get_instance( $module = false ){
        if( $module ){
            return self::$instances[ $module ];
        }else{
            return self::$instance;
        }
    }

    public function allow_svg( $mime, $file, $filename, $mimes ) {
        $wp_filetype = wp_check_filetype( $filename, $mimes );
        if ( in_array( $wp_filetype['ext'], [ 'svg' ] ) ) {
            $mime['ext']  = true;
            $mime['type'] = true;
        }
        return $mime;
        
    }

    public function load_modules(){

        $modules = apply_filters( 'wc_booster_custom_fields_modules', self::$modules, self::$instance );

        foreach ( $modules as $m ){
            
            $this->require( "class/{$m}.php" );

            $class = 'WC_Booster_Custom_Fields\\';
            $ar = explode( '-', $m );
            foreach( $ar as $a ){
                $class .= ucfirst( $a) . '_';
            }
            $class = rtrim( $class, '_' );
            self::$instances[$m] = new $class();
        }

        do_action( 'wc_booster_custom_fields_loaded' );
    }

    public function get_directory_path( $file = ''){
        return WBCF_PATH . $file;
    }

    public function require( $file ){
        require $this->get_directory_path( $file );
    }
}

Main::$instance = new Main(array(
    'helper',
    'ajax',
    'script',
    'field',
    'setting',
    'post-type',
    'taxonomy'
));
