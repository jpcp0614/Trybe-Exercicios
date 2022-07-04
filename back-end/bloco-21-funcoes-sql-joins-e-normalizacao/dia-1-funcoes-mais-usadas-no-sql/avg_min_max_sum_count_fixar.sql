USE sakila;
SELECT * FROM film;

-- 1) A média de duração dos filmes e dê o nome da coluna de 'Média de Duração'
SELECT ROUND(AVG(length), 2) AS 'Média de Duração' FROM film;

-- 2) A duração mínima dos filmes como 'Duração Mínima'
SELECT MIN(length) AS 'Duração Mínima' FROM film;

-- 3) A duração máxima dos filmes como 'Duração Máxima'
SELECT MAX(length) AS 'Duração Máxima' FROM film;

-- 4) A soma de todas as durações como 'Tempo de Exibição Total'
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM film;

-- 5) E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'
SELECT COUNT(*) AS 'Filmes Registrados' FROM film;