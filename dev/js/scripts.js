// @codekit-prepend "scrollTriggerReg.js";
// @codekit-prepend "scrollTrigger.js";
// @codekit-prepend "konva.js";
// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "main-nav/nav-global.js";
// @codekit-prepend "main-nav/burger-click.js";
// @codekit-prepend "main-nav/main-nav-click.js";
// @codekit-prepend "main-nav/nav-scroll.js";


$( document ).ready(function() {

    $("#show-form-btn").on("click", function(){
       //console.log("button clicked");
 
       // hide contact-button-section
       $("#contact-button-section").hide();
 
       // show form container
       $("#form-container").show();
 
    });
 
 });