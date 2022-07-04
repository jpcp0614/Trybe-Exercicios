-- aula ao vivo
USE sakila;

-- DISTINCT (info that is not repeated)
SELECT DISTINCT first_name FROM actor;

SELECT DISTINCT release_year FROM film;

SELECT DISTINCT actor_id, first_name, last_name FROM actor -- DISTINCT para PRIMARY KEY seria muito difícil ser usada
	LIMIT 50 OFFSET 10; -- OFFSET é dependente do LIMIT

SELECT COUNT(*) FROM address; -- 603
SELECT COUNT(address2) FROM address; -- 599

SELECT * FROM actor ORDER BY first_name DESC, last_name DESC;