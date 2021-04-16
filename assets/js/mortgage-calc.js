//======================Start Mortgage Calculator Credit to Adam Khoury https://www.youtube.com/watch?v=vkBiEuZSq9s ==============================//
function calcLoan() {
    //Make variables
    //use parseFloat() returns a floating point number.
    let amount = parseFloat(document.getElementById("amount").value);
    let iterest_rate = parseFloat(document.getElementById("iterest_rate").value);
    let years = parseFloat(document.getElementById("years").value);
  
    //Calculate interest
    let interest = (amount * (iterest_rate * 0.01)) / years ;//create numeric percentige
    //Calculate the mountly payment
    let payment = ((amount / (years * 12)) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Formating -add comma after every 3 digits
  
    document.getElementById("payment").innerHTML = "MONTHLY REPAYMENTS  €" + payment;
  }

//======================End Mortgage Calculator==============================//

// EmailJs https://www.emailjs.com/
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
  //clear imput field after sending
  document.getElementById("myForm").reset();
  return false;
}