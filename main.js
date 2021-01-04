
var turn = true;
/*Sections*/
const $data = document.querySelector(".data");
const $game = document.querySelector(".game");
/*DOM Declare*/
const $name = document.querySelector(".name-data");
const $noname = document.querySelector(".no-name");
const $buttonReady = document.querySelector(".button-data");
const $nameinGame = document.querySelector(".human");
const $boxes = document.querySelectorAll(".box");


function catchName() {
    if($name.value!="")
    {
        $nameinGame.setAttribute("value", $name.value);
        $data.style.display = "none";
        $game.style.display = "flex";
    }
    else{
        $noname.style.display = "block";
    }

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function gameplay() {
    while (turn) {
        for (let i = 0; i < $boxes.length; i++) {
            var rdNum = getRandomInt(0,9);
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


$buttonReady.addEventListener("click", function (e) {
    catchName();
    console.log($boxes);
});

$boxes.forEach((e, index) => {
    e.addEventListener("click", function (e) {
        if($boxes[index].value == ""){
            $boxes[index].setAttribute("value", "x");
            gameplay();
            console.log($boxes[index]);
        }

    });
});