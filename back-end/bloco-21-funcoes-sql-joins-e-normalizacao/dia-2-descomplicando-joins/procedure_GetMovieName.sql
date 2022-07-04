-- Create Procedure

USE sakila;

DELIMITER //

CREATE PROCEDURE GetMovieName()
BEGIN
	SELECT title FROM film;
END //
    
DELIMITER //