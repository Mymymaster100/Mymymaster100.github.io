var clicks = 0; 
var cpc = 1;
var c = document.getElementById("click");
var p = document.getElementById("cpc");
function click() {
    clicks += 1;
    c.innerHTML = clicks;
}
function buy() {
    if (clicks > 9) {
        clicks -= 10;
        cpc += 1;
    }
    p.innerHTML = cpc;
}
