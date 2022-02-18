/*

Rashard Woods
NEWM-N 220 
Feburary 15, 2022

*/
let dvPeakPixels = document.getElementById("peakPixels");

dvPeakPixels.style.backgroundColor = "#124708"; //background color
dvPeakPixels.style.width = "100px";
dvPeakPixels.style.height = "100px";

function increase() {
    //.offsetWidth/Height allows the variable to keep changing
    let ogWidth = dvPeakPixels.offsetWidth;
    let ogHeight = dvPeakPixels.offsetHeight;
    let bigger = 1.1;

    //[+"px"] targets the size
    let diffWidth = ogWidth * bigger + "px";
    let diffHeight = ogHeight * bigger + "px";

    //new width & height when clicked
    dvPeakPixels.style.width = diffWidth;
    dvPeakPixels.style.height = diffHeight;
}