var clicks = 0;
var cpc = 1;
var savetext = ""
var c = document.getElementById("clicking");
var c2 = document.getElementById("clicking2");
var c3 = document.getElementById("clicking3");
var c4 = document.getElementById("save");

const button = document.querySelector("button");
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
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Miles Clicker";
}
function buy10() {
    if (clicks > 99) {
        clicks -= 100;
        cpc += 10;
    }
    c3.textContent = "You Have " + cpc + " CPC.";
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Miles Clicker";
}
function buy100() {
    if (clicks > 999) {
        clicks -= 1000;
        cpc += 100;
    }
    c3.textContent = "You Have " + cpc + " CPC.";
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Miles Clicker";
}
function save() {
    let add = clicks + cpc;
    savetext = "CLI=" + clicks + ";CLIS=" + add;
    c4.textContent = savetext;
}
function load() {
    let text = document.getElementById("input");
    var num1 = 0;
    var num2 = 0;
    var error2 = false;
    if (text[0] == "C" && text[1] == "L" && text[2] == "I" && text[3] == "=") {
        var on = true;
        var on2 = 3;
        var num3 = "";
        while(on) {
            on2 += 1;
            if (text[on2] == ";") {
                on = false;
            } else {
                if (parseInt(text[on2]) != NaN) {
                    num3 += text[on2];
                } else {
                    error2 = true;
                    on = false;
                }
            }
        }
        if (error2) {

        } else if (text[on2 + 1] == "C" && text[on2 + 2] == "L" && text[on2 + 3] == "I" && text[on2 + 4] == "S" && text[on2 + 5] == "=") {
            on2 += 5;
            on = true;
            var num4 = "";
            while(on) {
                on2 += 1;
                if (text[on2] == ";") {
                    on = false;
                } else {
                    if (parseInt(text[on2]) != NaN) {
                        num4 += text[on2];
                    } else {
                        error2 = true;
                        on = false;
                    }
                }
            }
            if (error2) {

            } else {
                num1 = parseInt(num3);
                num2 = parseInt(num4) - parseInt(num3);
                clicks = num1;
                cpc = num2;
                c3.textContent = "You Have " + cpc + " CPC.";
                c.textContent =  "You Have " + clicks + " Clicks.";
                c2.textContent = clicks + " - Miles Clicker";
            }
        } else {

        }
    } else {
        error2 = true;

    }
}
button.addEventListener("click", click);