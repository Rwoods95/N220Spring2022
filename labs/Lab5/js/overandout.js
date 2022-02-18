/*

Rashard Woods
NEWM-N 220 
Feburary 15, 2022

*/
let dvOverOut = document.getElementById("overOut");

dvOverOut.style.backgroundColor = "#1019b5"; //background color
dvOverOut.style.width = "100px";
dvOverOut.style.height = "100px";

// when mouse is on the div
function black() {
    dvOverOut.style.backgroundColor = "#000"; // color when mouse is on the div
}

// when the mouse is not on the div
function blue() {
    dvOverOut.style.backgroundColor = "#1019b5"; //color when mouse is not on the div
}