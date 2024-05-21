<?php 
if( !class_exists( 'WC_Booster_Wish_List_Table_Block' ) ){

	class WC_Booster_Wish_List_Table_Block extends WC_Booster_Base_Block{

		public $slug = 'wish-list-table';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Wish List Table';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'This Block renders wishlist items, providing users with a comprehensive view of their saved products for easy management and reference.';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#ffffff" d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>';

	    protected static $instance;
	    
	    public static function get_instance() {
	        if ( null === self::$instance ) {
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

				$title_typo = self::get_initial_responsive_props();
	    			if( isset( $attrs[ 'titleTypo' ] ) ){
	    				$title_typo = self::get_typography_props(  $attrs[ 'titleTypo' ] );
	    		}

	    		$price_typo = self::get_initial_responsive_props();
	    			if( isset( $attrs[ 'priceTypo' ] ) ){
	    				$price_typo = self::get_typography_props(  $attrs[ 'priceTypo' ] );
	    		}

	    		$button_typo = self::get_initial_responsive_props();
	    			if( isset( $attrs[ 'buttonTypo' ] ) ){
	    				$button_typo = self::get_typography_props(  $attrs[ 'buttonTypo' ] );
	    		}

	    		$contentPadding = self::get_dimension_props( 
	    			[ 'padding-right', 'padding-left' ], $attrs[ 'contentPadding' ] 
	    		);

	    		$buttonPadding = self::get_dimension_props( 'padding', 
	    			$attrs[ 'buttonPadding' ]);

	    		$margin = self::get_dimension_props( 
	    			'margin', $attrs[ 'margin' ] 
	    		);	  

	    		$padding = self::get_dimension_props( 
	    			'padding', $attrs[ 'padding' ] 
	    		);	      						
				
				foreach( self::$devices as $device ){

					$styles = [
						[
							'selector' => '',
							'props' => array_merge( $padding[ $device ], $margin[ $device ])
						],
						[
							'selector' => ['.product-contents a', '.product-title-img a'],
							'props' => $title_typo[ $device ]
						],
						[
							'selector' => '.product-price',
							'props' => $price_typo[ $device ]
						],
						[
							'selector' => '.product-contents',
							'props' => $contentPadding[ $device ]
						],
						[
							'selector' => '.wp-element-button',
							'props' => array_merge( $buttonPadding[ $device ], $button_typo[ $device ] )
						]
					];

					self::add_styles([
						'attrs' => $attrs,
						'css'   => $styles,
					], $device );
				}

			}
		}

		public function render( $attrs, $content, $block ) {		
		    $wishlist_instance = WC_Booster_Wishlist::get_instance();
		    $wishlisted_items = $wishlist_instance->get_wishlist();

		    if ( ! is_array( $wishlisted_items ) || empty( $wishlisted_items ) ) {
		        return '<div class="wc-booster-empty-wishlist wc-booster-single-product-block-notice" style="display:block"> '. esc_html__( 'The Wishlist is empty.', 'wc-booster' ) .'</div>';
		    }

		    $product_ids = array_column( $wishlisted_items, 'product_id' );
		    $wishlist_query_args = array(
		        'post_type'      => array( 'product', 'product_variation' ),
		        'post_status'    => array( 'publish', 'trash' ),
		        'posts_per_page' => -1,
		        'post__in'       => $product_ids,
		        'orderby'        => 'post__in',
		        'order'          => 'asc'
		    );

		    $wishlists = new WP_Query( $wishlist_query_args );

		    if ( ! $wishlists->have_posts() ) {
		        return '<div class="wc-booster-empty-wishlist wc-booster-single-product-block-notice" style="display:block"> '. esc_html__( 'The Wishlist is empty.', 'wc-booster' ) .'</div>';
		    }

		    ob_start(); ?>
		    <div id="<?php echo  esc_attr( $attrs[ 'block_id' ] ); ?>" class="wc-booster-wishlist-page <?php echo esc_attr( $attrs[ 'align' ]); ?>">
				<?php  
					if ( $attrs[ 'layout' ] == 'grid' ) {
				    	$this->grid_template( $wishlists );
				    }else{
				    	$this->table_template( $wishlists );
				    }
				?>	
			</div>
			<?php
		    wp_reset_postdata();
		    return ob_get_clean();
		}

		public function table_template( $wishlists ){ ?>
			<table class="wc-booster-wishlist-table">
		        <thead class="wc-booster-table-head">
		            <tr>
		                <th><?php  esc_html_e( 'SN', 'wc-booster' ); ?></th>
		                <th><?php  esc_html_e( 'Product', 'wc-booster' ); ?></th>
		                <th><?php  esc_html_e( 'Price', 'wc-booster' ); ?></th>
		                <th><?php  esc_html_e( 'Quantity', 'wc-booster' ); ?></th>
		                <th></th>
		            </tr>
		        </thead>
		        <tbody>
		            <?php foreach ( $wishlists->posts as $i => $product_post ) :
		                $product = wc_get_product( $product_post->ID ); ?>
		                <tr>
		                    <td class="product-count"><?php echo $i + 1; ?></td>
		                    <td class="product-title-img">
		                        <a href="<?php echo esc_url( $product->get_permalink() ); ?>">
		                            <?php echo $product->get_image( array( 100, 80 ) ) ?>
		                            <?php echo esc_html( $product->get_title() ); ?>
		                        </a>
		                    </td>
		                    <td class="product-price"><?php echo $product->get_price_html(); ?></td>
		                    <td class="product-qty">
								<?php $qty =  get_post_meta( $product->get_id(), '_stock', true ); ?>
								<?php echo woocommerce_quantity_input( null != $qty ? array( 'input_value' => $qty, 'min_value' => 1 ) : array( 'min_value' => 1 ), $product ); ?>
								<input type="hidden" class="prod-id" name="prod_id" value="<?php echo esc_attr( $product->get_id() ); ?>"/>
							</td>
		                    <td class="add-to-cart-btn">
		                        <?php
		                        $add_to_cart_args = array(
		                            'add-to-cart' => $product->get_id()
		                        );
		                        $qty = isset( $qty ) ? $qty : 1;
		                        ?>
		                        <?php echo do_shortcode( '[add_to_cart quantity="' . $qty . '" show_price="false" style="" id="' . $product->get_id() . '"]' ); ?>

		                        <button class="product-remove-btn" data-id="<?php echo esc_attr( $product_post->ID ); ?>">
		                            <i class="fa-regular fa-trash-can"></i>
		                        </button>
		                    </td>
		                </tr>
		            <?php endforeach; ?>
		        </tbody>
		    </table>

		<?php
		}

		public function grid_template( $wishlists ){ ?>
			<div class="wc-booster-wishlist-grid">
				<?php foreach ( $wishlists->posts as $i => $product_post ) :
	                $product = wc_get_product( $product_post->ID );   
	                	?>

	                	<div class="wc-booster-product-block">
		                    <div class="product-img">
		                        <?php echo $product->get_image( array( 100, 80 ) ) ?>
		                    </div>
		                    <div class="product-contents">
		                        <a href="<?php echo esc_url( $product->get_permalink() ); ?>">
		                            <?php echo esc_html( $product->get_title() ); ?>
		                        </a>
		                    	<span class="product-price"><?php echo $product->get_price_html(); ?></span>
		                    </div>
		                    <div class="product-button">
		                    	<span class="add-to-cart-btn">
			                        <?php
			                        $add_to_cart_args = array(
			                            'add-to-cart' => $product_post->ID
			                        );
			                        $qty = isset( $qty ) ? $qty : 1;
			                        ?>
			                        <?php echo do_shortcode( '[add_to_cart quantity="' . $qty . '" show_price="false" style="" id="' . $product_post->ID . '"]' ); ?>
			                    </span>
		                    </div>
	                	</div>
	            	<?php 
	        	endforeach; ?>	
			</div>
		<?php	
		}
	}

	WC_Booster_Wish_List_Table_Block::get_instance();
}