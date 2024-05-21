<?php 
namespace WC_Booster_Custom_Fields;

function wc_booster_custom_fields_checkbox_sanitizer( $value ){
	
	if( 'on' != $value ){
		$value = '';
	}

	return $value;
}

class Helper{

	public function sanitize( $field ){

		$value = $field[ 'value' ];
		$fn = '';
		switch( $field[ 'type' ] ){

			case 'text':
			case 'select':
			case 'textarea':
		        $fn = 'wp_kses_post';
		    break;
		    
			case 'email':
			    $fn = 'sanitize_email';
			break;

			case 'url':
				$fn = 'esc_url_raw';
			break;

			case 'image':
				$fn = 'absint';
			break;

			case 'checkbox':
				$fn = 'wc_booster_custom_fields_checkbox_sanitizer';
    		break;

    		case 'repeater':
    			$fn = 'sanitize_repeater';
    		break;

			default :
				$fn = 'wp_unslash';
			break;
		}

		$fn = apply_filters( 'wc_booster_custom_fields_sanitizer', $fn, $field );

		if( 'sanitize_repeater' == $fn ){
			return $this->sanitize_repeater( $value );
		}else if( function_exists( $fn ) ){
			return $fn( $value );
		}else{
			return $value;
		}
	}

	public function sanitize_repeater( $data ){
		$sanitized = array();

		if( !empty( $data ) ){
			$array =  (array) json_decode( wp_unslash( $data ) );
			foreach( $array as $i => $repeaters ){
				if( !empty( $repeaters ) ){
					$sanitized[ $i ] = array();
					foreach( ( array ) $repeaters as $key => $field ){
						$field = ( array ) $field;
						$v = $this->sanitize( $field );
						$sanitized[ $i ][ $key ] = array(
							'type'  => $field[ 'type' ],
							'value' => $v
						);
					}
				}
			}
		}

		return $sanitized;
	}
		
	public function beautify( $string ){
	    return ucwords( str_replace( '_', ' ', $string ) );
	}

	public function uglify( $string ){
	    return strtolower( str_replace( ' ', '_', $string ) );
	}

	public function pluralize( $string ){

		if( empty( $string ) )
			return $string;

		$last = $string[ strlen( $string ) - 1 ];

		if( $last == 'y' ){

		  $cut = substr( $string, 0, -1 );
		  # convert y to ies
		  $plural = $cut . 'ies';
		} elseif ( 's' == $last ) {

		  $plural = $string;
		} else{

		  # fjust attach an s
		  $plural = $string . 's';
		}

		return $plural;
	}
}