$(function(){Pace.on("done",function(){function o(){function o(o){var n=$(o).offset().top,t=$(o).offset().top+$(o).outerHeight(),i=$(window).scrollTop()+$(window).height(),c=!1;return(i>=n&&$(window).scrollTop()<=n||i>=t&&$(window).scrollTop()<=t||i<=t&&$(window).scrollTop()>n)&&(c=!0),c}$(".fadeScroll").each(function(n,t){o(t)&&jQuery(t).animate({opacity:1},500)})}o(),$(window).on("scroll resize",$.throttle(250,function(){o()}))})});