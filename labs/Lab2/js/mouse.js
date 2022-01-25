/*

Rashard Woods
NEWM-N 220 
Janurary24, 2022

*/

function setup() {
createCanvas(400, 300); // create canvas //
}

var diameter = 40; // diameter of circle //

function draw() {
background("orange"); // background color//
  
if(mouseX>200) // if statement for right side of canvas 
{
fill("red"); //color or circle //
circle(mouseX,mouseY,diameter);
}
else
{
fill("blue"); //color of circle //
circle(mouseX,mouseY,diameter);
}
}