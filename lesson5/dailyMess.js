var mesg = new Date();
var dailyMesg = mesg.getDay();
if (dailyMesg === 0) {
    document.getElementById("dailyMess").innerHTML = "Have a good weekend!";
    }
    else if (dailyMesg === 6) {
        document.getElementById("dailyMess").innerHTML = "Have a good weekend!";
        }
        else if (dailyMesg === 4) {
            document.getElementById("dailyMess").innerHTML = "Is it Friday yet?"
            }
            else {}