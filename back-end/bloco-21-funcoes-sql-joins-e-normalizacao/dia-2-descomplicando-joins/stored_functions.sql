 -- Exemplo
 
 /*
 -- Exibe a quantidade de filmes em que um determinado ator ou atriz atuou
 USE sakila;
 
 DELIMITER //
 
 CREATE FUNCTION AmountMoviesWithActor(actor_id INT)
	RETURNS INT READS SQL DATA
 BEGIN
	DECLARE movies_total INT;
	SELECT COUNT(*) FROM sakila.film_actor FA
		WHERE FA.actor_id = actor_id INTO movies_total;
	RETURN movies_total;
END //

DELIMITER //
*/

-- exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro
USE sakila;

DELIMITER //

CREATE FUNCTION GetFullName(id INT)
	RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name) FROM sakila.actor
		WHERE actor_id = id
		LIMIT 1
		INTO full_name ;
    RETURN full_name;
END //

DELIMITER //