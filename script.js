var clicks = 0;
var cpc = 1;
var c = document.getElementById("clicking");
var c2 = document.getElementById("clicking2");
var c3 = document.getElementById("clicking3");
const button = document.querySelector("button");
const buybutton = document.querySelector("buybutton");
function click() {
    clicks += cpc;
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Miles Clicker";
}
function buy() {
    if (clicks > 9) {
        clicks -= 10;
        cpc += 1;
    }
    c3.textContent = "You Have " + cpc + " CPC.";
}
button.addEventListener("click", click);
buybutton.addEventListener("buy", buy);