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
var nextDay = dayNames[(today.getDay() + 1) % 7];
var thirdDay = dayNames[(today.getDay() + 2) % 7];
var fourthDay = dayNames[(today.getDay() + 3) % 7];
var fifthDay = dayNames[(today.getDay() + 4) % 7];
var nowDate = today.getDate();
var nowMonth = monthNames[today.getMonth()];
var nowYear = today.getFullYear();
document.getElementById("year").innerHTML = nowYear; //for copyright year
document.getElementById("today").innerHTML = nowDay + ", " + nowDate + " " + nowMonth + " " + nowYear; //display Day, Date Month Year
document.getElementById("dayOne").innerHTML = nowDay; //today of 5 day forecast
document.getElementById("dayTwo").innerHTML = nextDay; //tommorow of 5 day forecast
document.getElementById("dayThree").innerHTML = thirdDay; //third day of 5 day forecast
document.getElementById("dayFour").innerHTML = fourthDay; //fourth day of 5 day forecast
document.getElementById("dayFive").innerHTML = fifthDay; //fifth day of 5 day forecast

//change header message based on day of week 
var dailyMesg = today.getDay();
if (dailyMesg == 1) {document.getElementById("dailyMess").innerHTML = "MONDAY";}
    else if (dailyMesg == 2) {document.getElementById("dailyMess").innerHTML = "TUESDAY";}
        else if (dailyMesg == 3) {document.getElementById("dailyMess").innerHTML = "WEDNESDAY";}
            else if (dailyMesg == 4) {document.getElementById("dailyMess").innerHTML = "Is it Friday yet?"}
                else if (dailyMesg == 5) {document.getElementById("dailyMess").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."}
                    else {document.getElementById("dailyMess").innerHTML = "Have a good weekend!";}