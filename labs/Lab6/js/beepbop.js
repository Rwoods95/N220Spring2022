/*

Rashard Woods
NEWM-N 220 
Feburary 20, 2022

*/
let beepBop = document.getElementById("beepBop");

//styling beepBop div as a purple rectangle
beepBop.style.backgroundColor = "#ac8abf";
beepBop.style.height = "500px";
beepBop.style.width = "100px";

//array going up by 2, length 25
let numArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50];

for(let i = 0; i < numArray.length; i++)
{
    //checks if numbers in array is divisible by 3 AND 5
    if(numArray[i] % 3 == 0 && numArray[i] % 5 == 0 ) {
        numArray[i] = "beep bop";
    }

    //checks if numbers in array are divisible by 3
    if(numArray[i] % 3 == 0) {
        numArray[i] = "beep";
    }

    //checks if numbers in array are divisible by 5
    if(numArray[i] % 5 == 0) {
        numArray[i] = "bop";
    }

    //displays 25 numbers and beep bop vertically
    beepBop.innerHTML += numArray[i] + "<br />";
}