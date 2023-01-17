<?php

list($y, $m, $d) = explode("/", readline());

$m = (int)$m;
// echo $m;
// echo "\n";
$d = (int)$d;
// echo $d;
// echo "\n";

if($m <= 6){
    $countDay = 0;
    for($i = 0; $i < $m; $i++){
        $countDay += 31;
    }
    $countDay = $countDay - (31 - $d);
}
else if($m <= 11){
    $countDay = 186;
    for($i = 6; $i < $m; $i++){
        $countDay += 30;
    }
    $countDay = $countDay - (30 - $d);
}
else{
    $countDay = 365;
    $countDay = $countDay - (29 - $d);
}

echo 366 - $countDay;