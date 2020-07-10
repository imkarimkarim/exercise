<?php

list($n, $m) = explode(" ", readline());

$arr = array();

for($i = 0; $i < $n; $i++){
    array_push($arr, explode(" ", readline()));
}

$countZeyni = 0;

foreach ($arr as $key => $value) {
    // echo "\n";
    if(!($key == 0 || $key ==  sizeof($arr) - 1)){
        foreach($value as $k => $v){
            // echo " " . $v . "(" . $k . ")";
            if(!($k == 0 || $k ==  sizeof($value) - 1)){
                if($v > $value[$k - 1] && $v > $value[$k + 1]){
                    if($v < $arr[$key - 1][$k] && $v < $arr[$key + 1][$k]){
                        $countZeyni++;
                    }
                }
                elseif($v < $value[$k - 1] && $v < $value[$k + 1]){
                    if($v > $arr[$key - 1][$k] && $v > $arr[$key + 1][$k]){
                        $countZeyni++;
                    }
                }
            }
        }
    }

}

echo $countZeyni;

?>