<?php

/**
 * Les tableaux : Array
 */

//déclaration de tableau méthode 1
$legumes = array('Salade', 'Asperge', 'Carotte');
//déclaration de tableau méthode 2
$fruits = ['Pomme', 'Cerise', 'Banane'];
// echo 'Legumes<br>';
echo "$legumes<br>";
//La fonction print_r sert à afficher les tableaux (et objets) en profondeur.
// Pour un tableau, ça affichera les index (aussi appelé "clé") et leur valeur.
print_r($legumes);
echo '<br>';
// echo 'Fruits<br>';
echo "$fruits<br>";
print_r($fruits);
echo '<br><br>';

//----------------------------------------

echo 'Afficher un élément du tableau (l\'index d\'un tableau commence à 0)';
echo '<br>';
echo 'Le fruit à la 1ère position dans le tableau est : '.$fruits[0].'<br>';
echo 'Le fruit à la 2ème position dans le tableau est : '.$fruits[1].'<br>';
echo 'Le fruit à la 3ème position dans le tableau est : '.$fruits[2];
echo '<br><br>';

//----------------------------------------

echo 'Remplacer des valeurs du tableau. Pomme devient Mangue, Cerise devient Letchis et Banane devient Fruit de la Passion';
echo '<br>';
echo 'Fruits[avant]<br>';
print_r($fruits);
echo '<br>';
$fruits[0] = 'Mangue';
$fruits[1] = 'Letchis';
$fruits[2] = 'Fruit de la passion';
echo 'Fruits[après]<br>';
print_r($fruits);
echo '<br><br>';
