/*
Rashard Woods
NEWM-N 220
April 10, 2022
*/


const controls = {
    flashcard: null,
    questions: [ { question: "What's your favorite college?", answer: "IUPUI"}, // question in an array that way it'll give two questions
    { question: "What's a spiders dream job?", answer: "web designer"},
     { question: "What is your favorite class?", answer: "NEWM-N 220" } ] // second question
};


function main() {
    
        controls.flashcard = document.createElement("div"); // creates the div
        controls.flashcard.style.backgroundColor = "grey"; // color of div
        controls.flashcard.style.width = "200px"; // width of the div
        controls.flashcard.style.height = "200px"; // height of div
        document.body.appendChild(controls.flashcard) // must use append to create everything we mentioned above

    for (i = 0; i < controls.questions.length; i++) {
        let question = document.createElement("button"); // creates the div
        question.style.backgroundColor = "white"; // color of div
        question.style.width = "200px"; // width of the div
        question.style.height = "100px"; // height of div
        question.setAttribute ("data-answer", controls.questions[i].answer); // set attribute to retrieve it in function later and use data-answer to get answer
        question.addEventListener ("click", qhandler); // add event listener of click built in function and increase will be function below
        question.innerHTML = controls.questions[i].question; // this activates the questions from control and turns into button
        document.body.appendChild(question) // must use append to create everything we mentioned above

    }
}

function qhandler(event) { // set parameter to event and qhandler needs to be function name bc of line 29
    
   
    controls.flashcard.innerHTML = event.target.getAttribute ("data-answer") // get attribute allows us to call on the set attribute
}

