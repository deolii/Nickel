//Form Validation

function validation(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
  
    error_message.style.padding = "10px";
  
    if (name.length < 5){
         text = "Please Enter Valid Name";
         error_message.innerHTML = text;
         return false;
    }
  
    if (isNaN(phone) || phone.length !=11){
      text = "Please Enter Valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
  
    if (email.length < 6){
      text = "Please Enter Valid Email";
      error_message.innerHTML = text;
      return false;
    }
  
    if (name.length < 10){
      text = "Please Enter Correct Password";
      error_message.innerHTML = text;
      return false;
    }
  
    if (message.length <= 250){
      text = "Please Enter More Than 250 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert ("Form Submitted Successfully!")
    return true;
  }
                    
  // Javascript code to display current time
  // Time is in this format: 12:58:20

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes(); + ":" + today.getSeconds();

  document.getElementById('time').innerHTML = time;

// Write Javascript code here to change the time every second

/* 
You have to use setInterval() function which is a Timing function
*/

var myVar = setInterval (myTimer, 1000);
function myTimer(){
var d = new Date();
document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
