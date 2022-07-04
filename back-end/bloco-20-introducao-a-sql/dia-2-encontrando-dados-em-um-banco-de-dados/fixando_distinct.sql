CREATE DATABASE `Escola`;
USE Escola;
CREATE TABLE IF NOT EXISTS Alunos (
	`Nome` VARCHAR(7) CHARACTER SET utf8mb4,
	`Idade` INT
);

INSERT INTO Alunos VALUES
	('Rafael', 25),
	('Amanda', 30),
	('Roberto', 45),
	('Carol', 19),
	('Amanda', 25);
    
-- 1) Monte uma query para encontrar pares únicos de nomes e idades
SELECT DISTINCT Nome, Idade FROM Alunos;

-- 2) Quantas linhas você encontraria na query anterior? 5 rows

-- 3) Monte uma query para encontrar somente os nomes únicos
SELECT DISTINCT Nome FROM Alunos;

-- 4) Quantas linhas você encontraria na query anterior? 4 rows

-- 5) Monte uma query para encontrar somente as idades únicas
SELECT DISTINCT Idade FROM Alunos;

-- 6) Quantas linhas você encontraria na query anterior? 4 rows