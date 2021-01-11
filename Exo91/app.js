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


let groupe = [Hermionne = new Personne("Granger","Hermione",11,"Féminin","Etudiante en première année à Poudlard" ,
             ["Lecture" ,"Devoir" , "Recherche"]), JeanJacques = new Personne("Rousseau","Jean-Jacques",42,"Masculin","Philosophe" ,
             ["Lecture" ,"Ecrire" , "Théatre"])];

for (let i = 0 ; i < groupe.length; i++){
    let perso =  document.getElementById("perso"+(i+1));
    let listPerso = groupe[i].getArray();
    let div = perso.getElementsByClassName("propriete");
    for (let j = 0 ; j < listPerso.length; j++){
        div[j].innerHTML = listPerso[j];
    }
    div = perso.getElementsByClassName("method");
    div[0].innerHTML = groupe[i].getID();
    groupe[i].setAgeMetier(252,"mort");
    div[1].innerHTML = groupe[i].getID();
}