// Disappearing Navbar

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 400) {
        $(".navb").css("background-color","#ebc634");
        $(".link").css("color","#000");
        $(".link").removeClass("white");
    } else {
        $(".navb").css("background-color","transparent");
        $(".link").css("color","#fff");
        $(".link").addClass("white");
    }
}); 