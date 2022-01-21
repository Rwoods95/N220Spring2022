// N220 Section 28238
// Rashard Woods
// Lab 1
// Janurary 13 2022

// setup gets run when the page gets loaded or refreshed
function setup() {

    //create a canvas
createCanvas(800, 600 );

}

//draw() gets called 60 times every second
function draw() {

    //set the background to blue
    background("blue");

    //set the stroke to orange
    stroke("orange");
    // set the fill to black
    fill("black");  

    // line thickness to 5 pixels
    strokeWeight(5);


    // A triangle
    triangle(600, 300, 200, 100, 310, 80);

    // draw a circle
    circle(200, 46, 70);

    //draw a rectangle
    rect(500, 400, 200, 55);

}

