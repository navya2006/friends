// Disappearing Navbar

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 300) {
        $(".navb").css("background-color","#bababa");
        $("a").css("color","#000");
        $("a").removeClass("white");
    } else {
        $(".navb").css("background-color","transparent");
        $("a").css("color","#fff");
        $("a").addClass("white");
    }
}); 