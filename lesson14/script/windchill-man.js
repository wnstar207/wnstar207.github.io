var t = parseFloat(document.getElementById("current-temp-man").textContent);
var s = parseFloat(document.getElementById("windSpeed-man").textContent);
var x = Math.pow(s, 0.16);
var f = 35.74 + 0.6215 * t - 35.75 * x + 0.4275 * t * x;
var c = Math.round(f*1)/1;
if (t <= 50 && s > 3) {
    document.getElementById("windchill-man").innerHTML = " " + c + " &#176;F";}
    else {
        document.getElementById("windchill-man").innerHTML = " N/A";
    }