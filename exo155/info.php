<?php
require "./partial/head.php";
echo "<div class='container'>";
echo "<a href='index.php'>Liste des élèves</a><br>";
$eleve = json_decode(base64_decode($_GET["eleve"]));

echo '<br>';
foreach ($eleve as $key => $info){
    if (!is_array($info)) {
        echo "<p>$key =>  $info</p>";
    }
    else {
        echo "<p>$key =></p>";
        echo "<ul>";
        foreach ($info as $passion){
            echo "<li>$passion</li>";
        }
        echo"</ul>";
    }
}

echo "</div>";
require "./partial/footer.php";
