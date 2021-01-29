<?php

// Premiere ligne

if (!isset($_POST['fname'])){
    header('Location: index.html');
}
$fname=trim(htmlentities($_POST['fname']));

echo "Bienvenue ".$fname ;





