/*

Entidades...

	Animal: animal_id, nome, especie, sexo, idade, localizacao
    
    Cuidador: cuidador_id, nome, gerente_id
    
    Gerente: gerente_id, nome
    
    Cuidador_Animal: cuidador_id, animal_id
    
    
    Cuidador <-> Animal		Cuidador pode cuidar de vários Animais
							Animal pode ter vários Cuidadores
	
    Cuidador <-> Gerente	Cuidador tem um Gerente
							Gerente pode ter mais de um Cuidador
    
    