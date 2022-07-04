-- Criando tabelas - aula
/*
SINTAXE tabela
CREATE TABLE nome_tabela (
	coluna1 tipo constraint,
    coluna2 tipo constraint,
    coluna3 tipo constraint,
    ...
) ENGINE='nome_engine'
*/

-- CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE `artista` (
	`artist_id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50),
    PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB;

CREATE TABLE `estilo_musical` (
	`estilo_id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`estilo_id`)
) ENGINE=InnoDB;

CREATE TABLE `album` (
	`album_id` INT AUTO_INCREMENT,
    `artist_id` INT NOT NULL,
    `titulo` VARCHAR(50) NOT NULL,
    `preco` DECIMAL(5,2) NOT NULL,
    `estilo_id`INT NOT NULL,
    PRIMARY KEY (`album_id`),
    FOREIGN KEY (`artist_id`) REFERENCES `artista`(`artist_id`),
    FOREIGN KEY (`estilo_id`) REFERENCES `estilo_musical`(`estilo_id`)
) ENGINE=InnoDB;


