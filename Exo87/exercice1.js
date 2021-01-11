let Voiture = {
    "nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "couleur" : "Marron",
    "contructeur" : "Citroen",
    "carburant" : "Solaire",
    "nombrePortes" : 3,
    "autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

let container = document.createElement("div");
container.id = "container";
document.body.append(container);
let name = document.createElement("h1");
name.innerHTML = Voiture.nom;
container.append(name);
let imgDiv = document.createElement("div");
imgDiv.id = "divImg";
let img = document.createElement("img");
img.src = Voiture.imgUrl;
img.alt = Voiture.nom;
imgDiv.append(img);
container.append(img);

let description = document.createElement("div");
description.id = "description";
let newP;

newP = document.createElement("p");
description.append(newP);
newP.innerHTML = "Nombres de roues : "+Voiture.nombresRoues;
newP.style.backgroundColor = "lightgrey";

newP = document.createElement("p");
description.append(newP);
newP.innerHTML = "Couleurs : "+Voiture.couleur;


newP = document.createElement("p");
description.append(newP);
newP.innerHTML = "Constructeur : "+Voiture.contructeur;


newP = document.createElement("p");
description.append(newP);
newP.innerHTML = "Carburant : "+Voiture.carburant;
newP.style.backgroundColor = "lightgrey";

newP = document.createElement("p");
description.append(newP);
newP.innerHTML = "Nombres de portes : "+Voiture.nombrePortes;
newP.style.backgroundColor = "lightgrey";

newP = document.createElement("p");
description.append(newP);
newP.innerHTML = "Autonomie : "+Voiture.autonomie;


newP = document.createElement("p");
description.append(newP);
newP.innerHTML = "Vitesse max: "+Voiture.vitesseMaxi;

container.append(description);