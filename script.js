var clicks = 0;
var cpc = 1;
var savetext = "";
var clickers = 0;
var c = document.getElementById("clicking");
var c2 = document.getElementById("clicking2");
var c3 = document.getElementById("clicking3");
var c4 = document.getElementById("save");
var c5 = document.getElementById("error");
var c6 = document.getElementById("clicking4");
const button = document.querySelector("button");
function click() {
    clicks += cpc;
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Clicker";
}
function start() {
    setTimeout(add1, 1000);
}
function add1() {
    clicks += clickers;
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Clicker";
    start();
}
function buyClicker() {
    if (clicks > 49) {
        clicks -= 50;
        clickers += 1;
        c.textContent =  "You Have " + clicks + " Clicks.";
        c2.textContent = clicks + " - Clicker";
        c6.textContent = clickers;
    }
}
function buy() {
    if (clicks > 9) {
        clicks -= 10;
        cpc += 1;
    }
    c3.textContent = "You Have " + cpc + " CPC.";
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Clicker";
}
function buy10() {
    if (clicks > 99) {
        clicks -= 100;
        cpc += 10;
    }
    c3.textContent = "You Have " + cpc + " CPC.";
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Clicker";
}
function buy100() {
    if (clicks > 999) {
        clicks -= 1000;
        cpc += 100;
    }
    c3.textContent = "You Have " + cpc + " CPC.";
    c.textContent =  "You Have " + clicks + " Clicks.";
    c2.textContent = clicks + " - Clicker";
}
function save() {
    let add = clicks + cpc;
    savetext = "CLI=" + clicks + ";CLIS=" + add + ";";
    savetext = savetext.hashCode();
    c4.textContent = savetext;
}
String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }
function load() {
    let text = document.getElementById("input").value;
    let text2 = document.getElementById("input2").value;
    let text3 = document.getElementById("input3").value;
    if (parseInt(text2) != NaN && parseInt(text3) != NaN) {
        let add = parseInt(text2) + parseInt(text3);
        t = "CLI=" + parseInt(text2) + ";CLIS=" + add + ";";
        if (t.hashCode() == text) {
            text = t;
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
            c5.textContent = "Hey! That Is Wrong!";
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
                c5.textContent = "Hey! That Is Wrong!";
            } else {
                if (parseInt(num3) != NaN && parseInt(num4) != NaN) {
                    num1 = parseInt(num3);
                    num2 = parseInt(num4) - parseInt(num3);
                    clicks = num1;
                    cpc = num2;
                    c3.textContent = "You Have " + cpc + " CPC.";
                    c.textContent =  "You Have " + clicks + " Clicks.";
                    c2.textContent = clicks + " - Clicker";
                    c5.textContent = "";
                } else {
                    clicks = 0;
                    cpc = 1;
                    c3.textContent = "You Have " + cpc + " CPC.";
                    c.textContent =  "You Have " + clicks + " Clicks.";
                    c2.textContent = clicks + " - Clicker";
                    c5.textContent = "Hey! That Is Wrong!";
                }
            }
        } else {}
    } else {
        error2 = true;
        c5.textContent = "Hey! That Is Wrong!";
    }
        }
    } else {
        c5.textContent = "Hey! That Is Wrong!";
    }
    
}
button.addEventListener("click", click);
start();
