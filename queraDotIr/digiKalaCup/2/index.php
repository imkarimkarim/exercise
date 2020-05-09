<?php

require 'pagination.php';

getPaginationButtons(7, 1, 2);
/**
[
    ["text" => "prev", "number" => 1],
    ["text" => "1", "number" => 1],
    ["text" => "2", "number" => 2],
    ["text" => "3", "number" => 3],
    ["text" => "4", "number" => 4],
    ["text" => "..."],
    ["text" => "7", "number" => 7],
    ["text" => "next", "number" => 3]
]
*/

$pagination_template = file_get_contents('pagination.tpl');

echo renderPagination($pagination_template, 7, 1, 2, 'index.php?page=');