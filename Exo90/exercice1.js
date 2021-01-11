maFonction();

let nomVoiture = "Peugeot";

 let x = 50;

 let newDiv = document.createElement("div");

 newDiv.id = "demo";

 document.body.append(newDiv);

 let z = 5;

let w = 10;

newDiv.innerHTML = "z vaux "+z+", w vaux "+w+", le résultat est : "+(z+w);

 let d = z+w;

 alert(d);

 let prenom = "John", nom = "Doe", age = 35;

 alert(10*5);

 alert(10/2);

 alert(15%9);

let  k = 5, l = 10 + k;

function maFonction(){
    alert("Salut tout le monde !");
}

function maFonctiondeRetour(){
    document.getElementById("demoRetour").innerHTML = "Bonjour!";
}

let monBoutton = document.getElementsByTagName("button")[0];

monBoutton.addEventListener("click", function (){
   alert("click");
});

newDiv2 = document.createElement("div");
newDiv2.id = "changeSurOver";
newDiv2.style.width = "20vh";
newDiv2.style.height = "20vh";
newDiv2.style.border = "black solid 2px";
document.body.append(newDiv2);

newDiv2.addEventListener("mouseover", function (){
    newDiv2.style.backgroundColor = "red";
});

let txt = "une longue phrase";
let longueur = txt.length;
alert(longueur);

let str1 = "Bonjour",str2 = "le monde!";
alert(str1 + " " + str2);

let listVoiture = ["Renault","Volvo","Citroen"];
let maVoiture = listVoiture[1];

listVoiture.unshift("Ford");

alert(listVoiture.length);

listVoiture.pop();

listVoiture.push("Ferrari");

let rNumber = Math.random();

let fNumber = Math.round(18.789);

let nombreUn = 10, nombreDeux = 5;
if (nombreUn > nombreDeux){
    alert("nombreUn est supérieur à nombreDeux");
}

let nombreTrois = 10, nombreQuatre = 10;
if (nombreTrois === nombreQuatre ){
    alert("nombreTrois est égal à nombreQuatre");
}

if (nombreUn != nombreDeux){
    alert("nombreUn n'est pas égal à nombreDeux");
}

for (let i = 0; i < 10 ; i++){
    console.log(i);
}

let fruits = ["pomme","banane","poire" ];

for (let i = 0 ; i < fruits.length ; i++){
    console.log(i);
}
let i = 0
while (i<10){
    i++;
}

i = 0;
while (i<10){
    i = i+2;
}

for (i = 0 ; i < 11 ; i++){
    if (i === 5){
        alert("i = 5");
    }
}