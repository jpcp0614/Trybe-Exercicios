-- UNIONS e SUBQUERIES


-- 1 UNION

-- O UNION permite acrescentar os resultados de uma query à outra
-- é preciso ter a mesma quantidade de colunas
SELECT * FROM sakila.actor; -- first_name, last_name
SELECT * FROM sakila.customer; -- first_name, last_name

SELECT first_name, last_name FROM sakila.actor
	UNION -- remove os valores duplicados
SELECT first_name, last_name FROM sakila.customer;

-- UNION ALL
SELECT first_name, last_name FROM sakila.actor
	UNION ALL -- não remove os valores duplicados
SELECT first_name, last_name FROM sakila.customer;

-- quantidade de colunas diferentes
(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor)
	UNION ALL -- remove os valores duplicados
(SELECT first_name, last_name, customer_id FROM sakila.customer)
ORDER BY first_name; -- cada select com parêntesis

-- paginar (LIMIT)
(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor LIMIT 10)
	UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 10)
ORDER BY first_name
LIMIT 10;

-- próximos 10 valores
(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor LIMIT 20)
	UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 20)
ORDER BY first_name
LIMIT 10 OFFSET 10;


-- 2 SUBQUERIES
/*
   Uma SUBQUERY é uma query aninhada que é avaliada dentro de um par de parênteses.
   Ela pode conter expressões simples, como adições e subtrações, mas não se limita a isso,
   uma vez que podemos utilizar praticamente todos os comandos já vistos até o momento dentro de uma SUBQUERY
   Algo a se lembrar é que a subquery não é a única maneira de encontrar resultados de tabelas relacionadas.
   Quando se trata de SQL, os JOINs podem ser usados para encontrar os mesmos resultados.
   É recomendado tomar a decisão sobre qual opção utilizar (subquery ou JOIN ) baseando-se na performance da sua query.
*/


-- Usando uma SUBQUERY como fonte de dados para o FROM
SELECT * FROM sakila.film;
SELECT f.title, f.rating
	FROM (
		SELECT *
			FROM sakila.film
				WHERE rating = 'R'
	) AS f; -- 0,0014 sec


-- Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY
SELECT
    address,
    district,
    (
	SELECT city
		FROM sakila.city
			WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;


-- Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY 
SELECT address, district
	FROM sakila.address
	WHERE city_id in (
		SELECT city_id
			FROM sakila.city
			WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan'));


-- Usando uma tabela externa, de fora da SUBQUERY, dentro dela.
SELECT
    first_name,
    (
	SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa; -- query cost 61.15

-- com JOIN
SELECT c.first_name, ad.address
	FROM sakila.customer c
		INNER JOIN sakila.address ad
			ON c.address_id = ad.address_id; -- query cost 270.80

