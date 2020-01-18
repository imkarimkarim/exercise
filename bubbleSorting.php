<?php

$a = array(1, 6, 3, 9, 7, 2);
print_r($a);
for($i = 0; $i < sizeof($a); $i++){
    for($d = 0; $d < sizeof($a)-1; $d++){
        if($a[$d] > $a[$d+1]){
            $tmp = $a[$d];
            $a[$d] = $a[$d+1];
            $a[$d+1] = $tmp;
        }
    }
}

print_r($a);
print("\n" . sizeof($a) . "\n");
?>