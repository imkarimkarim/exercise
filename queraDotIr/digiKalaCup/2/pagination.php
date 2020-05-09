<?php

function getPaginationButtons($total_items, $per_page, $current_page)
{
    $countPages = $total_items / $per_page;
    if($countPages > round($countPages, 0)){
        $countPages = round($countPages, 0) + 1;
    }
    else if($countPages < round($countPages, 0)){
        $countPages = round($countPages, 0);
    }
    
    $pages = array();

    if($current_page != 1){
        array_push($pages, ["text" => "prev", "number" => $current_page - 1]);
    }
    if($countPages >= 1){
        array_push($pages, ["text" => "1", "number" => 1]);
    }
    
    for($i = 1; $i < $countPages - 1; $i++){
        $i2 = $i + 1;

        if($i2 == $current_page - 1 || $i2 == $current_page - 2
        || $i2 == $current_page + 1 || $i2 == $current_page + 2
        || $i2 == $current_page){
            array_push($pages, ["text" => (string)$i2, "number" => $i2]);   
        }

        else if($current_page - $i2 == 3 || $i2 - $current_page == 3){
            array_push($pages, ["text" => "..."]);
        }
    }

    if($countPages > 1){
        array_push($pages, ["text" => (string)$countPages, "number" => $countPages]);
    }

    if($current_page != $countPages){
        array_push($pages, ["text" => "next", "number" => $current_page + 1]);
    }

    return $pages;
}

function renderPagination($pagination_template, $total_items, $per_page, $current_page, $base_url)
{
    $pages = getPaginationButtons($total_items, $per_page, $current_page);
    $html = '';
    foreach ($pages as $page) {
        $page['text'] = str_replace(['prev', 'next'], ['&laquo;', '&raquo;'], $page['text']);
        if (in_array($page['text'], ['&laquo;', '...', '&raquo;'])) {
            $html .= '<li class="page-item">
              <a class="page-link" href="' . (isset($page['number']) ? $base_url . $page['number'] : '#') . '">
                <span aria-hidden="true">' . $page['text'] . '</span>
              </a>
            </li>';
        } else {
            $html .= '<li class="page-item' . ($page['number'] == $current_page ? ' active' : '') . '"><a class="page-link" href="' . $base_url . $page['number'] . '">' . $page['number'] . '</a></li>';
        }
    }

    return str_replace('{{ @pages }}', $html, $pagination_template);
}
