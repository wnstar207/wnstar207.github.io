
    var modified = new Date(document.lastModified);
    var month = modified.getMonth() + 1;
    var date = modified.getDate();
    var year = modified.getFullYear();
    var modify = month + date + year
    document.getElementById("update").innerHTML = modify;