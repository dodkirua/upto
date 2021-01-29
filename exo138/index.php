<?php

// Premiere ligne

function maFonction() {
    echo "Hello World!";
}

//Deuxieme ligne

maFonction();

//Troisieme ligne

function maFonctionParam($fname, $lname) {
    echo $fname;
    return $lname;
}

echo maFonctionParam("un","deux");





