//=============Start ScrollReveal --Scroll on move-- ======//
window.sr = ScrollReveal();
sr.reveal(".navbar" , {
  duration: 2000,
  origin: "bottom"
});
sr.reveal(".move-from-left" , {
  duration: 2000,
  origin: "left",
  distance: "500px",
  viewFactor: 0.2
});
sr.reveal(".move-from-right" , {
  duration: 2000,
  origin: "right",
  distance: "500px",
  viewFactor: 0.2
});
sr.reveal(".box" , {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
  viewFactor: 0.02
});
//=============End ScrollReveal --Scroll on move-- ======//