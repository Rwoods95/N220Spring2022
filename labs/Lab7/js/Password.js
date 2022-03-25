/*

Rashard Woods
NEWM-N 220 
March 23, 2022

*/

const button = { // using const to establish variables that way they are not gloabl scope
    div : null,
    text : null,
    password : null,
    continue : null,
    output : null
};

function main() {

    button.text = document.createElement("input") // this will create input
    button.text.style.FontSize = "12px" // font size
    button.text.style.color = "black" // color of text
    button.text.style.width = "140px" // width of the text
    button.text.style.height = "36px" // height of text
    button.text.setAttribute("placeholder", "Username") // allows username to appear
    button.text.setAttribute("type", "text") // allows you to type a text and not numbers
    document.body.appendChild(button.text) // defines const and variable text

    button.password = document.createElement("input") // this will create input
    button.password.style.fontSize = "12px"; // font size
    button.password.style.color = "black"; // color of password variable
    button.password.style.width = "140px"; // width of password
    button.password.style.height = "36px"; // height of password
    button.password.setAttribute("placeholder", "Enter password") // enter password bar next to username
    document.body.appendChild(button.password) //defines const and password variable

    button.continue = document.createElement("button") // creates button
    button.continue.style.fontSize = "12px"; // fontsize 
    button.continue.style.width = "180px"; // width of continue variable
    button.continue.style.height = "50px"; // height of continue variable
    button.continue.style.position = "absolute"; // position of the continue variable
    button.continue.style.left = "360px"; // continue variable on the left
    button.continue.style.top = "20px"; // styles the continue variable on the top of the page
    button.continue.innerHtml = "Enter"; // this will allow enter to be used
    button.continue.addEventListener("click", callPassword) // this will allow the password to be called when defined below
    document.body.appendChild(button.continue) // defines const and continue variable
    button.output = document.createElement("div") // the div is defined in order to create the element
    document.body.appendChild(button.output) // defines const and output variable

}

function callPassword() {
    if (button.text.value = "username" && button.password.value == 'Pa$$w0rd') {
        button.output.innerHTML = "Access Granted"; // if you input the right password which is Pa$$w0rd you will get granted
        return;
    }
    button.output.innerHTML = "Access Denied" // if wrong password you will not be granted
}