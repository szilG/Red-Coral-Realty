//======================Start Mortgage Calculator==============================//
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

//======================End Mortgage Calculator==============================//