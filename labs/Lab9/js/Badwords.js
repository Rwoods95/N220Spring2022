/*

Rashard Woods
NEWM-N 220 
April 10, 2022

*/
let input = document.getElementById("input");
let output = document.getElementById("output");

function badword(){
var word = input.value;
var split = word.split(" ");
var count = 0;

for(i=0; i<=split.length; i++){
    if(split[i]=="clear" || split[i]=="water" || split[i]=="tires"){
        count += 1;
        
    }
    output.innerHTML = count+" bad words were found";
}
}