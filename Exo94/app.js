let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

let tableUnEx = tableauUn.map(value => value ** value);
addP(tableUnEx.join(","))

let tableUnX10 = tableauUn.map(value => value * 10);
addP(tableUnX10.join(","))

let tableUnDiv2Add38 = tableauUn.map(value => (value * 2 )+38);
addP(tableUnDiv2Add38.join(","))

let tableUnSup2 = tableauUn.map(value => (value > 2) ? value : null);
addP(tableUnSup2.join(","))

let tableUnPaire = tableauUn.map(value => (value%2 === 0) ? value : null);
addP(tableUnPaire.join(","))

let tableUnX3IfSup10 = tableauUn.map(value => (value*3 > 10) ? value : null);
addP(tableUnX3IfSup10.join(","))

let table2Lenght = tableauDeux.map(value => value.toString().length );
addP(table2Lenght.join(","))

let table2Concat = tableauDeux.map(value => value+value);
addP(table2Concat.join(","))

let table2Mod = tableauDeux.map(value => (value.length%2 === 0) ? value : null);
addP(table2Mod.join(","))

let table2Less3IfSup10 = tableauDeux.map(value => ((value.length - 3) > 10) ? value : null);
addP(table2Less3IfSup10.join(","))


function addP(texte){
    let newP = document.createElement("p")
    newP.innerHTML = texte;
    document.body.append(newP);
}