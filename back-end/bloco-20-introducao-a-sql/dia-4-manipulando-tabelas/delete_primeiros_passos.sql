-- Excluir dados da tabela
-- DELETE FROM banco_de_dados.tabela
-- WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.
SET SQL_SAFE_UPDATES = 0;
USE sakila;

-- excluir o ator GRACE
-- DELETE FROM actor
-- 	WHERE first_name = 'GRACE';

-- Para conseguir excluir este ator em actors , precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor
DELETE FROM film_actor
	WHERE actor_id = 7;

DELETE FROM actor
	WHERE first_name = 'GRACE';

SELECT * FROM actor;