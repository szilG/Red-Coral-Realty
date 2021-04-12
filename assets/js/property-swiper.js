//Swiper - Credit to Vladimir Kharlampidi https://github.com/nolimits4web/Swiper/blob/master/demos/150-freemode.html
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },  
      541: {
        slidesPerView: 2,  
      },
      1024: {
        slidesPerView: 3,  
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });


// EmailJs Credit  https://www.emailjs.com/
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