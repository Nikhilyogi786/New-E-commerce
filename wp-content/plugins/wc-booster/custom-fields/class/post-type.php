<?php 
namespace WC_Booster_Custom_Fields;

class Post_Type{

	# Stores Post Type Name.
	public $post_type;

	# Stores Post Type Arguments.
	public $post_type_args;

	#Stores Post Type Labels.
	public $post_type_labels;

	# Stores Taxonomy Name.
	public $taxonomy = array();

	# Stores Taxonomy Arguments.
	public $taxonomy_args = array();

	public $helper = null;
	public $field_module = null;

	# Stores info about meta boxes added by user.
	public $meta_boxes = array();

	public function __construct( $name = false, $args = array(), $labels = array() ){

	    if( !$name ){
	    	return;
	    }

	    # Initializing Variables
	    $this->helper           = Main::get_instance( 'helper' );
	    $this->field_module     = Main::get_instance( 'field' );
	    $this->post_type        = $this->helper->uglify( $name ); 
	    $this->post_type_args   = $args;
	    $this->post_type_labels = $labels;

	    # Add action to register the post type, if the post type does not already exist
	    if( !post_type_exists( $this->post_type ) ){
	      add_action( 'init', array( $this, 'register_post_type' ) );
	    }

	    # Listen for the save post hook
	    add_action( 'save_post', array( $this, 'save' ) );
	}

	# Registers Custom Post Type 
	public function register_post_type(){

	    if( isset( $this->post_type_labels[ 'menu_name' ] ) ){

	    	$name   = $this->post_type_labels[ 'menu_name' ];
	    	$plural = $this->helper->pluralize( $name );
	    }else{

	    	# Capitilize the words and make it plural
	    	$name   = $this->helper->beautify( $this->post_type );
	    	$plural = $this->helper->pluralize( $name );
	    }

	    # We set the default labels based on the post type name and plural. 
	    # We overwrite them with the given labels.

	    $defaults = array(
			'name'               => esc_html( $plural ),
			'singular_name'      => esc_html( $name ),
			'add_new'            => esc_html__( 'Add New ', 'wc-booster' ),
			'add_new_item'       => esc_html__( 'Add New ', 'wc-booster' ) . esc_html( $name ),
			'edit_item'          => esc_html__( 'Edit ', 'wc-booster' ) . esc_html( $name ),
			'new_item'           => esc_html__( 'New ', 'wc-booster' ) . esc_html( $name ),
			'all_items'          => esc_html__( 'All ', 'wc-booster' ) . esc_html( $plural ),
			'view_item'          => esc_html__( 'View ', 'wc-booster' ) . esc_html( $name ),
			'search_items'       => esc_html__( 'Search ', 'wc-booster' ) . esc_html( $plural ),
			'not_found'          => esc_html__( 'No ', 'wc-booster') . esc_html( strtolower( $plural ) ) . esc_html__( ' found', 'wc-booster' ),
			'not_found_in_trash' => esc_html__( 'No ', 'wc-booster') . esc_html( strtolower( $plural ) ) . esc_html__( ' found in Trash', 'wc-booster' ), 
			'menu_name'          => esc_html( $plural )
		);

	    # merge the default labels with the labels give by user
	    $labels = array_merge( $defaults, $this->post_type_labels );

	    # Same principle as the labels. We set some defaults and overwrite them with the given arguments.
	    $defaults = array(
		      'label'             => $plural,
		      'labels'            => $labels,
		      'public'            => true,
		      'show_ui'           => true,
		      'supports'          => array( 'title', 'editor' ),
		      'show_in_nav_menus' => true,
		      '_builtin'          => false,
		      'show_in_rest'      => false,
		      'has_archive'       => true
		);

	    $args = array_merge( $defaults, $this->post_type_args );

	    # Register the post type
	    register_post_type( $this->post_type, $args );   
	}

	# Registers Taxonomy
	# Hooked @init
	public function register_taxonomy(){

		foreach ($this->taxonomy as $key => $tax ) {
			if( taxonomy_exists( $tax ) ){
				register_taxonomy_for_object_type( $tax, $this->post_type );
			}else{
				register_taxonomy( $tax, $this->post_type, $this->taxonomy_args[ $key ] );
			}
		}
	}

	# Add Taxonomy in init hook
	public function add_taxonomy( $name, $args = array(), $labels = array() ){

		if( ! empty( $name ) ){

			$this->taxonomy[] = $this->helper->uglify( $name );

			$name   = isset( $labels[ 'menu_name'] ) ? $labels[ 'menu_name' ] : $this->helper->beautify( $name );
	        $plural = $this->helper->pluralize( $name );
			
			# Default labels, overwrite them with the given labels.
			$defaults = array(
	           'name'              => esc_html( $plural ),
	           'singular_name'     => esc_html( $name ),
	           'add_new_item'      => esc_html__( 'Add New ', 'wc-booster' ) . esc_html( $name ),
	           'edit_item'         => esc_html__( 'Edit ', 'wc-booster' ) . esc_html( $name ),
	           'search_items'      => esc_html__( 'Search ', 'wc-booster' ) . esc_html( $plural ),
	           'all_items'         => esc_html__( 'All ', 'wc-booster' ) . esc_html( $plural ),
	           'parent_item'       => esc_html__( 'Parent ', 'wc-booster' ) . esc_html( $name ),
	           'parent_item_colon' => esc_html__( 'Parent ', 'wc-booster' ) . esc_html( $name ),
	           'update_item'       => esc_html__( 'Update ', 'wc-booster' ) . esc_html( $name ),
	           'new_item_name'     => esc_html__( 'New ', 'wc-booster' ) . esc_html( $name ),
	           'menu_name'         => esc_html( $name ),
            );

            $labels = array_merge( $defaults, $labels );

            # Default arguments, overwritten with the given arguments
            $defaults = array(
	           'label'             => $plural,
	           'labels'            => $labels,
	           'hierarchical'      => true,
	           'public'            => true,
	           'show_ui'           => true,
	           'show_in_nav_menus' => true,
	           'show_in_rest'	   => true
            );

            $this->taxonomy_args[] = array_merge( $defaults, $args );

        	# Add the taxonomy to the post type
        	add_action( 'init', array( $this, 'register_taxonomy' ) );  
		}
	}

