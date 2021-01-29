<?php

/**
 * 1. Générez un nombre aléatoire compris entre 0 et 50, affichez le avec echo dans un nouveau <div>.
 */

// TODO Votre code ici.
echo "<div>".rand(0,50)."</div>";


/**
 * 2. Générez un nombre aléatoire compris entre 50 et getrandmax, affichez le résultat dans un nouveau <p>
 */

// TODO Votre code ici.
echo "<p>".rand(50,getrandmax())."</p>";

/**
 * 3. Générez un nombre aléatoire compris entre 0 et 50
 * ==> si le nombre est inférieur ou égal à 25, affichez : vous avez gagné ( dans un nouveau <p> )
 * ==> si ce n'est pas le cas, affichez : vous avez perdu ( dans un nouveau <p> )
 */

// TODO Votre code ici.
$n = rand(0,50);
if ($n <= 25){
    echo "<p>Vous avez gagné</p>";
}
else{
    echo "<p>Vous avez perdu</p>";
}

/**
 * 4. Créez une fonction qui génère un nombre aléatoire compris entre $max et $min ( paramètres ).
 * ==> Si le nombre est compris entre $max et $max -100, regénérez un nouveau nombre avec un appel récursif.
 * ==> Si ce n'est pas le cas, retournez tout simplement le nombre généré.
 */

// TODO Votre code ici.

function returnRand ($min,$max){
    if ($max < $min){
        return returnRand ($max,$min);
    }
    elseif (($max - 100) > $min){
        $rand = rand($min,$max);
        if ($rand > $max-100){
            return returnRand ($min,$max);
        }
        else {
            return $rand;
        }
    }
    else {
        return "la valeur min n'a pas une différence de 100 avec max";
    }

}

echo "<p>".returnRand(0,15000)."</p>";

echo "<p>".returnRand(50,99)."</p>";

echo "<p>".returnRand(25000,15000)."</p>";


