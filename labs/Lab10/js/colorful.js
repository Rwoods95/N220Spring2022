/*
Rashard Woods
NEWM-N 220
April 10, 2022
*/


const threesquare = {
    squareone: null, // created const in order to avoid global variables
    squaretwo: null,
    squarethree: null
};

function main () {

    let squareone = document.createElement("div"); // creates div
        squareone.style.backgroundColor = "grey" // original color to be grey
        squareone.style.width = "200px"; // width of div
        squareone.style.height = "200px"; // height of div
        squareone.style.float = "left"; // float to the left
        squareone.setAttribute("data-color", "red"); // set the attribute to red we will get attribute in function
        squareone.addEventListener("click", newcolor) // new color is the handler will be activated with function below
        document.body.appendChild(squareone) // append to call on everything above
    squareone.style.margin = "5px" // space the divs out by a margin of 5 pixels 

    let squaretwo = document.createElement("div"); // creates div
        squaretwo.style.backgroundColor = "grey" // color of div
        squaretwo.style.width = "200px"; // width of div
        squaretwo.style.height = "200px"; // height of div
        squaretwo.style.float = "left"; // floats to the left of each other
        squaretwo.setAttribute("data-color", "green"); // set attribute to green data color will be called below
        squaretwo.addEventListener("click", newcolor) // once clicked new color will be our function below
        document.body.appendChild(squaretwo) // append square two so this div can function
    squaretwo.style.margin = "5px" // space the div by 5 pixel

    let squarethree = document.createElement("div"); // square three div created
        squarethree.style.backgroundColor = "grey" // color of div when its not pressed
        squarethree.style.width = "200px"; // width per assignment
        squarethree.style.height = "200px"; // height per assignment
        squarethree.style.float = "left"; // float to the left so it can look like the pic of assingmnet
        squarethree.setAttribute("data-color", "blue"); // set attribute and data-color will be called below
        squarethree.addEventListener("click", newcolor) // once clicked we want to be blue as stated above
        document.body.appendChild(squarethree) // this is the end of square 3 we append so it saves this
    squarethree.style.margin = "5px" // space squarethree out by 5 pixels
}

function newcolor(event) { // new color is handler and event parameter
    event.target.style.background = event.target.getAttribute("data-color") // this calls on all attributes that were set to the specific divs
}