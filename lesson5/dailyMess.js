var mesg = new Date();
var dailyMesg = mesg.getDay();
if (dailyMesg == 0) {
    document.getElementById("dailyMess").innerHTML = "Happy Sunday";
}
    else if (dailyMesg == 1) {
        document.getElementById("dailyMess").innerHTML = "Happy Monday";
    }
        else if (dailyMesg == 2) {
            document.getElementById("dailyMess").innerHTML = "Happy Tuesday";
        }
            else if (dailyMesg == 3) {
                document.getElementById("dailyMess").innerHTML = "Happy Wednesday";
            }
                else if (dailyMesg == 4) {
                    document.getElementById("dailyMess").innerHTML = "Happy Thursday";
                }
                    else if (dailyMesg == 5) {
                        document.getElementById("dailyMess").innerHTML = "Happy Friday";
                    }
                        else {
                            document.getElementById("dailyMess").innerHTML = "Happy Saturday";
                        };