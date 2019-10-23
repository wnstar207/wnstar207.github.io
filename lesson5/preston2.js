let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
var today = new Date();
var nowDay = dayNames[today.getDay()];
var nowDate = today.getDate();
var nowMonth = monthNames[today.getMonth()];
var nowYear = today.getFullYear();
document.getElementById("today").innerHTML = nowDay + ", " + nowDate + " " + nowMonth + " " + nowYear;

var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;

function toggleMenu() {
	document.getElementsByClassName("fullNav")[0].classList.toggle("smallNav");
}