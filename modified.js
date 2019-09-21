
    var modified = new Date(document.lastModified);
    var month = modified.getMonth() + 1;
    var date = modified.getDate();
    var year = modified.getFullYear();
    document.getElementById("update").textContent = (month + " " + date + ", " + year);