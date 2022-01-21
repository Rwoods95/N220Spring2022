/*

Rashard Woods
NEWM-N 220 
September 18, 2020

*/

let ballX = 100; // create variable X to correlate later
let ballY = 60; // create variable Y to correlate later




function setup() {
    createCanvas(800, 600); // this is the canvas 

}

function draw() {
    let dirX = (mouseX - ballX) *.1  // allows the ball to follow the mouse (xaxis) and the multiplication is to delay the trace a little 
    let dirY = (mouseY - ballY) *.1 // allows the ball to follow the mouse (yaxis) 
    background(200); // background color
    
    ballX += dirX // correlate the variable from line 9 with (mouseX - ballX) *.1 
    ballY += dirY // correlate the variabe from line 10 with (mouseY - ballY) *.1
    
    
    
    
    let dist = Math.sqrt(dirX*dirX + dirY*dirY) // distance formula that will calculate the distance from (mouse-origin)
    if (dist < 5) fill("red") // when mouse gets close to the ball it'll turn red 
    else fill("blue"); // otherwise if mouse is more than 5 frames away it'll turn blue
    
    
    circle(ballX, ballY, 50); // define the circle that way it'll correlate with lines 25 & 26


}
