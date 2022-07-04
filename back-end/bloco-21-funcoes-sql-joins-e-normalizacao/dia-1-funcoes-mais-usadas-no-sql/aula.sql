USE sakila;

-- 1) IF
SELECT
	customer_id AS cliente_id,
    `active` AS ativo,
    IF(`active`, 'Ativo', 'Inativo') AS `status do cliente`
    FROM customer;

-- 2) CASE
SELECT
	customer_id,
    store_id,
    CASE store_id
		WHEN 1 THEN 'loja 1'
        WHEN 2 THEN 'loja 2'
	END AS nome_loja
    FROM customer;
    
SELECT
	CASE
		WHEN length <= 30 THEN 'Até 30min'
        WHEN length BETWEEN 30.1 AND 60 THEN 'De 30min a 1h'
        WHEN length BETWEEN 60.1 AND 90 THEN 'De 1h a 1h30'
        WHEN length BETWEEN 90.1 AND 120 THEN 'De 1h30 a 2h'
		ELSE 'Mais de 2h'
	END AS 'Duração do filme'
    FROM film;

-- 3) DATE_FORMAT: https://www.w3schools.com/sql/func_mysql_date_format.asp

-- 4_ COUNT com valores nulos (também serve com o AVG -> ao invés de string vazia, usar o zero)

SELECT address2 FROM address;
SELECT COUNT(address2) FROM address;
SELECT COUNT(COALESCE(address2, "")) FROM address;

-- 5) GROUP BY com duas colunas
SELECT store_id, `active`, COUNT(customer_id) AS 'TOTAL' FROM customer
GROUP BY store_id, `active`;


-- 6) HAVING
-- Por que o filtro não pode ser usado com o WHERE no GROUP BY?
-- Porque não existe uma coluna com quantidade, por exemplo. Só existe depois de usar o GROUP BY
SELECT store_id, `active`, COUNT(customer_id) AS 'TOTAL' FROM customer
GROUP BY store_id, `active`
HAVING TOTAL > 300;

SELECT
	CASE
		WHEN length <= 30 THEN 'Até 30min'
        WHEN length BETWEEN 30.1 AND 60 THEN 'De 30min a 1h'
        WHEN length BETWEEN 60.1 AND 90 THEN 'De 1h a 1h30'
        WHEN length BETWEEN 90.1 AND 120 THEN 'De 1h30 a 2h'
		ELSE 'Mais de 2h'
	END AS `duracao` , COUNT(film_id) AS qdt_filmes
    FROM film
    GROUP BY duracao
    HAVING qdt_filmes > 200;