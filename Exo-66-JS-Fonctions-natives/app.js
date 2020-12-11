

let entier=document.getElementById("entier").innerHTML;
let flottant=document.getElementById("flottant").innerHTML;
let nonNumerique=document.getElementById("non-numerique").innerHTML;
let alea=document.getElementById("random").innerHTML;
let vegeta=document.getElementById("trunc").innerHTML;
let rereplace=document.getElementById("replace").innerHTML;
let opperande=10;

let op=entier*opperande;
document.getElementById("entier").innerHTML=op;

op=(flottant*opperande)+parseFloat(document.getElementById("entier").innerHTML);
console.log(op);
document.getElementById("flottant").innerHTML=op;


if (isNaN(nonNumerique)){
    document.getElementById("non-numerique").innerHTML="0";
}

op =Math.trunc(Math.random()*100);
console.log(op);
document.getElementById("random").innerHTML=op;

document.getElementById("trunc").innerHTML=Math.trunc(vegeta);

op=rereplace.replace("world","Pierre-Yves Bouttefeux");
document.getElementById("replace").innerHTML=op;