/*

Rashard Woods
NEWM-N 220 
March 22, 2022

*/

const tips = { // use const, no global variables are used
    text : null,
    calculates : null
};

function tip() {

    tips.text = document.createElement("input"); // this will create input
    tips.text.style.fontSize = "12px"; // the font size
    tips.text.style.color = "green"; // color of text
    tips.text.style.width = "160px"; // width of the text
    tips.text.style.height = "50px"; // text height
    tips.text.setAttribute("placeholder", "total"); // allows the box to say total before you write in it
    tips.text.setAttribute("type", "number"); // type a number in the total
    document.body.appendChild(tips.text);// defines const tips and variable text
// the calculates variable below
    tips.calculates = document.createElement("button"); // button created
    tips.calculates.style.fontSize = "12px"; // font size
    tips.calculates.style.width = "120px"; // the width of button
    tips.calculates.style.height = "20px"; // height of button
    tips.calculates.style.position = "absolute"; // absolute position allows button to be in absolute
    tips.calculates.style.left = "60px"; // the position on left
    tips.calculates.style.top = "120px"; // the position at the top
    tips.calculates.innerHTML = "Calculate"; // this will write calculate
    tips.calculates.addEventListener("click", calculatestips); // when you click button it will do the following below
    document.body.appendChild(tips.calculates); // defines const and variable calculates

}

function calculatestips(){
    let tipamount = (.1 * Number(tips.text.value)) // tip is at 10%
    
document.writeln("Tip:$" + tipamount + "Total:$" + (Number(tips.text.value)+ Number (tipamount))); // this will show your total after the tip amount
}

