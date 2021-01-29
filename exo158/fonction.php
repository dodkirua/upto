<?php
if(!isset($_POST['x']) || !isset($_POST['y'])) {
    header('Location: index.php?error=1');
}
$x=intval($_POST['x']);
$y=intval($_POST['y']);
$max = mt_getrandmax();

if ($x < -$max){
    $x = -$max;
}
elseif ($x > $max){
    $x = $max;
}
if ($y < -$max){
    $y = -$max;
}
elseif ($x > $max){
    $y = $max;
}
if ($x === $y){
    $result = $x;
}
elseif ($x > $y){
    $result = mt_rand($y,$x);
}
else {
    $result = mt_rand($x,$y);
}

$result = json_encode(base64_encode($result));

header('Location: index.php?result='.$result);