/*

Rashard Woods
NEWM-N 220 
March 1 , 2022

*/
//get 6 divs by ID from html
let topBox = document.getElementById("topBox");
let red = document.getElementById("red");
let orange = document.getElementById("orange");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let purple = document.getElementById("purple");

//styling the top box
topBox.style.height = "100px";
topBox.style.width = "100px";
topBox.style.border = "solid #000";
topBox.style.marginBottom = "10px";

//style red div as a square w/ a black border
red.style.height = "100px";
red.style.width = "100px";
red.style.border = "solid #000";
red.style.marginBottom = "10px";
red.style.backgroundColor = "#FFF";

//style orange div as a square w/ a black border
orange.style.height = "100px";
orange.style.width = "100px";
orange.style.border = "solid #000";
orange.style.marginBottom = "10px";

//style yellow div as a square w/ a black border
yellow.style.height = "100px";
yellow.style.width = "100px";
yellow.style.border = "solid #000";
yellow.style.marginBottom = "10px";

//style green div as a square w/ a black border
green.style.height = "100px";
green.style.width = "100px";
green.style.border = "solid #000";
green.style.marginBottom = "10px";

//style blue div as a square w/ a black border
blue.style.height = "100px";
blue.style.width = "100px";
blue.style.border = "solid #000";
blue.style.marginBottom = "10px";

//style pruple div as a square w/ a black border
purple.style.height = "100px";
purple.style.width = "100px";
purple.style.border = "solid #000";
purple.style.marginBottom = "10px";

 
//highlights box selected
function highlight(id) {
    //parameter in html onClick() function will go to unHighlight() function
    this.unHighlight();
    id.style.backgroundColor = "#fa9dfa";
    //box at top will display the text that is in the selected div
    topBox.innerHTML = id.innerHTML;
    
    if(id.style.backgroundColor = "#fa9dfa"){
        id.style.fontWeight = "bold";
    }
}

//unhighlights boxes that are not selected
function unHighlight() {
    //all divs in index.html have the class selected 
    let selected = document.getElementsByClassName("selected");

    //arent selected will be white 
    for(let i=0; i < selected.length; i++)
    {
        let id = selected[i];
        id.style.backgroundColor = "#FFF";

        //the text will also return to normal instead of being bold
        if(id.style.backgroundColor = "#FFF"){
            id.style.fontWeight = "normal";
        }
    }
}