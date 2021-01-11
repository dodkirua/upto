class Vehicule {

    constructor(couleur,roues,marque) {
        this.couleur = couleur;
        this.roues = roues;
        this.marque = marque;
    }
    demarrer() {
        console.log("Je demarre");
    };
    arreter(){
        console.log("je m'arrete");
    };
}

class Velo extends Vehicule {

    constructor(couleur,roues,marque,rayonRoues,typePeinture){
        super (couleur,roues,marque);
        this.rayonRoues = rayonRoues;
        this.typePeinture = typePeinture;
    }
    monter(){
        console.log("Je monte");
    };
}

class Voiture extends Vehicule{

    constructor(couleur,roues,marque,assurance,proprietaire) {
        super(couleur,roues,marque);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }
    passerAuCarWash(){
        console.log("je me refait une beauté");
    };
}