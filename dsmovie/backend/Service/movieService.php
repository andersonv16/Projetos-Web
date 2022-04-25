<?php

class movieService {

	private $conexao;
	private $movie;

	public function __construct(Conexao $conexao, movie $movie) {
		$this->conexao = $conexao->conectar();
		$this->movie = $movie;
	}


    public function recuperar(){
		$query = 'select * from tb_movie';
		$stmt = $this->conexao->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        

    }
	public function recuperarMovie_id(){
        $query = 'select * from tb_movie where id = :id';
		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(':id', $this->movie->__get('id'));
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
		
        
    }
}

?>