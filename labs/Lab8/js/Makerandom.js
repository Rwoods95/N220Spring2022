/*

Rashard Woods
NEWM-N 220 
April 2, 2022

*/

let numDisplay = document.getElementById("randNumDisplay");

function randNum() {
    makeRandNum();
    numDisplay.innerHTML= randomNum;
}

function makeRandNum() {
    randomNum = Math.floor(Math.random() * 11);
}