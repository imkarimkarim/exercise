<?php

list($n, $m, $k) = explode(" ", readline());
$countAllKeys = 0;
$countBrokenKeys = 0;

// creating and pulling data to table
$table = array([]);
for($i = 0; $i < $n; $i++){
    array_push($table, []);
    for($ii = 0; $ii < $m; $ii++){
        array_push($table[$i], [$ii, true]);
        $countAllKeys++;
    }
}

// getting broken keys
for($i = 0; $i < $k; $i++){
    list($x, $y) = explode(" ", readline());
    $x = $x - 1;
    $y = $y -1;
    $table[$x][$y][1] = false;
    $countBrokenKeys++;
}

// // show in row/column mode (more graphic :))
// echo "\n";
// foreach($table as $t){
//     foreach($t as $t2){
//         if($t2[1] == true){
//             echo "0";
//         }
//         else{
//             echo "X";
//         }
//         echo " ";
//     }
//     echo "\n";
// }


if($countAllKeys == $countBrokenKeys){
    echo -1;
}
else if($countBrokenKeys % 2 == 1){
    echo 0;
}
else if($countBrokenKeys % 2 == 0){
    echo 1;
    echo "\n";
    $found = false;
    for($i = 0; $i < sizeof($table); $i++){
        if($found) break;
        for($i2 = 0; $i2 < sizeof($table[$i]); $i2++){
            if($found) break;
            if($table[$i][$i2][1] == true){
                echo (string)($i + 1) . " " . (string)($table[$i][$i2][0] + 1);
                $found = true;
            }
        }
    }
}
echo "\n";