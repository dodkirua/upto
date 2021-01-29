<?php

// Premiere ligne
echo 10*5;

//Deuxieme ligne
echo 10/2;

//Troisieme ligne
$a = 3;
$b = 3;
if($a === $b) {
    echo "<br><br>a est identique à b";
}

//Quatrieme ligne
$a = 3;
$b = 4;
if($a!==$b) {
    echo"<br><br>a n'est pas identique à b";
}


//Cinquieme ligne
$arr1 = ["machin", "truc"];
$arr2 = ["truc", "machin"];

if(count(array_diff($arr1,$arr2)) === 0) {
    echo "<br><br>les tableaux ont le même contenu";
}

