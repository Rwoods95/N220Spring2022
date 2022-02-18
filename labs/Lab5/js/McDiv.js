/*

Rashard Woods
NEWM-N 220 
Feburary 15, 2022

*/

let dvText = document.getElementById("text")
let amount = 0; //track of how many times code is ran


dvText.style.backgroundColor = "#89c797";//background color
dvText.style.width = "300px";
dvText.style.height = "300px";

function appendText() {
    amount++;     //each time function is run, amount increases by 1 

    let text = "mc";
    if (amount > 3) text = "divdivdiv";

    //text inside div
    dvText.innerHTML = text;

}