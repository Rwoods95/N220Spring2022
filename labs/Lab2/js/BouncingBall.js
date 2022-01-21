// N220 Section 28238
// Rashard Woods
// Bouncing Ball
// September 2 2020
//


var Ball = {
    X : 0,
    Y : 200,
    SpeedX : 5,
    SpeedY : 5,
    

};


// setup gets run when the page gets loaded or refreshed
function setup() {

    //create a canvas
createCanvas(800, 600 );

}

//draw() gets called 60 times every second
function draw() {

    background("darkgrey");
    fill("yellow");
    circle(Ball.X, Ball.Y, 10);
    
    if (Ball.X > width || Ball.X < 0) {
       Ball.SpeedX = Ball.SpeedX * -1;
    }
    // if the ball hits the top or the bottom, change the direction of the ball 
    if (Ball.Y > height || Ball.Y < 0) {
        Ball.SpeedY = Ball.SpeedY * -1;
    } 
    Ball.X = Ball.X + Ball.SpeedX;
    Ball.Y = Ball.Y + Ball.SpeedY;


}
  



