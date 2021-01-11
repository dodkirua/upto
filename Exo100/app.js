let Vehicule = function (couleur,roues,marque){
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;
    this.demarrer = function() {
        console.log("Je demarre");
    };
    this.arreter = function (){
        console.log("je m'arrete");
    };
};

let Velo = function (couleur,roues,marque,rayonRoues,typePeinture){
    Vehicule.call (couleur,roues,marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;
    this.monter = function (){
        console.log("Je monte");
    };
};

let Voiture = function (couleur,roues,marque,assurance,proprietaire){
    Vehicule.call(couleur,roues,marque);
    this.assurance = assurance;
    this.proprietaire = proprietaire;
    this.passerAuCarWash = function (){
        console.log("je me refait une beauté");
    };
};