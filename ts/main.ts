window.onload = function(){
    //roll button
    let rollBtn = document.getElementById("roll");
    rollBtn.onclick = score;
    //pass button
    let passBtn = document.getElementById("pass");
    passBtn.onclick = switchPlayer;
    // variables
    player1 = new Player(); //declared
    player2 = new Player();
    currentPlayer = player1;
    tempScore = 0;
}

let player1:Player;
let player2:Player;
let currentPlayer:Player;
let tempScore;

// rolls the dice.
function rollDice():number{
    let myDie:Die = new Die();
    myDie.roll();
    let value = myDie.faceUpValue;

    document.getElementById("Dice").innerHTML = String(value);
    return value;
}

function switchPlayer(){
    if(currentPlayer == player1){
        currentPlayer._scoreThis += tempScore;
        document.getElementById("p1-score").innerHTML = String(currentPlayer._scoreThis);
        winner();
        tempScore = 0;
        document.getElementById("p1-tempScore").innerHTML = String(tempScore);
        currentPlayer = player2;
        displayCurrentPlayer();
    }
    else if(currentPlayer == player2){
        currentPlayer._scoreThis += tempScore;
        document.getElementById("p2-score").innerHTML = String(currentPlayer._scoreThis);
        winner();
        tempScore = 0;
        document.getElementById("p2-tempScore").innerHTML = String(tempScore);
        currentPlayer = player1;
        displayCurrentPlayer();
    }
}

function score(){
    winner();
    let value = rollDice();
    if(currentPlayer == player1){
        if(value != 1){
            tempScore += value;
            document.getElementById("p1-tempScore").innerHTML = String(tempScore);
        }
        else{
            tempScore = 0;
            document.getElementById("p1-tempScore").innerHTML = String(tempScore);
            switchPlayer();
        }
    }
    else if(currentPlayer == player2){
        if(value != 1){
            tempScore += value;
            document.getElementById("p2-tempScore").innerHTML = String(tempScore);
        }
        else{
            tempScore = 0;
            document.getElementById("p2-tempScore").innerHTML = String(tempScore);
            switchPlayer();
        }
    }
}

function winner(){
    if(currentPlayer == player1){
        if(currentPlayer._scoreThis >= 100){
            document.getElementById("winner-1").innerHTML = String("Winner!");
        }
    }
    if(currentPlayer == player2){
        if(currentPlayer._scoreThis >= 100){
            document.getElementById("winner-2").innerHTML = String("Winner!");
        }
    }
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