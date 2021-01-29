<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
    if((!isset($_GET['error'])) && ($_GET['error'] === '1')) {
        echo "<p class='error'>Erreur sur les paramètre</p>";
    }

    ?>
    <form action="fonction.php" method="post">

        <div>
            <label for="x">Valeur de x</label>
            <input type="text" name="x" id="x">
        </div>
        <div>
            <label for="y">Valeur de y</label>
            <input type="text" name="y" id="y">
        </div>
        <div>
            <input type="submit" value="Valider">
        </div>
    </form>
    <?php
    if (isset($_GET['result'])){
        $result = base64_decode(json_decode($_GET['result']));
        echo "<p class='result'>Le résultat de est : $result</p>";
    }
    ?>
</body>
</html>



<?php
/*
- Créer un script php qui permet de générer un nombre aléatoire compris entre x et y
- Coté front, créer un formulaire acceptant deux valeurs : x et y
- Envoyer le formulaire au script php et retourner le nombre aleatoire généré


- Pour générer un nombre aléatoire en PHP , vous pouvez utiliser la méthode mt_rand() ou rand()

http://php.net/manual/fr/function.mt-rand.php
*/

