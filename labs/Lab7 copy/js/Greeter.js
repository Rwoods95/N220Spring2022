/*

Rashard Woods
NEWM-N 220 
March 23, 2022

*/

const greet = {
    text: null,
    Welcome : null,
};

function Welcome() {
    greet.text = document.createElement("input");// creates input
    greet.text.style.fontSize = "12px"; // fontsize
    greet.text.style.color = "blue"; // color of text
    greet.text.style.width = "200px"; // width of text
    greet.text.style.height = "50px"; // height of text
    greet.text.setAttribute("placeholder", "Name") // place holder will write "Name"
    greet.text.setAttribute("type", "text"); // this allows you to type text
    document.body.appendChild(greet.text); // defines greet const and text

    greet.Welcome = document.createElement("button") // creates button
    greet.Welcome.style.fontSize = "12px"; // fontsize of 12
    greet.Welcome.style.width = "200px"; // width of 200 pixels
    greet.Welcome.style.height = "40px"; // height of 40 pixels
    greet.Welcome.style.position = "absolute"; // the position of the button
    greet.Welcome.style.left = "60px";  // to the left 60 pixels
    greet.Welcome.style.top = "50px"; // on top 50 pixels
    greet.Welcome.innerHTML = "Welcome"; // will generate welcome
    greet.Welcome.addEventListener("click", WelcomeUser); // welcome the user by enabling function below
    document.body.appendChild(greet.Welcome); // defines greet const and Welcome variable


}

function WelcomeUser() {
    document.writeln("Hello" + greet.text.value); // this will write Hello Welcome User 
}