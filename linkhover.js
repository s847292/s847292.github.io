document.getElementById("navigator").onmouseover = function() {mouseOver()};
document.getElementById("navigator").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("navigator").style.color = "Orange";
}

function mouseOut() {
  document.getElementById("navigator").style.color = "Darkslategray";
}