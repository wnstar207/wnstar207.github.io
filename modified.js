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

    let modified = new Date(document.lastModified);
    let month = monthNames[modified.getMonth()];
    let date = modified.getDate();
    let year = modified.getFullYear();
    document.getElementById("update").textContent = (month + " " + date + ", " + year);