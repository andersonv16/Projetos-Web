<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


require '../Controller/movieController.php';

$id = $_GET['index'];


$arrayMovie = recuperarMovie_id($movies, $id);

$jsonMovie = json_encode($arrayMovie);

print_r($jsonMovie)

?>