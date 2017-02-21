$(function () {

//Handle IOS Reveal Bug
    if (getMobileOperatingSystem() == 'IOS') {
        $('#fpNewsPopup').addClass('revealIosFixFull');
    }

    /**
     * Determine the mobile operating system.
     * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
     *
     * @returns {String}
     */
    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "IOS";
        }

        return "unknown";
    }
});


//slick
$(document).ready(function () {
    $('#fpSlick').slick({
        autoplay: true,
        mobileFirst: true,
        prevArrow: "#fpSlickPrev",
        nextArrow: "#fpSlickNext",
        appendDots: "#fpSlickDots",
        dots: true
    });

    init();

    $(window).on("resize", $.throttle(250, function () {
        calcFpSlickHeight();
    }));

    $(".title-bar .menu-icon").on("click", function () {
        calcFpSlickHeight();
    });


    function calcFpSlickHeight() {
        //Set up arrows
        var fpSlickHeight = $("#fpSlick").height();
        var fpSlickWidth = $("#fpSlick").width();
        var fpSlickOffset = $("#fpSlick").offset().top;
        var prevArrow = $("#fpSlickPrev");
        var nextArrow = $("#fpSlickNext");



        prevArrow.css("top", (fpSlickHeight / 2) + prevArrow.height() / 2 + fpSlickOffset);
        nextArrow.css("top", (fpSlickHeight / 2) + nextArrow.height() / 2 + fpSlickOffset);
        nextArrow.css("left", fpSlickWidth - nextArrow.width());


        //Set up Text
        $(".fpWorkTextContainer").css("top", (fpSlickHeight / 2) - ($(".fpWorkTextContainer").height() / 2));

    }

    function init() {
        //Set up Nav Dots
        var dots = $("#fpSlickDots li button");

        dots.text("");

        dots.append($("<i class='circle icon'></i>"));

        var textContainer=$(".fpWorkTextContainer");

        if(textContainer.hasClass("fpNoImage")){
            var newNode = $("<div></div>");
            newNode.css("height", textContainer.height()*2);
            newNode.css("width", textContainer.width());

            $(".fpNoImage").before(newNode);
        }


        calcFpSlickHeight();

    }

});
