// Déclaration des variables globales pour la tuile courante de la taupe et de la tuile courante du trou
let currMoleTile;
let currHoleTile;
let score= 0;
let gameOver = false;

// La fonction se déclenche lorsque la fenêtre est complètement chargée
window.onload = function() {
    setGame();
}

// Fonction pour initialiser le jeu
function setGame(){
    // Création de 9 tuiles sur le plateau
    for (var i = 0; i < 9 ; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }

    // Lancement des intervalles pour afficher une taupe toutes les 1500 ms et un trou toutes les 2500 ms
    setInterval(setMole, 1500);
    setInterval(setHole, 2500);
}

// Fonction pour obtenir un numéro de tuile aléatoire
function getRandomTile(){
    return Math.floor(Math.random() * 9).toString();
}

// Fonction pour afficher un trou sur une tuile aléatoire
function setHole(){
    // Si une tuile de trou précédente existe, la vider
    if (currHoleTile){
        currHoleTile.innerHTML = "";
    }

    // Création d'une image de trou
    let hole = document.createElement("img");
    hole.src = "../img/hole-in-the-ground-free-png.png";

    // Obtenir un numéro de tuile aléatoire et ajouter le trou à la tuile correspondante
    let num = getRandomTile();
    currHoleTile = document.getElementById(num);
    currHoleTile.appendChild(hole);
}

// Fonction pour afficher une taupe sur une tuile aléatoire
function setMole(){
    // Si une tuile de taupe précédente existe, la vider
    if (currMoleTile){
        currMoleTile.innerHTML = "";
    }

    // Création d'une image de taupe
    let mole = document.createElement("img");
    mole.src = "../img/mole.png";

    // Obtenir un numéro de tuile aléatoire
    let num = getRandomTile();

    // Vérifier si le trou est occupé par une taupe avant de placer une nouvelle taupe
    if (currHoleTile && currHoleTile.id == num){
        return;
    }

    // Ajouter la taupe à la tuile correspondante
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
