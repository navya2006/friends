// Disappearing Navbar

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 300) {
        $(".navb").css("background-color","#10bac9");
        $(".link").css("color","#000");
    } else {
        $(".navb").css("background-color","transparent");
        $(".link").css("color","#fff");
        $("a::after").css("background","#000");
    }
}); 

// SIDENAV 
function openNav(){
    document.getElementById("sidenav").style.width="100%";
}
function closeNav () {
    document.getElementById("sidenav").style.width="0";
}

//Loader
var myVar;
   function myFunction() {
      myVar = setTimeout(showPage, 1000);
   }
    
   function showPage() {
      document.getElementById("load").style.display = "none";
      document.getElementById("mainbod").style.display = "block";
   } 