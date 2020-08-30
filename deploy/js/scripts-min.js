function hideShowMainNav(){console.log("hide or show nav"),$("#main-nav").toggle()}gsap.registerPlugin(ScrollTrigger);var leftHomeTimeline=gsap.timeline();leftHomeTimeline.from("#home-part-1",{duration:1,xPercent:-5}),ScrollTrigger.create({trigger:"#introduction",start:"top 90%",end:"bottom 90%",animation:leftHomeTimeline,toggleActions:"resume none none none",scrub:1});var rightHomeTimeline=gsap.timeline();rightHomeTimeline.from("#home-part-2",{duration:1,xPercent:5}),ScrollTrigger.create({trigger:"#introduction",start:"top 80%",end:"bottom 80%",animation:rightHomeTimeline,toggleActions:"resume none none none",scrub:1});var leftTwoHomeTimeline=gsap.timeline();leftTwoHomeTimeline.from("#home-part-3",{duration:1,xPercent:-5}),ScrollTrigger.create({trigger:"#introduction",start:"top 50%",end:"bottom 50%",animation:leftTwoHomeTimeline,toggleActions:"resume none none none",scrub:1});var rightTwoHomeTimeline=gsap.timeline();rightTwoHomeTimeline.from("#home-part-4",{duration:1,xPercent:5}),ScrollTrigger.create({trigger:"#introduction",start:"top 40%",end:"bottom 40%",animation:rightTwoHomeTimeline,toggleActions:"resume none none none",scrub:1});var cardPhotoTimeline=gsap.timeline();cardPhotoTimeline.from(".card-photo",{duration:.5,alpha:0,yPercent:-15}),ScrollTrigger.create({trigger:".cards",start:"top 80%",end:"bottom 80%",animation:cardPhotoTimeline,toggleActions:"resume none none none",scrub:1});var cardWordsTimeline=gsap.timeline();cardWordsTimeline.from(".card-words",{duration:.5,alpha:0,yPercent:15}),ScrollTrigger.create({trigger:".cards",start:"top 80%",end:"bottom 80%",animation:cardWordsTimeline,toggleActions:"resume none none none",scrub:1}),console.log("page loads");var careTitleTimeLine=gsap.timeline(),bannerSpeed=1.5;careTitleTimeLine.from("#section1-header h1",{duration:bannerSpeed,xPercent:40,alpha:0},"pageLoads").from("#section1-header h2",{duration:bannerSpeed,yPercent:-100,alpha:0},"pageLoads").from("#arrow-1",{duration:1,rotation:270,alpha:0},"arrow"),careTitleTimeLine.play();var carePara1TimeLine=gsap.timeline();carePara1TimeLine.from("#para-1",{duration:bannerSpeed,alpha:0,xPercent:-50},"para1"),ScrollTrigger.create({trigger:"#section-1-content",start:"top 30%",animation:carePara1TimeLine,toggleActions:"resume none none none",id:"care-section1"});var careLlama1TimeLine=gsap.timeline();careLlama1TimeLine.from("#llama-cream",{duration:bannerSpeed,alpha:0,xPercent:100},"llamaCream"),ScrollTrigger.create({trigger:"#llama-cream",start:"top 30%",animation:careLlama1TimeLine,toggleActions:"play none none none",id:"cream-llama"});var careFootstepsGroup1TimeLine=gsap.timeline();careFootstepsGroup1TimeLine.from("#footstep-1",{duration:.75,alpha:0},"footstep1").from("#footstep-2",{duration:.75,alpha:0,yPercent:-50},"footstep2").from("#footstep-3",{duration:.75,alpha:0,yPercent:-50},"footstep3"),ScrollTrigger.create({trigger:"#footstep-1",start:"top 30%",animation:careFootstepsGroup1TimeLine,toggleActions:"play none none none",id:"care-footsteps1"});var carePara2TimeLine=gsap.timeline();carePara2TimeLine.from("#para-2",{duration:bannerSpeed,alpha:0,yPercent:-50},"para2"),ScrollTrigger.create({trigger:"#para-2",start:"top 30%",animation:carePara2TimeLine,toggleActions:"play none none none",id:"care-paragraph2"});var careFootstepsGroup2TimeLine=gsap.timeline();careFootstepsGroup2TimeLine.from("#footstep-4",{duration:.75,alpha:0},"footstep4"),ScrollTrigger.create({trigger:"#footstep-4",start:"top 30%",animation:careFootstepsGroup2TimeLine,toggleActions:"play none none none",id:"care-footsteps2"});var carePara3TimeLine=gsap.timeline();carePara3TimeLine.from("#para-3",{duration:bannerSpeed,alpha:0,yPercent:-50},"para3"),ScrollTrigger.create({trigger:"#para-3",start:"top 30%",animation:carePara3TimeLine,toggleActions:"play none none none",id:"care-paragraph3"});var careFootstepsGroup3TimeLine=gsap.timeline();careFootstepsGroup3TimeLine.from("#footstep-5",{duration:.75,alpha:0},"footstep5").from("#footstep-6",{duration:.75,alpha:0,yPercent:-50},"footstep6"),ScrollTrigger.create({trigger:"#footstep-5",start:"top 30%",animation:careFootstepsGroup3TimeLine,toggleActions:"play none none none",id:"care-footsteps3"});var carePara4TimeLine=gsap.timeline();carePara4TimeLine.from("#para-4",{duration:bannerSpeed,alpha:0,xPercent:50},"para4"),ScrollTrigger.create({trigger:"#para-4",start:"top 30%",animation:carePara4TimeLine,toggleActions:"play none none none",id:"care-paragraph4"});var careFootstepsGroup4TimeLine=gsap.timeline();careFootstepsGroup4TimeLine.from("#footstep-7",{duration:.75,alpha:0},"footstep7"),ScrollTrigger.create({trigger:"#footstep-7",start:"top 30%",animation:careFootstepsGroup4TimeLine,toggleActions:"play none none none",id:"care-footsteps4"});var careLlama2TimeLine=gsap.timeline();careLlama2TimeLine.from("#llama-brown",{duration:bannerSpeed,alpha:0,xPercent:-70},"llamaBrown"),ScrollTrigger.create({trigger:"#llama-brown",start:"top 30%",animation:careLlama2TimeLine,toggleActions:"play none none none",id:"brown-llama"});var carePara5TimeLine=gsap.timeline();carePara5TimeLine.from("#para-5",{duration:bannerSpeed,alpha:0,yPercent:50},"para5"),ScrollTrigger.create({trigger:"#para-5",start:"top 50%",animation:carePara5TimeLine,toggleActions:"play none none none",markers:!0,id:"care-paragraph5"});var fredTimeline=gsap.timeline();fredTimeline.from("#fred",{duration:1,alpha:0,yPercent:50}),ScrollTrigger.create({trigger:"#fred",start:"top 90%",animation:fredTimeline}),$("#burger").on("click",hideShowMainNav),$("#main-nav li button").on("click",hideShowMainNav),$(document).ready((function(){$("#show-form-btn").on("click",(function(){$("#contact-button-section").hide(),$("#form-container").show()}))}));