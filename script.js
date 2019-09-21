
    
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;

    var modified = new Date(document.lastModified);
    var month = lastupd.getMonth() + 1;
    var date = lastupd.getDate();
    var year = lastupd.getFullYear();
    var modify = month + date + year
    document.getElementById("update").textContent = modify;
