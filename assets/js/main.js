/*--Scroll on move---*/
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
  viewFactor: 0.2
});


//=====================Back to Top button============================//
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 200) { // Show backToTopButton
      backToTopButton.style.display = "block";
    }
  
  else { // Hide backToTopButton
      backToTopButton.style.display = "none";
    };
    
  
}

backToTopButton.addEventListener("click", BackToTop);


function BackToTop(){
  window.scroll(0, 0);
}

//=====================End Back to Top button============================//