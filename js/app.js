const rubbish = document.getElementById("rubbish");
const valid = document.getElementById("valid");

let actualTrash;

let trash = [
    ["magazine", "blue"],
    ["newsPapers", "blue"],
    ["coca", "yellow"],
    ["milk", "yellow"],
    ["soup", "yellow"],
    ["banana", "brown"],
    ["food", "brown"],
    ["layers", "brown"],
    ["jam", "green"],
    ["oil", "green"],
]

function randomImage (array) {
    return array[Math.floor(Math.random() * array.length)];
}

function drawImage () {
    actualTrash = randomImage(trash);
    let newsImage = document.createElement("img");
    newsImage.src = "/img/trash/" + actualTrash[0] + ".jpg";
    rubbish.appendChild(newsImage);
}
drawImage();

valid.addEventListener("click", function () {

})