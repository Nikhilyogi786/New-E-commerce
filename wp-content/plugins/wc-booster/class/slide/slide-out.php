<?php 
if( !class_exists( 'WC_Booster_Slide_Out' ) ){
	class WC_Booster_Slide_Out{
		
		public $path = '';
		public $id   = '';
		public $mode = 'slide';

		protected static $objects = [];

		protected static $rendered = false;

		public function __construct( $args ){
			
			$this->path = trailingslashit( $args[ 'path' ] );
			$this->id   = $args[ 'id' ];
			$this->mode = isset( $args[ 'mode' ] ) ? $args[ 'mode' ] : $this->mode;

			self::$objects[ $this->id ] = $this;

			$hook = isset( $args[ 'hook' ] ) ? $args[ 'hook' ] : 'wp_body_open';
			add_action( $hook, array( $this, 'render' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ) );
		}

		public function scripts(){
			wp_enqueue_style( 'slide-out',  $this->path . 'slide-out.css' );
			wp_enqueue_script( 'slide-out', $this->path . 'slide-out.js', array( 'jquery' ) );
		}

		public function render(){
			
			if( !self::$rendered ){
				echo '<div class="slide-out-overlay" aria-hidden="true"></div>';
			}
			
			?>
			<div class="slide-out-content-wrapper mode-<?php echo esc_attr( $this->mode ); ?> wc-booster-circular-focus" id="<?php echo esc_attr( $this->id ); ?>" tabindex="-1" role="dialog" aria-hidden="true">
				<?php do_action( 'before_slide_out_content', $this ); ?>
				<a href="#" class="slide-out-close" aria-label="<?php esc_attr_e( 'Close', 'wc-booster' ); ?>">
					<span aria-hidden="true">
						<?php 
							/**
							 * Prints out hardcoded html from within this plugin
							 * 
							 * @see class/icons.php, inc/mini-cart.php, inc/quick-view.php
							 * 
							 */ 
							$close_icon_safe = apply_filters( 'slide_out_close_text', 'x', $this );
							echo $close_icon_safe;
						?>
					</span>
				</a>

				<div class="slide-out-content">
					<?php do_action( 'slide_out_content', $this ); ?>
				</div>
			</div>
			<?php
			self::$rendered = true;
		}

		public function toggler(){
			?>
			<div class="slide-out-toggler" data-id="<?php echo esc_attr( $this->id ); ?>">
				<?php do_action( 'slide_out_toggler', $this ); ?>
			</div>
			<?php
		}

		public static function get_instance_by_id( $id ){
			return self::$objects[ $id ];
		}
	}
}