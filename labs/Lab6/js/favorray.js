/*

Rashard Woods
NEWM-N 220 
Feburary 20, 2022

*/
let fav = document.getElementById("fav");

//style fav div as a  square
fav.style.backgroundColor = "#9298a1"; //color
fav.style.height = "300px";
fav.style.width = "300px";

//array of strings
let favArray = ["music", "playing games", "working out", "painting", " shopping"];

//for loop with a conditional of the array length
for (let i = 0; i < favArray.length; i++)
{
    //favArray[i] has an index of i to follow for loop
    let itemAtIndex = favArray[i];
    //variable to not repeat statement
    //<br /> puts statement at a new line
    let statement = itemAtIndex + ", is one of my favorite things. <br />";

    //+= displays all statements, = displays only one
    fav.innerHTML += statement;
}