function validateForm() {
  var regName = /^[A-Za-z\s]+$/;
  var emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var name = document.forms["contactform"]["name"].value;
  var subject = document.forms["contactform"]["subject"].value;
  var email = document.forms["contactform"]["email"].value;
  var message = document.forms["contactform"]["message"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (!isNaN(name)) {
    alert("No Numerics Allowed");
    return false;
  }
  if(!regName.test(name))
  {
    alert("Invalid Name");
    return false;
  }
  if(!emailcheck.test(email))
  {
    alert("Enter a valid Email Id");
    return false;
  }
  if (subject == "") {
    alert("subject must be filled out");
    return false;
  }
  if (!isNaN(subject)) {
    alert("No Numerics Allowed");
    return false;
  }
  if(!regName.test(subject))
  {
    alert("Invalid Subject");
    return false;
  }
  if (message == "") {
    alert("Must add your message");
    return false;
  }
}