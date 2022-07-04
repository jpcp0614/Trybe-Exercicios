USE sakila;
SELECT * FROM actor;

SELECT CONCAT(first_name, last_name) FROM actor; -- strange

SELECT CONCAT(first_name, ' ', last_name) FROM actor; -- very good

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM actor; -- perfect