-- Create Procedure

USE sakila;

DELIMITER //

CREATE PROCEDURE SelectMoviesHigherLength(IN valor NUMERIC)
BEGIN
	SELECT * FROM film WHERE length > valor;
END //
    
DELIMITER //