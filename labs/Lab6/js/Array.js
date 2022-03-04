/*

Rashard Woods
NEWM-N 220 
Feburary 20, 2022

*/
let big = document.getElementById("bigNum");

//styling big div as a rectangle
big.style.backgroundColor = "#9298a1";
big.style.height = "100px";
big.style.width = "500px";

let bigArray = [up, up, down, down, down, left,right,left,right,a,b,start];  // array values

for(let i = 0; i < bigArray.length; i++)
{
    big.innerHTML += bigArray[i] + ", ";
}