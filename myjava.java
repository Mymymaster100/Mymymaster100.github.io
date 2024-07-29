var click=0; 
var c = document.getElementById("click");
function hi(){
    click+=1;
    alert("click = " + click);
    c.innerHTML = click;
}
function reset(){
    click=0;
    alert("click = " + click);
    c.innerHTML = click;
}
