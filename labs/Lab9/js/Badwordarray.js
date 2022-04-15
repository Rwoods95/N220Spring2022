/*

Rashard Woods
NEWM-N 220 
April 10, 2022

*/

let input = document.getElementById("input");
let output = document.getElementById("output");

function badword(){
    var num = input.value;
    var split = num.split(",");
    var count = 0;

    for(i=0; i<=split.length-1; i++){
        if(split[i]==1){
            count += 1;
        }
        if(count==3){
            output.innerHTML = "winner";
        }
    }
}