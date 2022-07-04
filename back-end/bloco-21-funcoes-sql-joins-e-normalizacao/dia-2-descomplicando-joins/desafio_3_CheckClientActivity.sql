-- 3) Monte uma procedure que receba o email de um cliente como parâmetro de entrada e
--    diga se o cliente está ou não ativo, através de um parâmetro de saída.

USE sakila;

DELIMITER //

CREATE PROCEDURE CheckClientActivity(IN verifyActivity VARCHAR(100))
BEGIN
	SELECT email,
		IF (`active`, 'SIM', 'NÃO') 'cliente está ativo?'
        FROM sakila.customer
        WHERE email = verifyActivity;
END //

DELIMITER //