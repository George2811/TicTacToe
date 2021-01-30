
var turn = true, player = false;
/*Sections*/
const $data = document.querySelector(".data");
const $game = document.querySelector(".game");
const $winner = document.querySelector(".winner");
const $playerWin = document.querySelector(".tittle-winner");
const $pcWin = document.querySelector(".pc");
/*DOM Declare*/
const $name = document.querySelector(".name-data");
const $noname = document.querySelector(".no-name");
const $buttonReady = document.querySelector(".button-data");
const $nameinGame = document.querySelector(".human");
const $boxes = document.querySelectorAll(".box");
const $buttonPlayAgain = document.querySelector(".button-winner");



function catchName() {
    if ($name.value != "") {
        $nameinGame.setAttribute("value", $name.value);
        $data.style.display = "none";
        $game.style.display = "flex";
    }
    else {
        $noname.style.display = "block";
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function winner() {

    for (let i = 0; i < $boxes.length; i++) {
        if (i == 0 || i == 3 || i == 6) {
            if ($boxes[i].value) {
                if ($boxes[i].value === $boxes[i + 1].value && $boxes[i + 1].value === $boxes[i + 2].value) {
                    $boxes[i].value == "x" ? player = true : player = false;
                    console.log(player);
                    return true;
                }
            }
        }
        if (i == 0 || i == 1 || i == 2) {
            if ($boxes[i].value) {
                if ($boxes[i].value === $boxes[i + 3].value && $boxes[i + 3].value === $boxes[i + 6].value) {
                    $boxes[i].value == "x" ? player = true : player = false;
                    console.log(player);
                    return true;
                }
            }
        }
        if (i == 0) {
            if ($boxes[i].value) {
                if ($boxes[i].value === $boxes[i + 4].value && $boxes[i + 4].value === $boxes[i + 8].value) {
                    $boxes[i].value == "x" ? player = true : player = false;
                    console.log(player);
                    return true;
                }
            }
        }
        if (i == 2) {
            if ($boxes[i].value) {
                if ($boxes[i].value === $boxes[i + 2].value && $boxes[i + 2].value === $boxes[i + 4].value) {
                    $boxes[i].value == "x" ? player = true : player = false;
                    console.log(player);
                    return true;
                }
            }
        }
    }
    return false;
}
function whoWin(name) {
    if (name) {
        $playerWin.textContent = $name.value + " wins!";
        $playerWin.style.display = "block";
    }
    else {
        $pcWin.style.display = "block";
    }
}
function champion(){
    if (winner()) {
        console.log("Hay ganador");
        $game.style.display = "none";
        $winner.style.display = "flex";
        whoWin(player);//si gano el jugador = true, sino false        
    }
    else {
        if (fullGame()) {//la tabla esta llena? Si, entonces nadie gana: sino, sigue jugando
            console.log("No Hay ganador");
            $game.style.display = "none";
            $playerWin.textContent = "Nobody wins :|";
            $winner.style.display = "flex";
            $pcWin.style.display = "none";
            $playerWin.style.display = "block";
        }
    }
    console.log($boxes[index]);
}
function gameplay() {
    while (turn) {
        for (let i = 0; i < $boxes.length + 10; i++) {
            let rdNum = getRandomInt(0, 9);
            console.log(rdNum);
            if ($boxes[rdNum].value == "x" || $boxes[rdNum].value == "o") {
            }
            else {
                $boxes[rdNum].setAttribute("value", "o");
                return;
            }
            //llega hasta aqui;            
        }
        turn = false;
    }
    turn = true;
}
function fullGame() {
    for (let i = 0; i < $boxes.length; i++) {
        if (!$boxes[i].value) {
            return false;
        }
    }
    return true;
}

$buttonReady.addEventListener("click", function (e) {
    catchName();
    console.log($boxes);
});

$boxes.forEach((e, index) => {
    e.addEventListener("click", function (e) {
        if ($boxes[index].value == "") {
            $boxes[index].setAttribute("value", "x");
            setTimeout("gameplay()",1100);
            setTimeout("champion()",1100);            
        }
    });
});


$buttonPlayAgain.addEventListener("click", e => {
    $winner.style.display = "none";
    $pcWin.style.display = "none";
    $game.style.display = "flex";
    $boxes.forEach(e => {
        e.value = "";
    });
    $playerWin.textContent = "";
});