<?php


require("../Model/conexao.php");
require "../Model/movie.php";
require "../Service/movieService.php";



function requireMovies($array){

$movie = new movie();
$conexao = new Conexao();
$movieService = new movieService($conexao, $movie);
$movies = $movieService ->recuperar();

return $movies;

}

function recuperarMovie_id($movies, $id){


$movie = new movie();
$conexao = new Conexao();
$movie ->__set('id', $id);
$movieService = new movieService($conexao, $movie);
$movies = $movieService ->recuperarMovie_id();

return $movies; $id;
}

?>