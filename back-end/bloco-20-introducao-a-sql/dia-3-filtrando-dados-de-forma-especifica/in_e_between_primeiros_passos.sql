USE sakila;

-- IN -> only OR
SELECT * FROM actor
	WHERE first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER');

-- 1) Como você faria, então, para encontrar, usando o IN , todos os detalhes sobre o aluguel dos
--    clientes com os seguintes ids: 269, 239, 126, 399, 142?
--    As informações podem ser encontradas na tabela payment
SELECT * FROM payment
	WHERE payment_id IN (269, 239, 126, 399, 142);

-- 2) Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de
--    QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas? As informações podem ser encontradas na tabela address
SELECT * FROM address
	WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

-- BETWEEN
-- numbers
SELECT * FROM film
	WHERE length BETWEEN 50 AND 120
    ORDER BY length;

-- strings
SELECT * FROM language
	WHERE name BETWEEN 'Engl%' AND 'Japa%';

-- dates
SELECT * FROM rental
	WHERE rental_date BETWEEN '2005-05-27' AND '2005-05-29';