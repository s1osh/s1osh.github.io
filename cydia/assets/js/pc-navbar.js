var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if (width > 500) {
    var container = document.getElementById("container");

    var title = document.getElementById("title");
    var repo = document.getElementById("repo");
    var navbar = document.getElementById("pc-navbar");

    var cydia = document.getElementById("pc-cydia");
    var sileo = document.getElementById("pc-sileo");
    var zebra = document.getElementById("pc-zebra");
    
    var alertbox = document.getElementById("alert-box");
    var alertboxHR = document.getElementById("alert-hr")
    var alertboxText = document.getElementById("alert-text");

    cydia.onclick = function(){
        alertbox.style.visibility = "visible";
        alertboxHR.style.visibility = "hidden";
        container.style.filter = "blur(10px)";
        alertboxText.innerHTML = "1) Visit <a id=\"alert-repo\" href=\"https://s1osh.github.io\">s1osh.github.io</a> on your iOS device <br>2) Tap on \"Add to Cydia\" <br>3) Enjoy the repo!";
    }

    sileo.onclick = function(){
        alertbox.style.visibility = "visible";
        alertboxHR.style.visibility = "hidden";
        container.style.filter = "blur(10px)";
        alertboxText.innerHTML = "1) Visit <a id=\"alert-repo\" href=\"https://s1osh.github.io\">s1osh.github.io</a> on your iOS device <br>2) Tap on \"Add to Sileo\" <br>3) Enjoy the repo!";
    }

    zebra.onclick = function(){
        alertbox.style.visibility = "visible";
        alertboxHR.style.visibility = "hidden";
        container.style.filter = "blur(10px)";
        alertboxText.innerHTML = "1) Visit <a id=\"alert-repo\" href=\"https://s1osh.github.io\">s1osh.github.io</a> on your iOS device <br>2) Tap on \"Add to Zebra\" <br>3) Enjoy the repo!";
    }
}