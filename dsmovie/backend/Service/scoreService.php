<?php

class scoreService {

	private $conexao;
	private $score;

	public function __construct(Conexao $conexao, Score $score) {
		$this->conexao = $conexao->conectar();
		$this->score = $score;
	}


    public function inserir() { 
        $query = 'insert into tb_score(movie_id, user_email, value)values(:movie_id, :user_email, :value)';
        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':movie_id', $this->score->__get('movie_id'));
        $stmt->bindValue(':user_email', $this->score->__get('user_email'));
        $stmt->bindValue(':value', $this->score->__get('value'));
        $stmt->execute();
    }


}

?>