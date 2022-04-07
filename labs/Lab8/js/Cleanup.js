/*

Rashard Woods
NEWM-N 220 
April 2, 2022

*/


let cleaned = document.getElementById("cleaned");
let string = document.getElementById("string");

function octoRemover() {
    let stringVal = string.value;
    let stringClean = stringVal.replace(/#/g,"");
    cleaned.innerHTML = stringClean;
}