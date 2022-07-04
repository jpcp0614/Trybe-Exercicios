-- Create Procedure

-- SET @film = 'ACE GOLDFINGER';
-- SELECT * FROM sakila.film WHERE title = @film;

USE sakila;

DELIMITER //

CREATE PROCEDURE AverageReturnOfLength(OUT averageLength DOUBLE)
BEGIN
	SELECT AVG(length) FROM film INTO averageLength;
END //

DELIMITER //

/*

CALL AverageReturnOfLength(@average);

SELECT title, length, @average FROM sakila.film WHERE length < @average;

*/