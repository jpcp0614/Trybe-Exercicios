-- 2) Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string
--    e que exiba o id do filme, seu titulo , o id de sua categoria e o nome da categoria selecionada.
--    Use as tabelas film , film_category e category para montar essa procedure.

USE sakila;

DELIMITER //

CREATE PROCEDURE ShowMoviesByCategory(IN categoryName VARCHAR(50))
BEGIN
	SELECT 
		F.film_id,
        F.title,
        FC.category_id,
        C.`name`
        FROM sakila.film F
			INNER JOIN sakila.film_category FC
				ON F.film_id = FC.film_id
			INNER JOIN sakila.category C
				ON C.category_id = FC.category_id
			WHERE C.`name` = categoryName;
END //

DELIMITER //
