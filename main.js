$(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    var welcomeSectionOffset = $(".welcome-title").offset().top - $(window).height() + 100;
    
    if (scrollPos > welcomeSectionOffset) {
        $(".welcome-title").fadeIn(2000);
        $(".welcome-description").fadeIn(3000);
    }
});
