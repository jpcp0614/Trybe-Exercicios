USE sakila;

-- only actors with last name
SELECT * FROM actor
	WHERE last_name = 'DAVIS';

-- only actors with id
SELECT * FROM actor
	WHERE actor_id = 101;
    
-- operators
SELECT * FROM film
	WHERE length > 50
    ORDER BY length;

SELECT * FROM film
	WHERE title != 'ALIEN CENTER'
		AND replacement_cost > 20;

SELECT * FROM film
	WHERE rating = 'G'
		OR rating = 'PG-13';

SELECT * FROM rental
	WHERE return_date IS NULL;

SELECT * FROM staff
	WHERE active IS NOT TRUE; -- or FALSE

SELECT * FROM address
	WHERE address2 IS NOT NULL;

SELECT * FROM film
	WHERE title NOT LIKE 'ACADEMY%';
    
SELECT * FROM payment
	WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

SELECT * FROM payment
	WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;



