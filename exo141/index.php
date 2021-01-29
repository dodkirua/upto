<?php
//1
$var = 0;
while ($var <=10){
    echo $var." | ";
    $var++;
}
echo "<br><br>";
//2
$x = 0;
$y = rand(1,100);

while ($x <=20){
    echo $x*$y." | ";
    $x++;
}

echo "<br><br>";
//3

$x = 100;
$y = rand(1,100);

while ($x >10){
    echo $x*$y." | ";
    $x--;
}


echo "<br><br>";
//4
$x = 1;

while ($x <= 10){
    echo $x." | ";
    $x = $x+($x/2);
}
echo $x." | ";

echo "<br><br>";
//5

for ($i = 1 ; $i<=15 ; $i++){
    echo "on y arrive presque <br>";
}

echo "<br><br>";
//6

for ($i = 20 ; $i>=0 ; $i--){
    echo "c'est presque bon <br>";
}
echo "<br><br>";
//7

for ($i = 1 ; $i>=100 ; $i=$i+15){
    echo "On tient le bon bout. <br>";
}
echo "<br><br>";
//8

for ($i = 200 ; $i>=0 ; $i= $i-12){
    echo "Enfin !!!!<br>";
}