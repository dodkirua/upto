<?php

/***** Tableaux multidimensionnel ***/
//------------------------------------

echo "Tableau multidimensionnel <br>";

$voitures = array(
    array("Twingo", "Aygo", "C1", "107"),
    array("Clio", "Golf", "i30", "308"),
    array("Freelander", "3008", "Santa fe", "Sportage"),
);

print_r($voitures);

echo PHP_EOL;
echo "Afficher les voitures de la 1ère ligne du tableau : ";
echo $voitures[0][0].", ".$voitures[0][1].", ".$voitures[0][2].", ".$voitures[0][3];
echo "<br>";

echo "Afficher les véhicules de la 2ème ligne du tableau : ";
echo $voitures[1][0].", ".$voitures[1][1].", ".$voitures[1][2].", ".$voitures[1][3];
echo "<br>";

echo "Afficher les véhicules de la 3ème ligne du tableau : ";
echo $voitures[2][0].", ".$voitures[2][1].", ".$voitures[2][2].", ".$voitures[2][3];
echo "<br><br>";