	# Stores all the meta boxes into the array and add it for registration.
	public function add_fields( $title, $fields = array(), $context = 'normal', $priority = 'default' ){
		
		$boxes = array(
			'id'       => $this->helper->uglify( $title ),
			'title'    => $this->helper->beautify( $title ),
			'fields'   => $fields,
			'context'  => $context,
			'priority' => $priority
		);

		$this->meta_boxes[] = $boxes;

		add_action( 'add_meta_boxes_' . $this->post_type, array( $this, 'register_meta_box' ) );
	}

	# Registers all the meta boxes from the array.
	public function register_meta_box(){

		if( is_array( $this->meta_boxes ) ){
			foreach( $this->meta_boxes as $meta ){

				add_meta_box( $meta[ 'id' ], $meta[ 'title' ], array( $this, 'render_meta_box' ), $this->post_type, $meta[ 'context' ], $meta[ 'priority' ], $meta[ 'fields' ] );
			}
		}
	}

	public function render_meta_box( $post, $box ){

		if( is_array( $box[ 'args' ] ) ){
			wp_nonce_field( 'wc_booster_custom_fields_meta_nonce', 'name_meta_nonce' );
			$class = 'single-mode';
		?>
			<div class="wc-booster-custom-fields-wrapper clearfix">
				<div class="wc-booster-custom-fields">
						<div class="wc-booster-custom-fields-tab-wrapper">
							<?php if( count( $box[ 'args' ] ) > 1 ): $class = 'tab-mode'; ?>
								<ul class="wc-booster-custom-fields-tab-navigation">
									<?php $count = 0; foreach( $box[ 'args' ] as $section => $fields ): ?>
										<li>
											<a href="#<?php echo esc_attr( $this->helper->uglify( $section ) ); ?>" class="wc-booster-custom-fields-tab-menu <?php echo $count == 0 ? 'active' : ''; ?>">
												<?php echo esc_html( $this->helper->beautify( $fields[ 'label' ] ) ); ?>
											</a>
										</li>
									<?php $count++; endforeach; ?>
								</ul>
							<?php endif; ?>

							<div class="<?php echo esc_attr( $class ); ?> wc-booster-custom-fields-tab">
								<?php $count = 0; foreach( $box[ 'args' ] as $section => $fields ): ?>

									<?php
										$active = $count == 0 ? 'active' : ''; 
										$fields = $fields[ 'fields' ];
									?>

									<div id="<?php echo esc_attr( $this->helper->uglify( $section ) ); ?>" 
										class="wc-booster-custom-fields-single-tab <?php echo esc_attr( $active ); ?>"
									>
										<?php
											foreach( $fields as $key => $field ){

												if( !metadata_exists( 'post', $post->ID, $key ) && is_array( $field ) && isset( $field[ 'default' ] ) ){
													$value = $field[ 'default' ];
												}else{
													$value = get_post_meta( $post->ID, $key, true );
												}

												if( is_array( $field ) && isset( $field[ 'type' ] ) ){

													$field[ 'id' ] = $field[ 'name' ]  = $key;
													$field[ 'value' ] = $value;

													$this->field_module->render( $field );
												}
											}
										?>
									</div>
								<?php $count++; endforeach; ?>
							</div>
						</div>
				</div>
			</div>
			<?php
		}
	}

	public function save( $post_id ){
	     	
		if ( empty( $_POST ) || !isset(  $_POST[ 'name_meta_nonce' ] ) || ! wp_verify_nonce( $_POST[ 'name_meta_nonce' ], 'wc_booster_custom_fields_meta_nonce' ) ) {
			return;
		}

		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		# Don't update on Quick Edit
		if (defined('DOING_AJAX') ) {
			return $post_id;
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		if ( $this->post_type === $_POST[ 'post_type' ] ) {
			# do stuff
			foreach( $this->meta_boxes as $meta ){
				foreach( $meta[ 'fields' ] as $section => $fields){
					$fields = $fields[ 'fields'];
					foreach( $fields as $id => $field ){

						if( 'separator' == $field[ 'type' ] )
							continue;

						if( 'repeater' == $field[ 'type' ] ){
							$value = $this->helper->sanitize_repeater( $_POST[ $id ] );
						}else{
							$value = $this->helper->sanitize(array(
								'type'  => $field[ 'type' ],
								'value' => isset( $_POST[ $id ] ) ? sanitize_text_field( $_POST[ $id ] ) : ''
							));
						}

						update_post_meta( $post_id, $id, $value );

					} 
				}
			}
		}
	}
}