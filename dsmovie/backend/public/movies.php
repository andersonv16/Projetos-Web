<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


require '../Controller/movieController.php';

$page = $_GET['page'];

$arrayMovie = requireMovies($output);


$output = array_slice($arrayMovie, $page, 12);  


$jsonMovie = json_encode($output);

print_r($jsonMovie)





?>