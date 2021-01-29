<?php
if(isset($_GET['error'])){
    if ($_GET['error'] === '1'){
        echo "<p>Arrête de toucher au paramètre de exo1</p>";
    }
    elseif ($_GET['error'] === '2'){
        echo "<p>Arrête de toucher au paramètre de exo2</p>";
    }
}

/**
 * Exo 1
 * ------
 * 1. Créez une nouvelle page 'exo1.php'
 * 2. Créez un lien dans index.php ( ici ) qui passe le paramètre 'iteration' avec pour valeur 10 à cette page.
 * 3. Traitez tous les paramètres pour vous prémunir des petits malins.
 * 4. Faites une boucle pour afficher autant de fois Hello World 10 fois en utilisant 'iteration' dans la boucle.
 */

// TODO Votre code ici.
echo "<a href='exo1.php?iteration=10'>exo1</a><br><br>";

/**
 * Exo 2
 * ------
 * Faites exactement la même chose que pour l'exercice 1, mais le nouveau fichier sera nommé exo2.php
 * Créez au moins 10 liens à l'aide d'une boucle !!!
 * Pour chaque lien, le paramètre iteration prendra la valeur actuelle de votre variable de boucle ( $i par exemple ).
 */

for ($i=1 ; $i <= 25 ; $i++){
    echo "<a href='exo2.php?iteration=".$i."'>exo2 $i</a><br>";
}



