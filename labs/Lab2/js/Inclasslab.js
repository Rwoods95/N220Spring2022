// N220 Section 28238
// Rashard Woods
// In class lab
// Janurary 20 2022
//


function setup() {
  createCanvas(400, 400);
  background(220, 200, 200);

}

function draw() {
  
//  noStroke();
  stroke(200, 20, 20);
  fill(200,220,20,90);
  ellipse(mouseX,mouseY,40,50);
    if (mouseIsPressed) {
       ellipse(mouseX, mouseY,100,100);
     }
    
}

