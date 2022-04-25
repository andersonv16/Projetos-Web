<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


require '../Controller/scoreController.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"];
$movieId = $data["movieId"];
$score = $data["score"];

if($email != null){
insertScore($movieId, $email, $score);
}
print_r($email);

?>