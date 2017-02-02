$(document).foundation();

//Animate fragments
$(window).load(function() {
    $('body').fragmentScroll();
});

//Unhide the body once page has finished loading
$(function () {
  Pace.on("done", function () {
      $("#mainContent").css("visibility", "visible");
      $("#primary-menu").css("visibility", "visible");
      $("#footerContainer").css("visibility", "visible");
  });
});
