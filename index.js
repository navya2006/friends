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

