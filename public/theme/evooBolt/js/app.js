$(document).foundation();

//Animate fragments
$(window).load(function () {
    $('body').fragmentScroll();
});

//Unhide the body once page has finished loading
$(function () {
    Pace.on("done", function () {
        $(".hiddenLoading").css("visibility", "visible");

    });
});

