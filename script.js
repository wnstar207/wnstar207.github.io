
    
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;

    var modified = new Date(document.lastModified);
    var month = modified.getMonth() + 1;
    var date = modified.getDate();
    var year = modified.getFullYear();
    var modify = month + date + year
    document.getElementById("update").innerHTML = modify;
