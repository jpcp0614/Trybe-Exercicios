/*
	C - CREATE = INSERT
    R - READ = SELECT
    U - UPDATE = UPDATE
    D - DELETE = DELETE
*/
USE sakila;


-- INSERT
SELECT * FROM actor;
INSERT INTO actor (first_name, last_name)
    VALUES ('CHUCK', 'NORRIS');
SELECT * FROM actor
	WHERE first_name LIKE 'CHUCK%';


-- UPDATE
SET SQL_SAFE_UPDATES = 0;
SELECT  * FROM staff;
UPDATE staff
	SET last_name = 'Travolta', email = 'Jon.Travolta@sakilastaff.com'
    WHERE staff_id = 2 AND last_name = 'Stephens';


-- DELETE
SELECT * FROM `language`;
DELETE FROM `language`
	WHERE language_id = 5;

SELECT * FROM city;
DELETE FROM city
	WHERE city_id = 3;
    -- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
	-- (`sakila`.`address`, CONSTRAINT `fk_address_city` FOREIGN KEY (`city_id`)
	-- REFERENCES `city` (`city_id`) ON DELETE RESTRICT ON UPDATE CASCADE)
SELECT * FROM address
	WHERE city_id = 3; -- address_id = 457
DELETE FROM address
	WHERE city_id = 3;
    -- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
    -- (`sakila`.`customer`, CONSTRAINT `fk_customer_address` FOREIGN KEY (`address_id`)
    -- REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE)
SELECT * FROM customer
	WHERE address_id = 457;
DELETE FROM customer
	WHERE customer_id = 452;
    -- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
    -- (`sakila`.`payment`, CONSTRAINT `fk_payment_customer` FOREIGN KEY (`customer_id`)
    -- REFERENCES `customer` (`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE)
SELECT * FROM payment
	WHERE customer_id = 452;
DELETE FROM payment
	WHERE customer_id = 452; -- OK

DELETE FROM customer
	WHERE customer_id = 452;
    -- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
    -- (`sakila`.`rental`, CONSTRAINT `fk_rental_customer` FOREIGN KEY (`customer_id`)
    -- REFERENCES `customer` (`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE)

SELECT * FROM rental;
DELETE FROM rental
	WHERE customer_id = 452; -- OK

DELETE FROM customer
	WHERE customer_id = 452; -- OK

DELETE FROM address
	WHERE city_id = 3; -- OK

DELETE FROM city
	WHERE city_id = 3; -- OK
SELECT * FROM city;


-- Restaurar banco de dados
-- DROP DATABASE sakila ou Botão direito em cima de sakila -> DROP Schema -> Drop now
-- Open SQL Script