<?php 
namespace WC_Booster_Custom_Fields;

class Setting{

	protected $key;
	protected $slug;
	protected $fields = array();
	protected $field_module;
	protected static $defaults = array();

	protected static $counter = 0;

	public function __construct( $config = false ){

		if( $config ){
			$this->key  = $config[ 'key' ];
			$this->slug = $config[ 'slug' ]; //option_group 
			$this->field_module = Main::get_instance( 'field' );
			add_action( 'admin_init', array( $this, 'register' ) );
		}
	}

	public function add_fields( $fields ){
		$this->fields = $fields;
		foreach( $fields as $section_id => $section ){
			$fields = $section[ 'fields' ];
			foreach( $fields as $id => $field ){
				self::$defaults[ $id ] = isset( $field[ 'default' ] ) ? $field[ 'default' ] : null;
				$this->fields[ $section_id ][ 'fields' ][ $id ][ 'class' ] = $field[ 'type' ] . '-row';
			}
		}
	}

	public function get( $key = false ){

		$settings = get_option( $this->key );
		if( !$key ){
			return $settings;
		}

		if( isset( $settings[ $key ] ) ){
			return $settings[ $key ];
		}

		if( !isset( $settings[ $key ] ) && isset( self::$defaults[ $key ] ) ){

			return self::$defaults[ $key ];
		}

		return null;
	}

	public function get_section_id( $section ){
		return 'wc-booster-custom-fields-section-' . $section;
	}

	public function register(){

	    register_setting( $this->slug, $this->key ); 

	    $fields = apply_filters( 'wc_booster_custom_fields_setting_fields', $this->fields, $this );
	    foreach( $fields as $section_id => $section ){

	    	$label      = $section[ 'label' ];
	    	$fields     = $section[ 'fields' ];
	    	$section_id = $this->get_section_id( $section_id );

	    	add_settings_section(
	    	    $section_id, # section id
	    	    $label,
	    	    array( $this, 'section_callback' ), # callback
	    	    $this->slug # page slug
	    	);

	    	foreach( $fields as $id => $field ){

	    		$pass = array_merge( array( 'id' => $id ), $field );
	    		add_settings_field(
	    		    $id, #id 
	    		    $field[ 'label' ], #name
	    		    array( $this, 'field_callback' ), #callback
	    		    $this->slug, #page
	    		    $section_id,
	    		    $pass #pass to callback function
	    		);
	    	}
	    }
	}

	public function section_callback(){
	    
	}

	public function field_callback( $field ) {

	    $options = $this->get();
	    $id = $field[ 'id' ];
	    
	    $field[ 'name' ]  = $this->key . "[" . $id ."]";

	    if( isset( $options[ $id ] ) ){
	    	$field[ 'value' ] = $options[ $id ];
	    }elseif( isset( self::$defaults[ $id ] ) ){
	    	if( 'checkbox' != $field[ 'type' ] ){
	    		$field[ 'value' ] = self::$defaults[ $id ];
	    	}else{
	    		
	    	$field[ 'value' ] = null;
	    	}
	    }else{
	    	$field[ 'value' ] = null;
	    }

	    $field[ 'label' ] = '';
	    
	    $this->field_module->render( $field );
	}

	public function do_settings_sections( $page ){
		
		global $wp_settings_sections, $wp_settings_fields;
		 
	    if ( ! isset( $wp_settings_sections[ $page ] ) ) {
	        return;
	    }

	    $i = 0;
	    foreach ( (array) $wp_settings_sections[ $page ] as $section ) {
	       
	        if ( $section['callback'] ) {
	            call_user_func( $section['callback'], $section );
	        }
	 
	        if ( ! isset( $wp_settings_fields ) || ! isset( $wp_settings_fields[ $page ] ) || ! isset( $wp_settings_fields[ $page ][ $section['id'] ] ) ) {
	            continue;
	        }

	        if( isset( $_COOKIE[ 'wc_booster_option_tab' ] ) ){
	        	$active = $_COOKIE[ 'wc_booster_option_tab' ] ==  '#' . $section[ 'id' ] ? 'active' : ''; 
	        }else{
	        	$active = $i == 0 ? 'active' : ''; 
	        }

	        $i++;
	        echo '<div id="' . esc_attr( $section[ 'id' ] ) . '" class="wc-booster-custom-fields-single-tab '. esc_attr( $active ) . '">';
	        echo '<table class="form-table" role="presentation">';
	        do_settings_fields( $page, $section[ 'id' ] );
	        echo '</table>';
	        echo '</div>';
	    }
	}

	public function render(){
	?>
		<!-- <div class="rate-us">
			<div class="rating">
				<span class="dashicons dashicons-star-filled"></span>
				<span class="dashicons dashicons-star-filled"></span>
				<span class="dashicons dashicons-star-filled"></span>
				<span class="dashicons dashicons-star-filled"></span>
				<span class="dashicons dashicons-star-filled"></span>
			</div>
			<h3>Love Our Product?</h3>
			<a href="//www.eaglevisionit.com/downloads/wc-booster/" target="_blank" class="rate-us-btn">
				<span class="dashicons dashicons-star-filled"></span> 
				Rate Us
			</a>
		</div> -->
		<div class="wc-booster-custom-fields-wrapper <?php echo esc_attr( $this->slug ); ?>">
			<div class="wc-booster-custom-fields">
			    <form method="POST" action="options.php">
			        <?php
			            # pass slug name of page, also referred
			            # to in Settings API as option group name
			            settings_fields( $this->slug );

			            echo '<div class="wc-booster-custom-fields-settings"><div class="wc-booster-custom-fields-tab-wrapper">';

				        echo '<ul class="wc-booster-custom-fields-tab-navigation">';

			            $i = 0;
			            foreach( $this->fields as $section_id => $section ){
			            	
			            	$section_id = $this->get_section_id( $section_id );
			            	if( isset( $_COOKIE[ 'wc_booster_option_tab' ] ) ){
			            		$active = $_COOKIE[ 'wc_booster_option_tab' ] == "#" . $section_id ? 'active' : ''; 
			            	}else{
			            		$active = $i == 0 ? 'active' : ''; 
			            	}
			            	$i++;
			            	echo '<li><a class="wc-booster-custom-fields-tab-menu '. esc_attr( $active ) .'" href="#'. esc_attr( $section_id ) .'">' . esc_html( $section[ 'label' ] ) . '</a></li>';
			            }
			            echo '</ul>';
			            echo '<div class="wc-booster-custom-fields-tab">';
				            # pass slug name of page
				            $this->do_settings_sections( $this->slug );
			            echo '</div>';
		                echo '</div>'; 
		                echo '</div>'; 
			       
			            submit_button();
			        ?>
			    </form>
			</div>
		</div>
	   <?php
	}
}
