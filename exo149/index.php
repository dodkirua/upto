<?php

// En utilisant toutes les fonctions que nous venons de voir.

/**
 * 1. Vérifiez si cette variable est vide, si c'est le cas, affichez vide si non affichez pas vide.
 */
$var = 0;
// TODO votre code ici.

if (isset($var)){
    echo "var est null ou vaut 0";
}
else{
    echo "var vaut $var";
}

echo "<br>";
/**
 * 2. Détruisez la variable déclarée, tentez de l'afficher ensuite en utilisant un print_r.
 */
$eraseMe = "Please erase me !";
// TODO votre code ici.
unset($eraseMe);
echo $eraseMe;
echo "<br>";
/**
 * 3. Déclarez vous même un tableau et utilisez var_dump pour afficher toutes les informations de debug.
 */
// TODO votre code ici.
$array = ["test","de","creation","de","tableau"];
var_dump($array);
echo "<br>";

/**
 * 4. Faites la même chose avec le même tableau, mais pour la méthode print_r.
 */
// TODO votre code ici.
print_r($array);
echo "<br>";


/**
 * 5. A l'aide de la méthode isset, testez si la clé du tableau associatif 'doNotExists' existe ( SANS TOUCHER AU TABLEAU )
 *    Si c'est le cas, affichez le message 'Existe', si ce n'est pas le cas, affichez le message 'Existe pas'.
 */
$tab = ["test" => true, "name" => "Doe", "age" => 32];
// TODO Votre code ici.

if($tab["doNotExists"]){
    echo "existe";
}
else {
    echo "n'existe pas";
}
echo "<br>";
/**
 * 6. Créez une variable contenant:
 *    - un booléen
 *    - un nombre entier
 *    - un nombre flottant ( à virgule )
 *    - une chaîne de caractère.
 *
 * Créez une fonction qui prend en paramètre une simple variable, cette fonction doit tester le type du contenu de la variable
 * et afficher le texte "La variable passé en paramètre est de type: TYPE".
 *
 * exemple: funct maFunct(monparam){
 *              si monparam EST boolean {
 *                  afficher -> Ma variable est de type: boolean
 *              }
 *              SI monparam EST ENTIER...
 *              SI...
 *              SI...
 *          }
 * Passez toutes les variables créées précédemment dans cette fonction.
 */

// TODO votre code ici.

$bool = true;
$int = 2;
$float = 3.14;
$string = "pi";

function testType($var){
    if (is_bool($var)){
        $type = "boolean";
    }
    elseif (is_int($var)){
        $type = "integer";
    }
    elseif (is_float($var)){
        $type = "float";
    }
    elseif (is_string($var)){
        $type = "string";
    }
    else{
        $type = "ni string, ni int , ni boolean, ni float";
    }
    echo "Ma variable est de type: $type";
}

testType($bool);
echo "<br>";
testType($int);
echo "<br>";
testType($float);
echo "<br>";
testType($string);
echo "<br>";