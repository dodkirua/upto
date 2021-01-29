<?php

/***** Tableaux associatif multidimensionnel **********/
//-----------------------------------------------------
echo "Tableau associatif multidimensionnel : <br>";
$vehiculeConcession = array(
    'Bas de gamme' => array(
        'nom' => 'C1',
        'marque' => 'Citroen',
        'puissance' => 70,
        'prix' => 10000,
    ),
    'Milieu de gamme' => array(
        'nom' => 'Golf',
        'marque' => 'VW',
        'puissance' => 140,
        'prix' => 270000,
    ),
    'Haut de gamme' => array(
        'nom' => 'Aventador LP 700-4',
        'marque' => 'Lamborghini',
        'puissance' => 700,
        'prix' => 200000,
    ),
);
print_r($vehiculeConcession);
echo '<br>';

echo 'Le vehicule de bas de gamme s\'appelle '.$vehiculeConcession['Bas de gamme']['nom'].' de marque '.$vehiculeConcession['Bas de gamme']['marque'].' pour une puissance de '.
    $vehiculeConcession['Bas de gamme']['puissance'].'cv et coute '.$vehiculeConcession['Bas de gamme']['prix'].' Euros';
echo '<br>';
echo 'Le vehicule de Milieu de gamme s\'appelle '.$vehiculeConcession['Milieu de gamme']['nom'].' de marque '.$vehiculeConcession['Milieu de gamme']['marque'].' pour une puissance de '.
    $vehiculeConcession['Milieu de gamme']['puissance'].'cv et coute '.$vehiculeConcession['Milieu de gamme']['prix'].' Euros';
echo '<br>';
echo 'Le vehicule de Haut de gamme s\'appelle '.$vehiculeConcession['Haut de gamme']['nom'].' de marque '.$vehiculeConcession['Haut de gamme']['marque'].' pour une puissance de '.
    $vehiculeConcession['Haut de gamme']['puissance'].'cv et coute '.$vehiculeConcession['Haut de gamme']['prix'].' Euros';
