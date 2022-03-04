/*

Rashard Woods
NEWM-N 220 
March 1, 2022

*/
//get all divs
let score = document.getElementById("score");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let guard = document.getElementById("guard");

//style score div as a square gray box
score.style.height = "100px";
score.style.width = "100px"
score.style.border = "solid #000";
score.style.float = "left";
score.style.margin = "10px";
score.style.textAlign = "center";

//style rock div as a square cream box
rock.style.backgroundColor = "#bdbbb5";
rock.style.height = "100px";
rock.style.width = "100px";
rock.style.float = "left";
rock.style.margin = "10px";
rock.style.textAlign = "center";

//style paper as a square light green box
paper.style.backgroundColor = "#f7eccd";
paper.style.height = "100px";
paper.style.width = "100px";
paper.style.float = "left";
paper.style.margin = "10px";
paper.style.textAlign = "center";

//style scissors as a square div with a border 
scissors.style.backgroundColor = "#afc97f";
scissors.style.height = "100px";
scissors.style.width = "100px";
scissors.style.float = "left";
scissors.style.margin = "10px";
scissors.style.textAlign = "center";

//style guard div as a square brown box
guard.style.backgroundColor = "#ba8d4a";
guard.style.height = "100px";
guard.style.width = "100px";
guard.style.float = "left";
guard.style.margin = "10px";
guard.style.textAlign = "center";


//variable to start score at 0
let scoreNum = 0;
let playerChoice = " ";
let compChoice = " ";


//creating new div for what each player chose
let displayChoice = document.createElement("div");
//style
displayChoice.style.backgroundColor = "#d67c0d";
displayChoice.style.height = "100px";
displayChoice.style.width = "300px";
displayChoice.style.float = "left";
displayChoice.style.margin = "10px";
//place the objects on the page
document.body.appendChild(displayChoice);

function guardSelected() {
    if(guard) {
        playerChoice = "guard";
        scoreNum = scoreNum - .5;
    }
    displayChoice.innerHTML = "YOU: " + playerChoice + "<br />" + "COMPUTER: " + compChoice;
}


function rps(id) {
    //to generate a random move for the computer
    let options = Math.floor(Math.random() * 3) + 1;

    //computers choice
    if(options == 1) {
        compChoice = "rock";
    }

    if(options == 2){
        compChoice = "paper";
    }

    if(options == 3) {
        compChoice = "scissors";
    }

    //players choice
    if(id == rock){
        playerChoice = "rock";
    }

    if(id == paper){
        playerChoice = "paper";
    }

    if(id == scissors) {
        playerChoice = "scissors";
    }

    //results 
    displayChoice.innerHTML = "YOU: " + playerChoice + "<br />" + "COMPUTER: " + compChoice;

    //rps logic
    if(playerChoice == "rock" && compChoice == "scissors") {
        scoreNum++;
    }
    
    if(playerChoice == "rock" && compChoice == "paper") {
        scoreNum = scoreNum - 1;
    }

    if(playerChoice == "paper" && compChoice == "rock") {
        scoreNum++;
    }

    if(playerChoice == "paper" && compChoice == "scissors") {
        scoreNum = scoreNum - 1;
    }

    if(playerChoice == "scissors" && compChoice == "rock") {
        scoreNum = scoreNum - 1;
    }

    if(playerChoice == "scissors" && compChoice == "paper") {
        scoreNum++;
    }

    //score
    score.innerHTML = "SCORE: " + scoreNum;
}
    
