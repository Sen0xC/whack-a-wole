// Declaration of global variables for the current mole tile and the current hole tile
let currMoleTile;
let currHoleTile;
let score = 0;
let gameOver = false;

// The function triggers when the window is fully loaded
window.onload = function() {
    setGame();
}

// Function to initialize the game
function setGame(){
    // Creating 9 tiles on the board
    for (var i = 0; i < 9 ; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    // Starting intervals to display a mole every 1500 ms and a hole every 2500 ms
    // Adjusting intervals dynamically based on the score
    if (score > 500) {
        setInterval(setMole, 500);
        setInterval(setHole, 1000);
    } else {
        setInterval(setMole, 1500);
        setInterval(setHole, 2500);
    }
}

// Function to get a random tile number
function getRandomTile(){
    return Math.floor(Math.random() * 9).toString();
}

// Function to display a hole on a random tile
function setHole(){
    // Skip if the game is over
    if(gameOver){
        return;
    }

    // If a previous hole tile exists, clear it
    if (currHoleTile){
        currHoleTile.innerHTML = "";
    }

    // Creating a hole image
    let hole = document.createElement("img");
    hole.src = "../img/hole-in-the-ground-free-png.png";

    // Get a random tile number and add the hole to the corresponding tile
    let num = getRandomTile();
    currHoleTile = document.getElementById(num);
    currHoleTile.appendChild(hole);
}

// Function to display a mole on a random tile
function setMole(){
    // Skip if the game is over
    if(gameOver){
        return;
    }

    // If a previous mole tile exists, clear it
    if (currMoleTile){
        currMoleTile.innerHTML = "";
    }

    // Creating a mole image
    let mole = document.createElement("img");
    mole.src = "../img/mole.png";

    // Get a random tile number
    let num = getRandomTile();

    // Check if the hole is occupied by a mole before placing a new mole
    if (currHoleTile && currHoleTile.id == num){
        return;
    }

    // Add the mole to the corresponding tile
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

// Function to handle tile selection
function selectTile(){
    // Skip if the game is over
    if(gameOver){
        return;
    }

    // Check if the selected tile matches the mole or hole tile
    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currHoleTile){
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver = true;
    }
}
