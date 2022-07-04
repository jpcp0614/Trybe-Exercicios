/*

Database Design

1) Identificando entidades, atributos e relacionamentos
	a) Entidades: representação de algo do mundo real (álbum, artist, estilo musical, canção, ano de lançamento, etc)
    b) Atributos: tudo que pode ser usado para descrever algo (título do album, id, preço, estilo)
    c) Relacionamentos: como uma entidade deve estar ligada com outra(s) no banco de dados
		i)   1..1: uma linha da tabela A com apenas uma linha da tabela B
        ii)  1..N: uma linha da tabela com com várias linhas da tabela B (uma linha da B com uma linha da A)
        iii) N..N: uma linha da tabela A com várias linhas da tabela B e vice-versa
    
Criando o banco de dados

-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;