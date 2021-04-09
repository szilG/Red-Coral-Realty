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
});


  