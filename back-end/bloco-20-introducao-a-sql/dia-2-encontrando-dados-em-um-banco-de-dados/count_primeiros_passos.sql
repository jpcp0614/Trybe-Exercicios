USE sakila;

-- count all items
SELECT COUNT(*) FROM actor;

-- count by firt name
SELECT COUNT(first_name) FROM actor;

-- count by first name (no repetition)
SELECT COUNT(DISTINCT first_name) FROM actor;

-- count by first name and last name (no repetition)
SELECT COUNT(DISTINCT first_name, last_name) FROM actor;

-- addres2 receives null value
SELECT COUNT(address2) FROM address;

-- all items
SELECT * FROM address;

-- count how many districts
SELECT COUNT(district) FROM address;

-- count how many districts within a condition
SELECT COUNT(district) FROM address
	WHERE district = 'Alberta';
    
-- count how many address2 have empty field
SELECT COUNT(address2) FROM address
	WHERE address2 = '';
