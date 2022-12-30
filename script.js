var $toggleHome = document.getElementById('nav-home');
var $toggleAbout = document.getElementById('nav-about');
var $toggleImpact = document.getElementById('nav-impact');
var $toggleContact = document.getElementById('nav-contact');
var $checkbox = document.getElementById('checkbox');

var toggle_checkbox = function() {
    $checkbox.checked = !$checkbox.checked;
}

$toggleHome.addEventListener('click', toggle_checkbox);
$toggleAbout.addEventListener('click', toggle_checkbox);
$toggleImpact.addEventListener('click', toggle_checkbox);
$toggleContact.addEventListener('click', toggle_checkbox);

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let yourname = id("name"),
  email = id("email"),
  number = id("number"),
  message = id("message"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(yourname, 0, "Name cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(number, 2, "Number cannot be blank");
  engine(message, 3, "Message cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

  }
};