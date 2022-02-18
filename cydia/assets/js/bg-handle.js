var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

// PC Background Source
if (width >= 500) {
    var video = document.getElementById("video-background");
    var source = document.getElementById("vid");
    source.setAttribute('src', './assets/img/background2.mp4');
    document.getElementById("mobile-bg").source="";
    document.getElementById("mobile-landscape-alert").style.position = "absolute";
    document.getElementById("mobile-landscape-alert").style.visibility = "hidden";
}

// Mobile Background
if (width < 500){
    document.getElementById("mobile-bg").source="./assets/img/mobile-bg.png";
    document.getElementById("mobile-bg").setAttribute('src', './assets/img/mobile-bg.png');
    document.getElementById("video-background").style.visibility = "hidden";
}