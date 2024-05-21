(function( $ ){

	var SlideOut = {
		init: function(){
			$( document ).on( 'slide-out', this.handleTriggerSlideOut );
			$( document ).on( 'click', '.slide-out-toggler a, .slide-out-toggler button, a.slide-out-toggler, button.slide-out-toggler', this.handleSlideOut );
			$( document ).on( 'click', '.slide-out-close, .slide-out-overlay', this.handleClose );
		},
		bodyCls: 'show-slide-out',
		triggerButton: false,
		handleTriggerSlideOut: function( e, id, $button ){

			SlideOut.triggerButton = $button;

			$( '.slide-out-content-wrapper' ).hide();
			$( '#' + id ).show();
			$( 'body' ).addClass( SlideOut.bodyCls );

			setTimeout(function(){
				$( '#' + id + ' .slide-out-close' ).trigger( 'focus' );
			},100);
		},
		handleSlideOut: function( e ){
			e.preventDefault();
			var id = $( this ).closest( '.slide-out-toggler' ).data( 'id' );
			$( document ).trigger( 'slide-out', [ id, $( this ) ] );
		},
		handleClose: function( e ){

		    e.preventDefault();
		    $( 'body' ).toggleClass( SlideOut.bodyCls );

		    setTimeout(function(){
		        if( !$( 'body' ).hasClass( SlideOut.bodyCls ) ){
		        	// if closed, make focus to the trigger button
		        	if( SlideOut.triggerButton.length > 0 ){
		        		SlideOut.triggerButton.trigger( 'focus' );
		        	}
		        }
		    });
		}
	};

	SlideOut.init();

})(jQuery);