var clicks = 0;
var c = document.getElementById("clicking");
var c2 = document.getElementById("clicking2");
const button = document.querySelector("button");
function click() {
    clicks += 1;
    c.textContent =  "You Have " + clicks + " Clicks";
    c2.textContent = clicks + " - Miles Clicker";
}
button.addEventListener("click", click);