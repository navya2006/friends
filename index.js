// Disappearing Navbar

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 300) {
        $(".navb").css("background-color","#10bac9");
        $("a").css("color","#000");
    } else {
        $(".navb").css("background-color","transparent");
        $("a").css("color","#fff");
    }
}); 