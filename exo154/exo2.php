<?php
if (!isset($_GET['iteration'])){
    header('Location: index.php?error=2');
}

$ite = $_GET['iteration'];

if ($ite <=0){
    $ite = 1;
}
elseif ($ite >100){
    $ite=100;
}

for ($i=0 ; $i < $ite ; $i++){
    echo "<p>Hello world</p>";
}