/*

Rashard Woods
NEWM-N 220 
Feburary 20, 2022

*/
let runnerTimes = document.getElementById("times");

//styles div as a gray square box 
runnerTimes.style.backgroundColor = "#9298a1";
runnerTimes.style.height = "100px";
runnerTimes.style.width = "100px";

//array of running times in order from least to greatest
let bestTimes = [20.20, 30.30, 40.45];

//1st place runner in div
runnerTimes.innerHTML = bestTimes[0];

//2nd place runner in div
let times2 = document.createElement("div");
//styling new div
times2.style.backgroundColor = ("#6a92d4");
times2.style.height = "100px";
times2.style.width = "100px";
//place element on page
document.body.appendChild(times2);
times2.innerHTML = bestTimes[1];


//3rd place runner in div
let times3 = document.createElement("div");
//styling new div
times3.style.backgroundColor = ("#9298a1");
times3.style.height = "100px";
times3.style.width = "100px";
//place element on page
document.body.appendChild(times3);
times3.innerHTML = bestTimes[2];