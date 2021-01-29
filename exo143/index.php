<?php
$br = "<br>";
//1
function returnTrue (){
    return true;
}
echo  returnTrue().$br;
//2

function returnText (string $text){
    return $text;
}
echo returnText("toto du matin").$br;
//3

function concatain (string $text1, string $text2) {
    return $text1." ".$text2;
}

echo concatain("tata du matin et ","tutu du midi").$br;
//4

function compareNumber (float $n1,float $n2){
    if ($n1 > $n2) {
        return 'Le premier nombre est plus grand';
    }
    elseif ($n1 < $n2) {
        return "Le premier nombre est plus petit";
    }
    else{
        return "Les deux nombres sont identiques";
    }
}
echo compareNumber(25,82.41).$br;
//5

function concatain2 (float $number,string $text ){
    return $number." ".$text;
}

echo concatain2(25.4," kg de patate ce n'est pas suffisant pour les frites").$br;

//6

function coucou (string $nom,string $prenom,int $age){
    return "Bonjour $nom $prenom, tu as $age ans";
}
echo coucou("Tavergnier","Bertrand",85).$br;

//7

function majeur(string $genre, int $age){
    if ($age < 18){
        $majeur = "mineur";
    }
    else {
        $majeur = "majeur";
    }
    if (strtolower($genre) === "homme"){
        return "Vous êtes un homme et vous êtes $majeur";
    }
    elseif (strtolower($genre) === "femme"){
        return "Vous êtes une femme et vous êtes $majeur";
    }
    return "erreur de genre";
}

echo majeur("Femme",16).$br;

//8

function add (float $n1, float $n2, float $n3){
    return $n1+$n2+$n3;
}

echo add(25.4,32.58,85.69).$br;