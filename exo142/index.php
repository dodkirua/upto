<?php
$br = "<br>";

echo "texte".$br;

$string = "texte dans variable".$br;

$array = [
    "Avec",
    "un",
    "tableau",
    "chouette"];

echo $array[2].$br;
$count = count($array);
for($i = 0 ; $i < $count ; $i++){
    echo $array[$i].$br;
}
?>

<html lang="en">
    <ul>
        <?php
        foreach($array as $item){
            echo $item.$br;
        }
        ?>
    </ul>
</html>
