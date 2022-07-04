-- 1) Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
--    Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada,
--    deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

Use sakila;

DELIMITER //

CREATE PROCEDURE Shows10MostPopularActors()
BEGIN
	SELECT actor_id, COUNT(film_id) 'quantidade de filmes' FROM sakila.film_actor
		GROUP BY actor_id
        LIMIT 10;
END //

DELIMITER //