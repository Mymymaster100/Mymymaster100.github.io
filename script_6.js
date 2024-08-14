var clicks = 0;
var cpc = 0;
var prestagePoints = 1;
const clickText = document.getElementById("Click Text");

function click() {
  clicks += 1;
  clickText.textContent = "You Have " + " Clicks.";
}
  
