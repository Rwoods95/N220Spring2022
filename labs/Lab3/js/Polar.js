/*

Rashard Woods
NEWM-N 220 
Feburary 10, 2022

*/
	

function setup() {
  createCanvas(900, 800);
}

function polarPoint(r){ //polar point function
  var x = r*Math.sin(mouseX);// create an x variable and set it to r * Math.sin(mouseX);
  var y = r*Math.cos(mouseX); //Create a Y variable, set it to the result of r * Math.cos(mouseX)//

  return createVector(x,y); //write return createVector(x,y); 
}

function draw(){
  
  var res = polarPoint();
  translate(100,100);
  background(150);
  circle(res.x, res.y, 10)
  console.log(res)
}