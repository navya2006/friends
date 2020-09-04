// Disappearing Navbar

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 400) {
        $(".navb").css("background-color","#ebc634");
        $(".link").css("color","#000");
        $(".link::after").css("background","#000");
    } else {
        $(".navb").css("background-color","#000");
        $(".link").css("color","#fff");
        $(".link::after").css("background","#fff");
    }
}); 