var clicks = 0;
var c = document.getElementById("clicking");
var c2 = document.getElementById("clicking2");
function click() {
    clicks += 1;
    c.innerHTML =  "You Have " + clicks + " Clicks";
    c2.innerHTML = clicks + " - Miles Clicker";
}