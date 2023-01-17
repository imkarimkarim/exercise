<?php

list($a, $b, $l) = explode(" ", readline());

	
	$i = 0;
	$aIsNext = True;
	$minutes = 0;

	while($i < $l){
		if($aIsNext){
		$minutes += $a;
		$aIsNext = False;
		}
		else{
			$minutes += $b;
			$aIsNext = True;
		}
		$i++;
    }
    echo($minutes);
	
?>