var alertBox = document.getElementById("alert-box");
var alertBoxHR = document.getElementById("alert-hr");
var close = document.getElementById("close-alert");
var container = document.getElementById("container");

alertBox.style.visibility = "hidden";
alertBoxHR.style.visibility = "hidden";

close.onclick = function(){
    container.style.filter = "blur(0px)";
    alertBox.style.visibility = "hidden";
    alertBoxHR.style.visibility = "hidden";
}

