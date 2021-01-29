# Exo-155-PHP-Liste-eleves

Liste en PHP

- Vous allez utiliser un tableau multi dimensionnel pour lister les élèves de la promo.
- Créez un fichier php et écrire l'instruction permettant de créer un tableau
- Chaque élève aura les propriétés suivantes : nom, prénom, age, ville, une sous liste de propriétés contenant ses passions ( tableau des passions ).
- Chaque élève aura également un numéro, vous commencerez par Brian qui aura l'index 0 puis André etc...

Pour vous aider , voici la structure que vous devrez obtenir :

Tableau = [
    0 =>["nom","prenom","age,"ville", "passions"=> ["passion1","passion2","etc..."]],
    1=> ...
]

- Une fois que votre tableau est créé, vous allez ajouter du code qui va permettre de lister en html les élèves en affichant seulement leurs nom/prénom
- Dans la liste, un lien va permettre d'accéder à une seconde page php affichant le reste des informations ( dans votre lien, vous utiliserez l'index de l'élève en question pour sélectionner la bonne ligne du tableau )
- Sur cette seconde page, un lien permettra de revenir à la page listant les élèves.

- Lorsque votre appli fonctionne correctement, vous allez travailler sur la présentation ( rendez l'appli agréable à utiliser )

- BONUS : Ajouter du javascript à vos pages