<?php

## PHP - Les dates
## Pour tous les exercices, vous pouvez utiliser le site http://php.net
## N'hesitez pas à faire des pages avec du HTML/CSS

## Exercice 1 Afficher la date courante en respectant la forme jj/mm/aaaa (ex : 16/05/2016)

echo "<br><br>";

addP(date("d/m/Y"));

## Exercice 2 Afficher la date courante en respectant la forme jj-mm-aa (ex : 16-05-16)

echo "<br><br>";

addP(date("d/m/y"));

## Exercice 3 Afficher la date courante avec le jour de la semaine et le mois en toutes lettres (ex : mardi 2 août 2016)
## Bonus : Le faire en français.

echo "<br><br>";
setlocale(LC_ALL,['fr','fra','fr_FR.utf8']);
addP(strftime("%A %d %B %Y"));


## Exercice 4 Afficher le timestamp du jour.
## Afficher le timestamp du mardi 2 août 2016 à 15h00.

echo "<br><br>";
addP("Le timestamp est : ".time());
addP("Le timestamp du mardi 2 août 2016 à 15h00 est : ".mktime(15,00,00,8,2,2016));

##Exercice 5 Afficher le nombre de jours qui séparent la date du jour avec le 16 mai 2016.

echo "<br><br>";
$nbDay = floor((time() - strtotime('2016/08/16'))/60/60/24);
addP("le nombre de jour depuis le 16 mai 2016 : $nbDay");

##Exercice 6 Afficher le nombre de jours dans le mois de février de l'année 2016.

echo "<br><br>";
$date3 = strtotime("-1 day",strtotime('2016/03/01'));
addP("Le nombre de jour en février 2016 est : ".date('d',$date3));


##Exercice 7 Afficher la date du jour + 20 jours.

echo "<br><br>";
$date4 = strtotime("+20 day");
addP("Dans 20 jour nous serons : ".strftime("%A %d %B %Y",$date4));
##Exercice 8 Afficher la date du jour - 22 jours

echo "<br><br>";
$date5 = strtotime("-22 day");
addP("Il y a 22 jours nous étions : ".strftime("%A %d %B %Y",$date5));

## TP Faire un formulaire avec deux listes déroulantes.
## La première sert à choisir le mois, et le deuxième permet d'avoir l'année.
# MEGA BONUS ( surligné et caractère gras :-)  ) : En fonction des choix, afficher un calendrier ( voir libs JS ou autres )
?>
<div>
    <form action="coucou.php">
        <div>
            <label for="month">Le mois</label>
            <select name="month" id="month">
                <option value="01">Janvier</option>
                <option value="02">Février</option>
                <option value="03">Mars</option>
                <option value="04">Avril</option>
                <option value="05">Mai</option>
                <option value="06">Juin</option>
                <option value="07">Juillet</option>
                <option value="08">Août</option>
                <option value="09">Septembre</option>
                <option value="10">Octobre</option>
                <option value="11">Novembre</option>
                <option value="12">décembre</option>
            </select>
        </div>
        <div>
            <label for="year">Année</label>
            <select name="year" id="year">
                <?php
                for ($i = 1970 ; $i < intval(date("Y")) ; $i++){
                    echo "<option value='".$i."'>".$i."</option>";
                }
                ?>
            </select>
        </div>
        <div>
            <input type="submit" value="Valider">
        </div>
    </form>
</div>

<?php

function addP($text){
    echo "<p>".$text."</p>";
}
?>