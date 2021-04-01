
//=====================Start Back to Top button============================//
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


// EmailJs
function sendMail(contactForm) {
  emailjs.send("service_jjtjd9i", "template_fqa1rfl", {
      name: contactForm.name.value,
      email: contactForm.email.value,
      phone: contactForm.phone.value,
      message : contactForm.time.value
  })
  .then(function(res) {
      alert('Your mail is sent!');
      console.log("success", res.status);
  },
  function(error) {
      alert('Oops... ' + JSON.stringify(error));
      console.log("Failed", error);
  });
  document.getElementById("myForm").reset();
  return false;
}