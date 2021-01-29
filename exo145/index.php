<?php
$br = "<br>";
// Premiere ligne

$fruits = array("Apple", "Banana", "Orange");
echo count($fruits).$br;

echo $br;
//Deuxieme ligne
echo $fruits[1].$br;

$age = array("Peter"=>"35", "Ben" =>"37", "Joe"=> "43");
echo $br;
echo "<br><br>Ben is " .$age["Ben"]  . " years old.<br><br>";
echo $br;
foreach($age as $x => $y) {
    echo "<br>Key=" .$x  . ", Value=" . $y;
}


echo $br;
//Troisieme ligne

$colors = array("red", "green", "blue", "yellow");
print_r($colors);
echo $br;
sort($colors);
print_r($colors);
echo $br;
// Quatrieme ligne

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
print_r($age);
echo $br;
ksort($age);
print_r($age);
echo $br;



