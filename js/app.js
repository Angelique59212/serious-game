const dross = document.getElementById("dross");
const valid = document.getElementById("valid");
const dustbins = document.getElementById("color").children;
const game = document.getElementById("game");
const result = document.getElementById("result");
const score = document.getElementById("score");
const details = document.getElementById("details");

let random;
let selectedDustbin;
let actualTrash;

let points = 0;

let trash = [
    ["magazine", "bleue"],
    ["journaux", "bleue"],
    ["coca", "jaune"],
    ["lait", "jaune"],
    ["soupe", "jaune"],
    ["banane", "marron"],
    ["nourriture", "marron"],
    ["couche", "marron"],
    ["confiture", "verte"],
    ["bouteille d'huile", "verte"],
]
let wrongTrash = [];

function randomTrash() {
    random = [Math.floor(Math.random() * trash.length)]
    actualTrash = trash[random];
    return actualTrash;
}

function drawImage() {
    let newsImage = document.createElement("img");
    newsImage.src = "/img/trash/" + actualTrash[0] + ".jpg";
    newsImage.classList = "rubbish";
    dross.appendChild(newsImage);
}

function unselectDustbin() {
    for (let dustbin of dustbins) {
        dustbin.classList = "";
    }
}

for (let dustbin of dustbins) {
    dustbin.addEventListener("click", function () {
        selectedDustbin = this.id;
        unselectDustbin();
        this.classList = "selected";
        valid.style.display = "inline";
    })
}

randomTrash();
drawImage();

valid.addEventListener("click", function () {
    if (actualTrash[1] === selectedDustbin) {
        points++;
    }
    else {
        wrongTrash.push(actualTrash);
    }
    trash.splice(random, 1);
    document.querySelector(".rubbish").remove();
    valid.style.display = "none";

    if (trash.length > 0) {
        randomTrash();
        drawImage();
        unselectDustbin();
    }
    else {
        game.style.display = "none";
        result.style.display = "block";
        score.innerHTML = "Ton score est de " + points;

        for (let trash of wrongTrash) {
            details.innerHTML += trash[0] + " allait dans la poubelle " + trash[1] + "." + "<br>";
        }
    }
})
