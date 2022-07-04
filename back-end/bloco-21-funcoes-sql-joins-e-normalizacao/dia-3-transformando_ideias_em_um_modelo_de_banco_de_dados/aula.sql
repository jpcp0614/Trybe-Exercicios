/*
Depende das regras de negócio!
Entidades:

	Livro: ano_lancamento, preco, titulo, autor_id
    Autor: nome, nacionalidade, email
    Cliente: nome, data_nascimento, cpf, endereco, telefone
    Categoria: nome
    Histórico: cliente_id, livro_id, data_retirada, data_entrega_prevista, data_entrega_concluida
    Editora: nome, cnpj, razao_social, email
    
    Livro <-> Autor			Livro PERTENCE Autor
							Autor TEM vários Livros

    Livro <-> Editora		Livro PERTENCE Editora
							Editora TEM vários Livros

    Livro <-> Categoria		Livro PERTENCE a pela menos uma Categoria
							Categoria TEM vários Livros

    Livro <-> Cliente		Livro TEM e PERTENCE Cliente

    Livro <-> Histórico		Livro TEM Histórico

    Cliente <-> Histórico	Cliente TEM Histórico
    