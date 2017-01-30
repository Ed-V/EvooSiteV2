$(function () {

//Check if elements are already in view

    fadeIn();


//bind events for fade

    $(window).on("scroll resize", $.throttle(250, function () {
        fadeIn();
    }));


    function fadeIn() {


        function isScrolledIntoView(elem) {

            var top_of_element = $(elem).offset().top;
            var bottom_of_element = $(elem).offset().top + $(elem).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).height();
            var result = false;

            if (((bottom_of_screen >= top_of_element) && ($(window).scrollTop() <= top_of_element)) || ((bottom_of_screen >= bottom_of_element) && ($(window).scrollTop() <= bottom_of_element)) || (bottom_of_screen <= bottom_of_element && $(window).scrollTop()>top_of_element)) {
                result = true;
            }

            return result;

        }

        $(".fadeScroll").each(function (index, element) {
            if (isScrolledIntoView(element)) {
                jQuery(element).animate({opacity: 1.0}, 500);
            }
        });
    }

});


