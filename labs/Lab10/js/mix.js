/*
Rashard Woods
NEWM-N 220
Novemember 20, 2020
*/

const controls = {
    div: null,
    colors: ["red", "green", "blue"], // three colors that will be used
    button: [1, 5, 10], // buttons to say 1, 5, 10 depending on what we want to add
    rgb: [0, 0, 0] // create an array to make the numbers add on when clicked
};


function main() {
    
        controls.div = document.createElement("div"); // creates the div
        controls.div.style.backgroundColor = "black"; // color of div
        controls.div.style.width = "400px"; // width of the div
        controls.div.style.height = "200px"; // height of div
        document.body.appendChild(controls.div) // must use append to create everything we mentioned above

        divtwo = document.createElement("div"); // creates the div
        divtwo.style.backgroundColor = "grey" // this will create a grey background
        divtwo.style.width = "300px"; // width of the div
        divtwo.style.height = "50px"; // height of div
        divtwo.innerHTML = controls.rgb // use this in last line to count the color 
        document.body.appendChild(divtwo) // appends div two

    let i = 0;
    while(i < controls.colors.length) { // drennen suggested I create a while loop in order to get length of colors which is red, green, and blue
        press(controls.colors[i], i); // will create 3 colors listed above
        i++;
    }
}

function press(color, index) { // used press to call the while loop
    let title = document.createElement("h3") // creates the heading of red green blue
    title.innerHTML = color // set innerHTML to color
    document.body.appendChild(title) // append child to get the title

    for (i = 0; i < controls.button.length; i++){ // used a for loop to get the button 1, 5, 10


        let colors = document.createElement("button"); // creates the div
            colors.style.backgroundColor = "white"; // color of div
            colors.style.width = "100px"; // width of the div
            colors.style.height = "100px"; // height of div
            colors.setAttribute("data-color", colors); // will change color when button is clicked 
            colors.addEventListener ("click", button); // add event listener of click built in function and increase will be function below
            colors.innerHTML = "+" + controls.button[i]; // add if the button is clicked without this the color would probably turn back to normal if clicked once
            colors.setAttribute("data-value", controls.button[i]) // create value for button that will be used below
            colors.classList.add(index) // classList will be called below to separate colors
        document.body.appendChild(colors) // must use append to create everything we mentioned above
    }
}




function button(event) { // call on button from line 50 
    for(i = 0; i < controls.button.length; i++){  // create for loop to call on all buttons 1,5,10
        if (controls.button[i] == event.target.getAttribute("data-value")){ // get the attribute that we set in line 52
            let j = event.target.classList[0] // allows the colors to change without this it would be blue for 10 green for 5 red for 1 on all buttons
            controls.rgb[j] += Number(event.target.getAttribute("data-value")) // will get the array of rgb and turn value into number
        }
    }
    controls.div.style.backgroundColor = "rgb(" + controls.rgb + ")" // calls on the controls.rgb and adds to it once it is clicked
    divtwo.innerHTML = "current color: rgb: " + controls.rgb; // counts the current color
    
    
    

}



