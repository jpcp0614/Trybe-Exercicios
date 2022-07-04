-- SINTAXE
-- SELECT IF (CONDICAO, VERDADEIRO, FALSO)

USE sakila;
SELECT * FROM film;

-- IF
SELECT title, IF(rental_rate > 0.99, 'CARO', 'BARATO') AS 'Resultado condicional' FROM film;

SELECT title, rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'BARATO'
        WHEN rental_rate = 2.99 THEN 'MÉDIO'
        WHEN rental_rate = 4.99 THEN 'CARO'
	ELSE rental_rate = 'NÃO CLASSIFICADO'
END AS valor
FROM film
LIMIT 10;

SELECT first_name,
	IF(`active`, 'Cliente Ativo', 'Cliente Inativo') AS `status`
    FROM customer LIMIT 10;

SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM customer
LIMIT 10;