<?php
$br = "<br>";

//1
$arrayMonth = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
];


//2
echo $arrayMonth[2].$br.$br;

//3

echo $arrayMonth[5].$br.$br;


//4
$arrayMonth[7] = "août";


//5

$hdf = [
    59 => "Nord",
    62 => "Pas de Calais",
    80 => "Somme",
    02 => "Aisne",
    60 => "Oise"
];

//6

echo $hdf[59].$br.$br;

//7

$hdf[51] = "Marne";

//8

foreach ($arrayMonth as $month){
    echo $month.$br;
}
echo $br;

//9

foreach ($hdf as $dep){
    echo $dep.$br;
}
echo $br;
//10

foreach ($hdf as $key => $dep){
    echo "Le département $dep a le numéro $key".$br;
}