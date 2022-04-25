<?php

class Score{
    private $movie_id;
    private $user_email;
    private $value;


    public function __get($atributo){
        return $this ->$atributo;
    }
    public function __set($atributo, $valor){
        $this->$atributo = $valor;
        return $this;
    }
}