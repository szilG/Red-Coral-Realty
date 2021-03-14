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
  viewFactor: 0.2
});
//=============End ScrollReveal --Scroll on move-- ======//

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


//======================Start Mortgaga Calculator==============================//
function calcLoan() {
    //Make variables
    let amount = document.getElementById("amount").value;
    let iterest_rate = document.getElementById("iterest_rate").value;
    let years = document.getElementById("years").value;
  
    //Calculate interest
    let interest = (amount * (iterest_rate * .01)) / years //create numeric percentige
    //Calculate the mountly payment
    let payment = ((amount / (years * 12)) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Formating -add comma after every 3 digits
  
    document.getElementById("payment").innerHTML = "MONTHLY REPAYMENTS = €" + payment;
    // if () {
    //   payment.classList.add("payment_box");
    // } else {
    //   payment.classList.remove("payment_box");
    // }
  }

//======================End Mortgaga Calculator==============================//


//===========Start To initialize Swiper in JS================//

const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Optional parameters
    loop: true,
    'spaceBetween' : 20,
    'centeredSlides': true,
    breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
        },  
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
      }
  });
//===========End To initialize Swiper in JS================//



//===============Start Request Location Form=========================//
$(document).ready(function() {
  //load location data
  load_json_data('location');

  function load_json_data(id, parent_id) {
      let item = ''; //defined a variable
      //fetch data from json file
      $.getJSON('ie.json', function(data) {

          item += '<option value="">Select ' + id + '</option>';
          //fetch array of data one by one
          $.each(data, function(key, value) {
              if (id == 'location') {
                  if (value.parent_id == '0') {
                      item += '<option value="' + value.id + '">' + value.city + '</option>';
                  }
              } else {
                  if (value.parent_id == parent_id) {
                      item += '<option value="' + value.id + '">' + value.city + '</option>';
                  }
              }
          });
          $('#' + id).html(item);
      });

  }

  $(document).on('change', '#location', function() {
      var location_id = $(this).val();
      if (location_id != '') {
          load_json_data('area', location_id);
      } else {
          $('#area').html('<option value="">Select Area</option>');
      }
  });
  
});
//===============End Request Location Form=========================//