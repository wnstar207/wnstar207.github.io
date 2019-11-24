var day = new Date();
var dayName = mesg.getDay();
if (dayName === 0) {
    document.getElementById("day1").innerHTML = "Sunday";
    document.getElementById("day2").innerHTML = "Monday";
    document.getElementById("day3").innerHTML = "Tuesday";
    document.getElementById("day4").innerHTML = "Wednesday";
    document.getElementById("day5").innerHTML = "Thursday";
    }
    else if (dayName === 1) {
        document.getElementById("day1").innerHTML = "Monday";
        document.getElementById("day2").innerHTML = "Tuesday";
        document.getElementById("day3").innerHTML = "Wednesday";
        document.getElementById("day4").innerHTML = "Thursday";
        document.getElementById("day5").innerHTML = "Friday";
        }
        else if (dayName === 2) {
            document.getElementById("day1").innerHTML = "Tuesday";
            document.getElementById("day2").innerHTML = "Wednesday";
            document.getElementById("day3").innerHTML = "Thursday";
            document.getElementById("day4").innerHTML = "Friday";
            document.getElementById("day5").innerHTML = "Saturday";
            }
            else if (dayName === 3) {
                document.getElementById("day1").innerHTML = "Wednesday";
                document.getElementById("day2").innerHTML = "Thursday";
                document.getElementById("day3").innerHTML = "Friday";
                document.getElementById("day4").innerHTML = "Saturday";
                document.getElementById("day5").innerHTML = "Sunday";
                }
                else if (dayName === 4) {
                    document.getElementById("day1").innerHTML = "Thursday";
                    document.getElementById("day2").innerHTML = "Friday";
                    document.getElementById("day3").innerHTML = "Saturday";
                    document.getElementById("day4").innerHTML = "Sunday";
                    document.getElementById("day5").innerHTML = "Monday";
                    }
                    else if (dayName === 5) {
                        document.getElementById("day1").innerHTML = "Friday";
                        document.getElementById("day2").innerHTML = "Saturday";
                        document.getElementById("day3").innerHTML = "Sunday";
                        document.getElementById("day4").innerHTML = "Monday";
                        document.getElementById("day5").innerHTML = "Tuesday";
                        }
                        else {
                            document.getElementById("day1").innerHTML = "Saturday";
                            document.getElementById("day2").innerHTML = "Sunday";
                            document.getElementById("day3").innerHTML = "Monday";
                            document.getElementById("day4").innerHTML = "Tuesday";
                            document.getElementById("day5").innerHTML = "Wednesday";
                            }