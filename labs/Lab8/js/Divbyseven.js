/*

Rashard Woods
NEWM-N 220 
April 2, 2022

*/


let number = document.getElementById("number");
let trueFalse = document.getElementById("trueFalse");

function divide(number) {
    divResults();
}

function divResults() {
    let numberVal = Number(number.value);
    if(numberVal % 7 == 0) {
        trueFalse.innerHTML = "true"
    } else {
        trueFalse.innerHTML = "false"
    }
}