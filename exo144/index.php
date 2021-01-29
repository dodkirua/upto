
<?php

$br = "<br>";

//1
$string1 = "Aujourd'hui il fait -1000 degrés.";
echo addslashes($string1).$br;

//2

$string2 = "je sais pas quoi ecrire";

echo strtoupper($string2).$br;
echo  ucfirst($string2).$br;
echo ucwords($string2).$br;

$string3 = "IL Y EN A MARRE DE CHERCHER DU TEXTE";

echo strtolower($string3).$br;
echo lcfirst($string3).$br;

//3
$s25 = "un deux trois quatre cinq six sept huit neuf dix onze douze treize quatorze quinze seize dix-sept dix-huit dix-neuf vingt vingt-et-un vingt-deux vingt-trois vingt-quatre vingt-cinq";
echo str_word_count($s25);

//4

$s4 = "chaine de caractère pour l'exo 4";
$as4 = explode($s4," ");
foreach ($as4 as $item){
    echo $item.$br;
}


//5
$array = [
  "hiboux",
  "genoux",
  "cailloux",
  "joujoux",
  "doudou",
  "loulou",
  "chouchou"
];

echo implode(" ",$array).$br;

//6

$palin = "Leon a suce ses ecus a Noel";

echo $palin.$br;
echo strrev($palin).$br;
echo str_shuffle($palin).$br;

//7
$hello = "<strong>Hello, </strong> nous apprenons <span style='color: blue;'>PHP</span>";

echo $hello.$br;
echo strip_tags($hello).$br;

// 8
$string4 = "je ne fais pas 500 caractere.";
echo str_pad($string4,500,"|",STR_PAD_LEFT).$br;
echo strlen(str_pad($string4,500,"|",STR_PAD_LEFT)).$br;

//9
$as2 = str_split($string4);

foreach (str_split($string4) as $i){
    echo $i.$br;
}

//10

echo str_replace("caractere","World",$string4).$br;

//11

$string5 = "je vais louper mon test de pilotage de soupe a la choucroute.";

echo stripos($string5,"test").$br;
echo stripos($string5,"je").$br;

//12
function isBegenning($s,$w){
    if (stripos($s,$w) === 0){
        return true;
    }
    else {
        return false;
    }
}
echo isBegenning($string5,"je").$br;


function isEnding($s,$w){
    if (stripos($s,$w) === ((strlen($s)-strlen($w)))){
        return true;
    }
    else {
        return false;
    }
}

echo isEnding($palin,"noel").$br;
