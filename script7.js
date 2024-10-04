var star = 0;
var text1 = document.getElementById("input 1");
var text2 = document.getElementById("total review");

function oneStar() {
  star = 1;
}

function twoStar() {
  star = 2;
}

function threeStar() {
  star = 3;
}

function fourStar() {
  star = 4;
}

function fiveStar() {
  star = 5;
}

function loadThings() {
  let a = "review: " + text1.get() + " rating: " + star;
}
