let Personne = function (nom, prenom, age, sexe, metier, passion){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;
    this.metier = metier;
    this.passion = passion;

    this.getID = function (){
        return "Son nom : "+ this.nom + ", son prénom : " + this.prenom + ", son âge : " + this.age + ", de sexe : " +
            this.sexe + ", son metier : " + this.metier + ", ses passions : " +this.passion.join(",")
    }

    this.setAgeMetier = function(newAge, newMetier){
        this.age = newAge;
        this.metier = newMetier;
    }
    this.getArray= function (){
        return[this.nom, this.prenom, this.age, this.sexe, this.metier ,this.passion];
    }
}
let Hermionne = new Personne("Granger","Hermione",11,"Féminin","Etudiante en première année à Poudlard" , ["Lecture" ,"Devoir" , "Recherche"]);
let JeanJacques = new Personne("Rousseau","Jean-Jacques",42,"Masculin","Philosophe" ,    ["Lecture" ,"Ecrire" , "Théatre"]);
let Chantal = new Personne("Goya", "Chantal", 65, "Féminin" , "Chanteuse" , ["casser les pieds", "ruiner l'enfance des gens"]);
let Gerard = new Personne("Holtz", "Gerard", 54, "Masculin" , "Présentateur Télé", ["Course automobile","Tricot"]);
let Gege = new Personne("La Saumure", "Gégé", 50, "Masculin", "Arrangeur de soirée", ["Pêche", "Appât à cochon"]);


let Classe = {
    membre : [Hermionne, JeanJacques, Chantal, Gerard, Gege],
};

let newDiv;
let newP;
for (let i = 0 ; i < Classe.membre.length ; i++){
    newDiv = document.createElement("div");
    newDiv.style.border = "black 2px solid";
    let eleve = Classe.membre[i].getArray();
    for (let j = 0 ; j < eleve.length ; j++){
        newP = document.createElement("p");
        newP.innerHTML = eleve[j];
        newDiv.append(newP)
    }
    document.body.append(newDiv);
}
