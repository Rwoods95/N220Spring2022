/*

Rashard Woods
NEWM-N 220 
Feburary 10, 2022

*/
	

let pet = {x:200,y:300,size:20,offsetX:0}

function setup(){
    createCanvas(windowWidth,windowHeight-10)
    background(100)
}

function draw(){
    background(100)
    if(mouseIsPressed){
        if(pet.offsetX>0){
            pet.offsetX -=1
        }
    }else{
        pet.offsetX += 1
    }
    circle(mouseX+pet.offsetX,mouseY,pet.size)
}