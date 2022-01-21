// N220 Section 28238
// Rashard Woods
// World Wrap
// September 2 2020
//


const Player = {
    score : 0,
    posX : 0,
    posY :100,
    

};

const Opponent = {
    score : 0,
    posX : 0,
    posY : 0,
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
    circle(Player.posX, Player.posY, 10);
    let right = keyIsDown(RIGHT_ARROW);

   if (right) {
       Player.posX = Player.posX + 1;

   }
   if (Player.posX > 800) {
       Player.posX = 0;
    }
    let left = keyIsDown(LEFT_ARROW);
    if (left) {
        Player.posX = Player.posX -1;
    }
    if (Player.posX < 0) {
        Player.posX = 800;
    }
    let up = keyIsDown(UP_ARROW);
    if (up) {
        Player.posY = Player.posY - 1;
    }
    if (Player.posY < 0) {
        Player.posY = 600;
    }
    let down = keyIsDown(DOWN_ARROW);
    if (down) {
        Player.posY = Player.posY +1;
    }
    if (Player.posY >600) {
        Player.posY = 0;
    }
 
 
   


} 

