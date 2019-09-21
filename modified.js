
    var modified = new Date(document.lastModified);
    month = modified.getMonth() + 1;
    date = modified.getDate();
    year = modified.getFullYear();
    document.getElementById("update").textContent = (month + " " + date + ", " + year);