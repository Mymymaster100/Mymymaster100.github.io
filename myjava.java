var click = 0; 
var cpc = 1;
var c = document.getElementById("click");
var p = document.getElementById("cpc");
function click() {
    click += cpc;
    c.innerHTML = click;
}
function buy() {
    if (click >= 10) {
        click -= 10;
        cpc += 1;
    }
    p.innerHTML = cpc;
}
