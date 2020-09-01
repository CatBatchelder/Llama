
// function to handle the showing and hiding of the main-nav
function hideShowMainNav(){
    console.log("hide or show nav");
    //toggles the css display property
    $("#main-nav").toggle();
}

$( document ).ready(function() {
    (function() {
        var x = document.getElementById("main-nav");
        x.style.display = "none";
  })();
});