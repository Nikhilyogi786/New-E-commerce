jQuery(document).ready(function(jQuery) {
    jQuery('#customer-reviews-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

    // jQuery('.read-more').click(function(e) {
    //     e.preventDefault();
    //     var postId = jQuery(this).data('postid');
    //     jQuery('#more-' + postId).toggle();
    //     jQuery('#dots-' + postId).toggle();
    // });
    jQuery(document).ready(function($) {
        $('.read-more').click(function(e) {
            e.preventDefault();
            var postId = $(this).data('postid');
            console.log('Clicked on Read More for post ID:', postId); // Debugging
            $('#more-' + postId).toggle();
            $('#dots-' + postId).toggle();
            $('#content-' + postId).toggle(); // Toggle the content
            $(this).text(function(i, text){
                return text === "Read More" ? "Read Less" : "Read More";
            });
        });
    });
    
    jQuery(document).ready(function($) {
        function loadProducts(filters) {
            $.ajax({
                url: ajax_url,
                type: 'GET',
                data: filters,
                success: function(response) {
                    $('#products').html(response);
                }
            });
        }
    
        // Handle filter form submission
        $('#filter-form, #search-form').on('submit', function(e) {
            e.preventDefault();
            let filters = {
                action: 'filter_products',
                product_cat: $('#product_cat').val(),
                min_price: $('#min_price').val(),
                max_price: $('#max_price').val(),
                s: $('#search').val()
            };
            loadProducts(filters);
        });
    
        // Initial load
        loadProducts({ action: 'filter_products' });
    });
    