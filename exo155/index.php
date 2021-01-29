<?php
require "./partial/head.php";
echo "<div class='container'>";
    $classe= [0=>[
            "nom"=>"De Palma",
            "prenom"=>"Brian",
            "age"=>55,
            "Ville"=>"Saint-Denis",
            "passions"=>["musique","voyager","cinéma"]
        ],
        1=>[
            "nom"=>"Watson",
            "prenom"=>"emma",
            "age"=>31,
            "Ville"=>"Londres",
            "passions"=>["musique","lire","cinéma"]
        ],
        2=>[
            "nom"=>"Noah",
            "prenom"=>"Joaquim",
            "age"=>36,
            "Ville"=>"New-York",
            "passions"=>["musique","basket-ball","danser"]
        ],
            ];
foreach ($classe as $key => $eleve){
    echo "<p> Nom : ".$eleve['nom']." Prénom :".$eleve['prenom']." <a href='info.php?eleve=".base64_encode(json_encode($eleve))."'>Info ici</a></p><br>";
}
echo "</div>";
require "./partial/footer.php";