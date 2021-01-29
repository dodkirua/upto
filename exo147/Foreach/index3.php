<?php

//----------------------------------------
//Afficher toutes les informations de la vidéothèque
$videotheque = array(
    array(
        'nom' => 'Independance day',
        'date' => 1996,
        'realisateur' => 'Roland Emmerich',
        'acteurs' => array(
            'Will Smith', 'Bill Pullman', 'Jeff Goldblum', 'Mary McDonnell',
        ),
    ),
    array(
        'nom' => 'Bienvenue a Gattaca',
        'date' => 1998,
        'realisateur' => 'Andrew Niccol',
        'acteurs' => array(
            'Ethan Hawke', 'Uma Thurman', 'Jude Law',
        ),
    ),
    array(
        'nom' => 'Forrest Gump',
        'date' => 1994,
        'realisateur' => 'Robert Zemeckis',
        'acteurs' => array(
            'Tom Hanks', 'Gary Sinise',
        ),
    ),
    array(
        'nom' => '12 hommes en colere',
        'date' => 1957,
        'realisateur' => 'Sidney Lumet',
        'acteurs' => array(
            'Henry Fonda','Martin Balsam','John Fiedler','Lee J. Cobb','E.G. Marshall',
        ),
    ),
);

echo '12.Mes films : <br>';
//ajoutez votre code ici
function display ($videotheque){
    foreach ($videotheque as $film) {
        echo "Nom du film : " . $film["nom"] . " <br>date de sortie : " . $film["date"] . "<br>";
        echo "Réalisateur : " . $film["realisateur"] . "<br>";
        echo "Les acteurs : <br>";
        foreach ($film["acteurs"] as $acteur) {
            echo "$acteur <br>";
        }
        echo "<br>";
    }
}
display($videotheque);
//----------------------------------------
//Afficher toutes les informations de la vidéothèque
//reprenez le tableau ci-dessus, ajoutez-y 3 de vos films préférés avec les mêmes
//informations (nom, date, realisateur, acteurs) et en plus de ces informations
//rajoutez un synopsis

$videotheque[] = array(
    'nom' => 'Le retour du Jedi',
    'date' => 1983,
    'realisateur' => 'Richard Marquand',
    'acteurs' => array(
        'Mark Hamill','Harrison Ford','Carrie Fisher','Billy Dee Williams','Anthony Daniels',
    )
);
$videotheque[] = array(
        'nom' => 'Astérix et Obélix : Mission Cléopâtre',
        'date' => 2002,
        'realisateur' => 'Alain Chabat',
        'acteurs' => array(
            'Gérard Depardieu','Christian Clavier','Claude Rich','Jamel Debbouze','Monica Bellucci',"Alain Chabat","Gérard Darmon",
        )
    );
$videotheque[] =   array(
        'nom' => 'Avengers',
        'date' => 2012,
        'realisateur' => 'Joss Whedon',
        'acteurs' => array(
            'Robert Downey Jr.','Chris Evans','Mark Ruffalo','Chris Hemsworth','Scarlett Johansson',
        )
    );

echo '13.Mes films : <br>';
//ajoutez votre code ici

display($videotheque);