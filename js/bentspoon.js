// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 400, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//MixItUp responsive filtering portfolio
$(function () {
    
    var filterList = {
    
        init: function () {
        
            // MixItUp plugin
            // http://mixitup.io
            $('#memberlist').mixItUp({
                targetSelector: '.member-entry',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });             
        
        },
        
        hoverEffect: function () {
        
            // Simple parallax effect
            $('#memberlist .member-entry').hover(
                function () {
                    $(this).find('.label').stop().animate({bottom: 25}, 500, 'easeOutQuad');
                    $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');             
                },
                function () {
                    $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');                               
                }       
            );              
        
        }

    };
    
    // Run the show!
    filterList.init();
    
});
