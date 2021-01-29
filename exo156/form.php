<?php

if (!isset($_GET['surname'])){
    header('Location: index.php?error=1');
}
$surname = trim(htmlentities($_GET['surname']));

if (strtolower($surname) === "james"){
    echo "Bond, James Bond";
}
else {
    echo "Bonjour ".$surname;
}