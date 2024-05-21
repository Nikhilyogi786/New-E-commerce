<?php 
if( $settings && is_array( $settings ) ){
    $settings[ 'textarea_name' ] = esc_attr( $name );
}else{
    $settings =   array(
        'textarea_name' => esc_attr( $name ),
        'textarea_rows' => 6
    );
}

$settings[ 'data-id' ]       = $id;
$settings[ 'data-type' ]     = $type;
$settings[ 'editor_class' ]  = 'field';

wp_editor( $value , $id, $settings  );