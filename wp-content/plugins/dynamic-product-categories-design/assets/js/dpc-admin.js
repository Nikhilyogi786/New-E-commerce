;(function () {

    document.addEventListener("DOMContentLoaded", function(event) {
        // Your code to run since DOM is loaded and ready
        let dpcd_settings_shortcode = document.getElementById('dpcd_settings_shortcode');
        const post_ID_Input = document.getElementById('post_ID');
        const post_ID = (post_ID_Input) ? post_ID_Input.value : '0'
        if(dpcd_settings_shortcode){
          dpcd_settings_shortcode.value = '[dpcd_categories_design id="'+post_ID+'"]';
          dpcd_settings_shortcode.setAttribute('readonly', true);
        }
        
    });
   

    var btns = document.querySelectorAll('.cmb2-id-dpcd-settings-shortcode .cmb2-metabox-description');

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseleave', clearTooltip);
        btns[i].addEventListener('blur', clearTooltip);
    }
    
    function clearTooltip(e) {
        e.currentTarget.setAttribute('class', 'cmb2-metabox-description');
        e.currentTarget.removeAttribute('aria-label');
    }
    
    function showTooltip(elem, msg) {
        elem.setAttribute('class', 'cmb2-metabox-description tooltipped tooltipped-s');
        elem.setAttribute('aria-label', msg);
    }

      var clipboard = new ClipboardJS('.cmb2-id-dpcd-settings-shortcode .cmb2-metabox-description', {
        target: function () {
          return document.querySelector('#dpcd_settings_shortcode');
        },
      });

      clipboard.on('success', function (e) {
        showTooltip(e.trigger, 'Copied!');
      });

})();