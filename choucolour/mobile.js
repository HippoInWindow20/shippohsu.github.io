function changeColour(colour, button) {
    document.getElementById("bg").style.background = colour;
    var colourButtons = document.getElementsByClassName("preset");
    for (let i = 0; i < colourButtons.length; i++) {
        colourButtons[i].style.border = "3px solid #FFF";
    }
    try {
        button.style.border = "3px solid rgb(0, 162, 255)";
    } catch (e) {
        console.log("Custom")
    }
}

document.getElementById("picker").addEventListener("change", function() { changeColour(this.value) });

if (("standalone" in window.navigator) &&
    window.navigator.standalone) {
    document.getElementById("switch").style.display = "none";
}

var ua = navigator.userAgent.toLowerCase();
var env = {};
env.isIPhone = /iphone/.test(ua);
env.isIPad = /ipad/.test(ua);
env.isIOS = env.isIPhone || env.isIPad;

if (env.isIOS && navigator.standalone) {
    document.getElementById("switch").style.display = "none";


}

function changeActive(button) {
    var x = document.getElementsByClassName("aaa");
    for (let j = 0; j < x.length; j++) {
        x[j].style.color = "black";
    }
    button.style.color = "#4C8BF5";
}

var colourButtons = document.getElementsByClassName("preset");
for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].style.background = colourButtons[i].dataset.colour;
}

function info() {
    var colourOfChoice = document.getElementById("bg").style.background;
    alert("目前顏色：" + colourOfChoice);
}