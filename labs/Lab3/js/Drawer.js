/*

Rashard Woods
NEWM-N 220 
Feburary 1, 2022

*/
	

let xPos = 0;
let yPos;
let cameraSize;

//^declares my x and y variables 

function setup() {
    createCanvas(900, 800);
  }
  
  function draw(){      
    background(220);

    makeCamera(xPos + width / 2, 20);

    makeCamera(xPos + width / 9, 10);

    makeCamera(xPos + width / 4, 300);
  }

  //^ Declares 3 positions that I use later for the composition

function makeCamera(xPos, yPos, cameraSize){
    rect(xPos, yPos, 300, 200);
    circle(xPos +150, yPos +95, 100);
}

//^ Draws a rectangle at the positions declared before
//^ but also draws a circle at those positions plus some