<?php

class Movie{
    private $id;
    private $title;
    private $score;
    private $count;
    private $image;

    public function __get($atributo){
        return $this ->$atributo;
    }
    public function __set($atributo, $valor){
        $this->$atributo = $valor;
        return $this;
    }
}

?>