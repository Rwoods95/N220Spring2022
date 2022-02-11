/*

Rashard Woods
NEWM-N 220 
Feburary 10, 2022

*/
	
let box = {width:100, height:150, color:"red", x:600, y:550}

function setup(){
    createCanvas(windowWidth,windowHeight-10)
    background(100)
}

function draw(){

    drawBox(box)
}

function drawBox(obj){
    fill(obj.color)
    rect(obj.x,obj.y,obj.width,obj.height)
}