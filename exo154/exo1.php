<?php

if (!isset($_GET['iteration'])){
    header('Location: index.php?error=1');
}

$ite = $_GET['iteration'];

if ($ite <=0){
    $ite = 1;
}
elseif ($ite >10){
    $ite=10;
}

for ($i=0 ; $i < $ite ; $i++){
    echo "<p>Hello world</p>";
}