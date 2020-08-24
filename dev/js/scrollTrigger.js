
/* =============
    Homepage
============= */

// message-1 //
var leftHomeTimeline = gsap.timeline();
leftHomeTimeline.from("#home-part-1", {
  duration: 1,
  xPercent: -5
})

ScrollTrigger.create({
  trigger: "#introduction",
  start: "top 90%",
  end: "bottom 90%",
  animation: leftHomeTimeline,
  toggleActions: "resume none none none",
//   id: "#lefthome",
//   markers: true,
  scrub: 1
});

// message-2 //
var rightHomeTimeline = gsap.timeline();
rightHomeTimeline.from("#home-part-2", {
  duration: 1,
  xPercent: 5
})

ScrollTrigger.create({
  trigger: "#introduction",
  start: "top 80%",
  end: "bottom 80%",
  animation: rightHomeTimeline,
  toggleActions: "resume none none none",
//   id: "#lefthome",
//   markers: true,
  scrub: 1
});

// message-3 //
var leftTwoHomeTimeline = gsap.timeline();
leftTwoHomeTimeline.from("#home-part-3", {
  duration: 1,
  xPercent: -5
})

ScrollTrigger.create({
  trigger: "#introduction",
  start: "top 50%",
  end: "bottom 50%",
  animation: leftTwoHomeTimeline,
  toggleActions: "resume none none none",
//   id: "#lefthome",
//   markers: true,
  scrub: 1
});

// message-4 //
var rightTwoHomeTimeline = gsap.timeline();
rightTwoHomeTimeline.from("#home-part-4", {
  duration: 1,
  xPercent: 5
})

ScrollTrigger.create({
  trigger: "#introduction",
  start: "top 40%",
  end: "bottom 40%",
  animation: rightTwoHomeTimeline,
  toggleActions: "resume none none none",
//   id: "#lefthome",
//   markers: true,
  scrub: 1
});

// cards - photos //
var cardPhotoTimeline = gsap.timeline();
cardPhotoTimeline.from(".card-photo", {
  duration: 0.5,
  alpha: 0,
  yPercent: -15
})

ScrollTrigger.create({
  trigger: ".cards",
  start: "top 80%",
  end: "bottom 80%",
  animation: cardPhotoTimeline,
  toggleActions: "resume none none none",
//   id: "#lefthome",
//   markers: true,
  scrub: 1
});

// cards - words //
var cardWordsTimeline = gsap.timeline();
cardWordsTimeline.from(".card-words", {
  duration: 0.5,
  alpha: 0,
  yPercent: 15
})

ScrollTrigger.create({
  trigger: ".cards",
  start: "top 80%",
  end: "bottom 80%",
  animation: cardWordsTimeline,
  toggleActions: "resume none none none",
//   id: "#lefthome",
//   markers: true,
  scrub: 1
});




/* =============
    Care
============= */

