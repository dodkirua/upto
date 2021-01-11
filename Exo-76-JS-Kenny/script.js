// Variable Globale
let viewport = document.getElementById("viewport");
let redZonelist ;
let redZone;
let kennyX = document.getElementById('kenny').style.left;
let kennyY = document.getElementById('kenny').style.top;
let compteur = document.createElement("div");
let nbMort = document.createElement("span");
let text1 = document.createElement("span");
let text2 = document.createElement("span");
let redZoneCoordonate;
createRedZone();

//mise en place des zone rouge
function createRedZone(){
    redZonelist=null;
    for (let i=1 ; i < Math.trunc(((Math.random()*9)+1)) ; i++){
        redZone = document.createElement("div");
        redZone.style.backgroundColor = "red";
        redZone.style.width = "50px";
        redZone.style.height = "50px";
        viewport.append(redZone);
        redZone.style.zIndex = "-1";
        redZonePosition();
        redZone.style.position="absolute";
        redZone.className = "redZone";
    }
    redZonelist = document.getElementsByClassName("redZone");
    redZoneCoordonate = redZoneCoordonate[redZonelist.length];
}

//Mise en place du compteur
compteur.style.textAlign = "center";
compteur.style.height = "20px";
nbMort.innerHTML = "0";
text1.innerHTML = "Kenny est mort : "
text2.innerHTML = " fois";
compteur.append(text1);
compteur.append(nbMort);
compteur.append(text2);
document.body.prepend(compteur);

// fonction de positionnement

function randomPosition(){
    return Math.trunc(Math.random()*450)+"px";
}

// Récupére les position des redZones
function position(){
    for (let i = 0 ; i<redZonelist.length ; i++){
        redZoneCoordonate[i] = [redZonelist[i].style.left , redZonelist[i].style.top];
    }
}

// Récupére les position de kenny
function positionKenny() {
    kennyX = document.getElementById('kenny').style.left;
    kennyY = document.getElementById('kenny').style.top;
}

// Positionnement de la redzone de façon aléatoire
function redZonePosition(){
    redZone.style.left = randomPosition();
    redZone.style.top =  randomPosition();
}

//fonction pour bouger Kenny
function up(){
    if (testBorder("up")){
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
        position();
        testKennyDie();
    }
}
function down(){
    if (testBorder("down")) {
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
        position();
        testKennyDie();
    }
}
function left(){
    if (testBorder("left")) {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
        position();
        testKennyDie();
    }
}
function right(){
    if (testBorder("right")) {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
        position();
        testKennyDie();
    }
}

// event click

document.getElementById('up').addEventListener('click',up);
document.getElementById('down').addEventListener('click',down);
document.getElementById('right').addEventListener('click',right);
document.getElementById('left').addEventListener('click',left);

// event fleche
document.addEventListener("keydown",function(e){

    switch (e.key){
        case "ArrowUp" : //up
            up()
            break;
        case "ArrowDown" : //down
            down()
            break;
        case "ArrowLeft" : //left
            left()
            break;
        case "ArrowRight" : //right
            right()
            break;
        default:
            break;
    }
})

/**
 * test si on arrive au bordure
 * @param border
 * @returns {null|boolean}
 */
function testBorder (border){
    switch (border){
        case "up":
            return parseInt(document.getElementById('kenny').style.top) !== 0;
        case "down":
            return parseInt(document.getElementById('kenny').style.top) !== 470;
        case "left":
            return parseInt(document.getElementById('kenny').style.left) !== 0;
        case "right":
            return parseInt(document.getElementById('kenny').style.left) !== 470;
        default :
            return null;
    }
}

// test si Kenny touche la zone rouge
function testKennyDie (){
    // console.log(kennyY+","+redZoneY);
    // console.log(kennyX+","+redZoneX);
    if (parseInt(kennyY) > (parseInt(redZoneY)-29)){
        if (parseInt(kennyY) <= (parseInt(redZoneY)+40)) {
            if (parseInt(kennyX) > (parseInt(redZoneX)-29)) {
                if (parseInt(kennyX) <= (parseInt(redZoneX) + 40)) {
                    alert("Vous avez tué Kenny");
                    document.getElementById('kenny').style.left = "200px";
                    document.getElementById('kenny').style.top = "200px";
                    nbMort.innerHTML = parseInt(nbMort.innerText)+1;
                }
            }
        }
    }
}