function changeColour(colour) {
    document.getElementById("bg").style.background = colour;
}

document.getElementById("picker").addEventListener("change", function() { changeColour(this.value) });

var icons = document.getElementsByClassName("material-symbols-outlined");
for (let i = 0; i++; i < icons.length) {
    icons[i].addEventListener("click", function() {
        var iconss = document.getElementsByClassName("material-symbols-outlined");
        for (let j = 0; j++; j < iconss.length) {
            iconss[j].style.color = "black";
        }
        this.style.color = "rgb(0,122,255)";
        console.log("clicked");
    });
}