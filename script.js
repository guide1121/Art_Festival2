$(document).ready(function() {
    var navbar = $("nav");
    $(window).scroll(function() {
      // Add the 'fixed' class to the navbar when the user scrolls down
      if ($(window).scrollTop() > navbar.offset().top) {
        navbar.addClass("fixed");
      } else {
        navbar.removeClass("fixed");
      }
    });
});