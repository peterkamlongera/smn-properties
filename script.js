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