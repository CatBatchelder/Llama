var scrollItems =["#gallery", "#section-2"];

console.log(scrollItems[2]);

function scrollIndex(){
    gsap.to(window, {duration: 2, scrollTo:{ y: scrollItems[$('#main-nav ul li').index(this)], offsetY: 60}});
}