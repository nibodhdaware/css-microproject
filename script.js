function showMore() {
    document.getElementById("sect").style.display = "block";
    document.getElementById("view-more").style.display = "none";
    document.getElementById("view-less").style.display = "block";
}
function showLess() {
    document.getElementById("sect").style.display = "none";
    document.getElementById("view-more").style.display = "block";
    document.getElementById("view-less").style.display = "none";
}

function showCert() {
    document.getElementById("containerCat").style.display = "grid";
    document.getElementById("show-certificates").style.display = "none";
    document.getElementById("hide-certificates").style.display = "block";
}

function hideCert() {
    document.getElementById("containerCat").style.display = "none";
    document.getElementById("show-certificates").style.display = "block";
    document.getElementById("hide-certificates").style.display = "none";
}
