const holes = $(".hole");
const scoreBoard = $(".score");
const moles = $(".mole");
let timeout;
let token = true;

function startGame(){
    token = true;
    setTimeout(stopGame,10000);
    scoreBoard.html("0");
    moleUp();
}

function stopGame(){
    token = false;
}

function moleToggle(text){
    $(text).toggleClass("up");
}

function moleUp(){
    if (token === true) {
        let moleTimer = 200 * (Math.trunc(((Math.random() * 5) + 1)));
        let nbHole = Math.trunc(((Math.random() * 6) + 1));
        let text = ".hole" + nbHole;
        moleToggle(text);
        timeout = setTimeout(moleToggle, moleTimer, text);
        setTimeout(moleUp, moleTimer);
    }
    else {
        holes.removeClass("up");
    }
}

holes.click(function (){
   if($(this).hasClass("up")){
       scoreBoard.html(parseInt(scoreBoard.html())+1);
       $(this).removeClass("up");
   }
});

$("button").click(function (){
   startGame();
});