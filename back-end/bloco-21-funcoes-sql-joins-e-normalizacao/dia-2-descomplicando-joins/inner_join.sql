SELECT * FROM sakila.city;

SELECT * FROM sakila.country;

-- INNER JOIN

/*
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;
*/

-- Ex.1:
SELECT city.city, city.country_id, country.country
	FROM sakila.city AS city
	INNER JOIN sakila.country AS country
	ON city.country_id = country.country_id;

-- Ex.2:
SELECT * FROM sakila.film;
SELECT * FROM sakila.`language`;

SELECT film.title, `language`.`name`, film.language_id
	FROM sakila.film AS film
    INNER JOIN sakila.`language` AS `language`
    ON film.language_id = `language`.language_id;


/*

A palavra-chave AS pode ser omitida. Nesse caso, o alias é passado diretamente, após o nome da tabela

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;

Dicas sobre como escolher o tamanho do alias
Sua query é composta de poucas linhas? Então use apenas letras ou a primeira sílaba para representar a
coluna. Por exemplo, "actor" se tornaria "A" ou "act" .
Caso esteja montando JOINS com muitas linhas, é recomendado usar um alias mais descritivo para tornar a
leitura e interpretação da query mais simples.

*/