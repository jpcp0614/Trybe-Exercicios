USE sakila;

-- 1) Insira um novo funcionário na tabela sakila.staff.
--    Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector".
--    Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados
--    automaticamente não precisam ser inseridos manualmente. Boa explorada!
SELECT * FROM staff;
INSERT INTO `staff`
	(first_name, last_name, address_id, email, store_id, active, username, password)
    VALUES
    ('Bilbo', 'Baggins', 2, 'bilbo_baggins@gmail.com', 1, 1, 'bilbo-bag', 'TheHobbit');
SELECT * FROM staff;

-- 2) Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query
INSERT INTO `staff`
	(first_name, last_name, address_id, email, store_id, active, username, password)
    VALUES
    ('Gandalf', 'The Gray', 3, 'olorin@gmail.com', 2, 1, 'mithrandir', 'AinurMaiar'),
    ('Aragorn', 'II', 2, 'dunedain@gmail.com', 1, 1, 'elessar', 'RangerOfTheNorth');
SELECT * FROM staff;

-- 3) Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor
SELECT * FROM customer;
SELECT* FROM actor;
INSERT INTO actor(first_name, last_name)
	SELECT first_name, last_name
    FROM customer
    ORDER BY customer_id
    LIMIT 5;
SELECT * FROM actor;

-- 4) Cadastre três categorias de uma vez só na tabela sakila.category
SELECT * FROM category;
INSERT INTO category (name)
    VALUES
	('Fantasy'),
    ('Biography'),
    ('History');
SELECT * FROM category;

-- 5) Cadastre uma nova loja na tabela sakila.store
SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id)
    VALUES (3, 1);
SELECT * FROM store;