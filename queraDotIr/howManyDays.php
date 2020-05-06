<?php

$currentDate = 2018-10-12;
$date = 2018-10-12;
if(isset($_POST['date'])){
    $date = $_POST['date'];
}

$date = round(strtotime((string)$date) / (24 * 60 * 60));
$currentDate = round(strtotime($currentDate) / (24 * 60 * 60));


if($date < $currentDate){
    echo "gone";
}
else {
    echo $date - $currentDate;
}
echo "\n";