<?php


require("../Model/conexao.php");
require "../Model/score.php";
require "../Service/scoreService.php";


function insertScore($id, $email, $value){
    $score = new score();
    $score ->__set('movie_id', $id, );
    $score ->__set('user_email', $email);
    $score ->__set('value', $value);
    $conexao = new Conexao();

    $scoreService = new scoreService($conexao, $score);
    $scoreService -> inserir();
}


?>