    // LOADER
    
    var myVar;
    function myFunction() {
       myVar = setTimeout(showPage, 3000);
    }
     
    function showPage() {
       document.getElementById("load").style.display = "none";
       document.getElementById("mainbod").style.display = "block";
    } 
 

// SIDENAV 
function openNav(){
    document.getElementById("sidenav").style.width="100%";
}
function closeNav () {
    document.getElementById("sidenav").style.width="0";
}

//COMMENTING
function auto_height(elem) {
    elem.style.height = "2px";
    elem.style.height = (elem.scrollHeight) + "px";
}