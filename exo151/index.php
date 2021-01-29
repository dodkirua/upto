<?php

/**
 * 1. Affichez dans un <p> la valeur absolue de -8
 */
$value = -8;
// TODO Votre code ici.
echo "<p>".abs($value)."<p>";

/**
 * 2. Affichez dans un <p> la valeur de 5.64 arrondit au nombre supérieur.
 */
$value = 5.64;
// TODO Votre code ici.
echo "<p>".ceil($value)."<p>";

/**
 * 3. Affichez dans un <p> la valeur de 5.34 arrondit au nombre inférieur.
 */
$value = 5.34;
// TODO Votre code ici.
echo "<p>".floor($value)."<p>";

/**
 * 4. Affichez dans un <p> la valeur maximum du tableau $max, et la valeur minimum du tableau $min.
 */
$max = [5, 10, 12, 8, 7, 6, 54, 39, 76, 63, 84, 2, 21];
$min = [5, 41, 65, 4, 3, 65, 2, 65, 74, 51, 23, 39, 42];
// TODO Votre code ici.
echo "<p>".max($max)."<p>";
echo "<p>".min($min)."<p>";
/**
 * 5. Affichez dans un <p> la valeur de PI * 2 ( avec une fonction mathématique pour PI ).
 */
echo "<p>".(pi()*2)."<p>";
// TODO Votre code ici.


/**
 * 6. Affichez dans un <p> la valeur arrondie de 5.42 avec la fonction round().
 */
$value = 5.42;
// TODO Votre code ici.

echo "<p>".round($value)."<p>";



