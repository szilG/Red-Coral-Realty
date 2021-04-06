// EmailJs
function sendMail(contactForm) {
    emailjs.send("service_jjtjd9i", "template_fqa1rfl", {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value,
        message2 : contactForm.message2.value
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