
    
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;

    var modify = new Date(document.lastModified);
    document.getElementById("update").innerHTML = modify;
