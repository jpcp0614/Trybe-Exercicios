-- SELECT * FROM sakila.film;

-- Create Procedure

Use sakila;

DELIMITER //

CREATE PROCEDURE AverageReturnLengthPerLetter(IN selectedLetter VARCHAR(1), OUT averageLength DOUBLE)
BEGIN
	SELECT AVG(length) FROM film
		WHERE title LIKE selectdLetter
        INTO averageLength;
END //

DELIMITER //