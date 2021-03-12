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