$(document).ready(function($) {


        $('.animations').find('.btn').on('click', function() {
            loadAnimation(this);
        });

        function loadAnimation(elem) {
            var animationClass = 'animated ' + $(elem).text();
            $(elem).addClass(animationClass).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(elem).removeClass(animationClass);
            });
        }
        /* Sticky navigation */
        $('#mainNav').waypoint('sticky', {
        	direction: "down",
            stuckClass: 'sticky',
            wrapper: '<div class="sticky-wrapper" />',
        });
        $('section').waypoint(function (argument) {
            // body...
        })

        /* Main Nav links scrolling the page */
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                 if (target.length) {
                    $('html,body').stop().animate({
                        scrollTop: target.position().top - $('#mainNav').outerHeight()

                    }, 1000);
                    return false;
                }
            }
        });
});