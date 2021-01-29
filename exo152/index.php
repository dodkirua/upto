<?php

// Premiere ligne

echo date("l");
echo "<br>";
$date2 = mktime(0,0,0,12,10,2018);

echo date ("Y.m.d",$date2);
echo "<br>";

$date3 = mktime(11,35,07);
echo date ("H:i:s",$date3);
echo "<br>";
