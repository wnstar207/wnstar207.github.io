
    let modified = new Date(document.lastModified);
    let month = modified.getMonth() + 1;
    let date = modified.getDate();
    let year = modified.getFullYear();
    document.getElementById("update").textContent = (month + "-" + date + "-" + year);