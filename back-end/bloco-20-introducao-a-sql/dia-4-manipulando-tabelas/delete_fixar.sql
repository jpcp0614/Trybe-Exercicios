SET SQL_SAFE_UPDATES = 0;

USE sakila;

-- 1) Exclua do banco de dados o ator com o nome de "KARL"
SELECT * FROM actor
	WHERE first_name = 'KARL'; -- id = 12

DELETE FROM film_actor
	WHERE actor_id = 12;

DELETE FROM actor
	WHERE first_name = 'KARL'; -- deletar
SELECT * FROM actor; -- deletou? -> OK

-- 2) Exclua do banco de dados os atores com o nome de "MATTHEW"
SELECT * FROM actor
	WHERE first_name = 'MATTHEW'; -- ids = 8, 103, 181

DELETE FROM film_actor
	WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
	WHERE first_name = 'MATTHEW';

-- 3) Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições
SELECT * FROM film_text;
DELETE FROM film_text
	WHERE description LIKE '%saga%';

-- 4) Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category
TRUNCATE film_actor;
SELECT * FROM film_actor;

TRUNCATE film_category;
SELECT * FROM film_category;

-- 5) Inspecione todas as tabelas do banco de dados sakila e analise quais restrições
--    ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- ON DELETE RESTRICT ON UPDATE CASCADE
-- address (`city_id`),
-- city (`country_id`),
-- customer (`address_id`) e (`store_id`),
-- film (`language_id`) e (`language_id`),
-- film_actor (`actor_id`) e (`film_id`),
-- film_category (`category_id`) e (`film_id`),
-- inventory (`film_id`) e (`store_id`),
-- payment (`customer_id`), (`rental_id`) e (`staff_id`),
-- rental (`customer_id`), (`inventory_id`) e (`staff_id`),
-- staff (`address_id`) e (`store_id`)
-- store (`address_id`) e (`staff_id`)

-- 6) Exclua o banco de dados e o recrie (use as instruções no início desta aula)
DROP DATABASE sakila;
-- Open SQL Scrip e executo o arquivo