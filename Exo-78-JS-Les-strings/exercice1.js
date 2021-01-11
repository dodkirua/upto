let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);



//Ajouter du code ci dessous pour réaliser la suite de l'exercice

document.getElementById("viewport").innerHTML += monTexte.indexOf("i");
let monTexteUper = monTexte.toUpperCase();

document.getElementById("chaineMaj").innerHTML = monTexteUper;

for (let letter = 0; letter < monTexte.length; letter++){

    if (monTexte[letter] === "a"){
        alert("lettre a trouvé");
    }
}



