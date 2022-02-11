// N220 Section 28238
// Rashard Woods
// Red Remover
// Feburary 1 2022
//


let r = 170; //Declared my red color value.
	

	function setup() { 
	  createCanvas(900, 800); 
	} 
	

	function noRed(){ //Creates a function which makes my red value equal 0.
	  r = 0
	}
	

	function draw() { //draws the circle with given colors, but then calls noRed function-
	  background(20); //which makes r = 0.
	  
	  let c = color(r, 200, 150);
	

	  fill(c);
	  
	  circle(450, 375, 150); 
	

	  noRed()
	} 

