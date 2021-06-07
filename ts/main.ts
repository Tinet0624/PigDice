window.onload = function(){
    //roll button
    let rollBtn = document.getElementById("roll");
    rollBtn.onclick = score;
    //pass button
    let passBtn = document.getElementById("pass");
    passBtn.onclick = switchPlayer;

    player1 = new Player(); //declared
    player2 = new Player();
}

let player1:Player;
let player2:Player;
let currentPlayer;

// rolls the dice.
function rollDice():number{
    let myDie:Die = new Die();
    myDie.roll();
    let value = myDie.faceUpValue;

    document.getElementById("Dice").innerHTML = String(value);
    return value;
}

function switchPlayer(){
    if(currentPlayer == player1 || currentPlayer == null){
        currentPlayer = player2;
        alert("Switch to player 2");
        displayCurrentPlayer();
    }
    else if(currentPlayer == player2){
        currentPlayer = player1;
        alert("Switch to player 1");
        displayCurrentPlayer();
    }
}

function score(){
    let value = rollDice();
    if(currentPlayer == player1 || currentPlayer == null){
        document.getElementById("p1-tempScore").innerHTML = String(value);
    }
    else if(currentPlayer == player2){
        document.getElementById("p2-tempScore").innerHTML = String(value);
    }
    // currently only rolls and displays the dice number in current points section.
}

function displayCurrentPlayer(){
    if(currentPlayer == player1){
        document.getElementById("player-1").style.backgroundColor = "red";
        document.getElementById("player-2").style.backgroundColor = "rgb(160, 216, 253)";
    }
    else{
        document.getElementById("player-1").style.backgroundColor = "rgb(255, 168, 147)";
        document.getElementById("player-2").style.backgroundColor = "blue";
    }
}