<?php 
if( !class_exists( 'WC_Booster_Wish_List_Button_Block' ) ){

	class WC_Booster_Wish_List_Button_Block extends WC_Booster_Base_Block{

		public $slug = 'wish-list-button';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = 'Wish List Button';

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = 'This Block adds a convenient \'Add to Wishlist\' button to products, enabling users to save items for later viewing or purchase.';

				/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#ffffff" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>';

		protected static $instance;
		protected static $attributes = [];

		public static $count = 1;

		public $settings;

		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function prepare_scripts(){ 

			foreach( self::$attributes as $id => $attrs ){

				$attrs[ 'block_id' ] = $id;

				if( in_array( $attrs[ 'block_id' ], $this->block_ids ) ){
					continue;
				}

				$this->block_ids[] = $attrs[ 'block_id' ];
				
				$left = $top = $iconSize = self::get_initial_responsive_props();
				if( isset( $attrs[ 'position' ] ) ){
					$left = self::get_dimension_props( [ '', 'left' ], $attrs[ 'position' ] );
				}			

				if( isset( $attrs[ 'position' ] ) ){
					$top = self::get_dimension_props( 'top', $attrs[ 'position' ] );
				}				

				if( isset( $attrs[ 'iconSize' ] ) ){
					$iconSize = self::get_dimension_props( 'font-size',
						$attrs[ 'iconSize' ]
					);
				}

				$padding = self::get_dimension_props( 'padding', $attrs[ 'padding' ] );

				foreach( self::$devices as $device ){

					$styles = [
						[
							'selector' => '',
							'props' => array_merge( $top[ $device ], $left[ $device ] )
						],
						[
							'selector' => '.wc-booster-wishlist-button',
							'props' => $iconSize[ $device ]
						],
						[
							'selector' => '.slick-cloned .wc-booster-wishlist-button',
							'props' => $iconSize[ $device ]
						],
						[
							'selector' => '.wc-booster-wishlist-button i',
							'props' => $padding[ $device ]
						]
					];

					self::add_styles([
						'attrs' => $attrs,
						'css'   => $styles,
					], $device );
				}

				$desktop_css = [
					[
						'selector' => '',
						'props' => array_merge(
							[ 
								'position' => 'iconPosition',
							]
						)
					],
					[
						'selector' => '.wc-booster-wishlist-button i',
						'props' => [
							'color' => 'iconColor',
							'background-color' => 'bgColor',
							'border-radius' => [
								'unit' => '%',
								'value' => $attrs[ 'borderRadius' ]
							]
						]
					],
					[
						'selector' => '.wc-booster-wishlist-button.added i',
						'props'    => [
							'color' => 'selectedIconColor'
						]
					],
				];

				self::add_styles( array(
					'attrs' => $attrs,
					'css'   => $desktop_css,
				));
			}
		}

		public function render( $attrs, $content, $block ) {

			$this->settings = WC_Booster_Settings::get_instance();
			$page_id =$this->settings->get_field( 'wishlist_page_id' );
			$product_id =  is_product()  ? wc_get_product()->get_id() : '' ;

			$post_id = $block->context[ 'postId' ] ?? $product_id;

			$post_type = get_post_type( $post_id );

			if ( empty( $post_id ) && $post_type != 'product' ) {
				return;
			}

			$product = wc_get_product( $post_id );
			if( !$product ){
				return '';
			}

			$id = "wc-booster-wishlist-button-instance-" . time() .'-' . self::$count;
			// save attributes to print styles from prepare_scripts function
			self::$attributes[ $id ] = $attrs;

			$wishlist = [];

			if( is_user_logged_in() ){
				$user_id = get_current_user_id();
				$wishlist = get_user_meta( $user_id, 'wc_booster_wishlist', true );
			} elseif ( isset( $_COOKIE[ 'wc_booster_wishlist' ] ) ) {
				$wishlist = unserialize( stripslashes( $_COOKIE[ 'wc_booster_wishlist' ] ), [ 'allowed_classes' => false ] );
			}

			$class = '';
			$wishlist_count = 0 ;
			if( $wishlist ){
				$wishlist_count = count( $wishlist );
				foreach( $wishlist as $list ) {
					if( $list[ 'product_id' ] == $post_id ){
						$class = 'added';
						break; 
					}
				}
			}

			ob_start();
			?>
			<div id="<?php echo esc_attr( $id ); ?>" class="wc-booster-wishlist-button-wrapper <?php echo esc_attr( $attrs[ 'align' ]) ?>">
				<button data-item_id="<?php echo esc_attr( $product->get_id() ) ?>" data-count="<?php echo esc_attr( $wishlist_count ) ?>" class="wc-booster-wishlist-button <?php echo esc_attr( $class ) ?>" data-url="<?php echo esc_url( get_permalink( $page_id ) ); ?>">
					<i class="fa-regular fa-heart " aria-hidden="true"></i>
				</button>
			</div>
			<?php
			self::$count++;
			return ob_get_clean();
		}
	}

	WC_Booster_Wish_List_Button_Block::get_instance();
}