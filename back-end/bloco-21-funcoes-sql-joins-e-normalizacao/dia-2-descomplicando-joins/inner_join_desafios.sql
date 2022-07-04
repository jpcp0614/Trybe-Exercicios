-- 1) Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou
--    usando as tabelas actor e film_actor
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.actor;

SELECT F.actor_id, CONCAT(A.first_name, ' ', A.last_name) 'nome', F.film_id
	FROM sakila.film_actor F
		INNER JOIN sakila.actor A
			ON F.actor_id = A.actor_id;

-- 2) Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco.
--    Use as tabelas staff e address
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT CONCAT(S.first_name, ' ', S.last_name) AS 'nome', A.address AS 'endereço'
	FROM sakila.staff S
		INNER JOIN sakila.address A
			ON S.address_id =  A.address_id;

-- 3) Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem
--    decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora.
--    Essas informações podem ser encontradas nas tabelas customer e address
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT
	C.customer_id 'cliente_id',
	CONCAT(C.first_name, ' ', C.last_name) 'nome',
    C.email,
    A.address_id 'endereco_id',
    A.address 'endereco'
	FROM sakila.customer C
		INNER JOIN sakila.address A
			ON C.address_id = A.address_id
		ORDER BY C.first_name DESC;

-- 4) Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito
--    da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas
--    tabelas address e customer
SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT
	CONCAT(C.first_name, ' ', C.last_name) 'nome',
    C.email,
    A.address_id 'endereco_id',
    A.address 'endereço',
    A.district 'distrito'
    FROM sakila.customer C
		INNER JOIN sakila.address A
			ON A.address_id = C.address_id
		WHERE A.district = 'California' AND C.first_name LIKE '%RENE%';

-- 5) Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados
--    por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser
--    encontradas na tabela address e customer
SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT
	CONCAT(C.first_name, ' ', C.last_name) 'nome',
    COUNT(A.address) 'endereço'
    FROM sakila.address A
		INNER JOIN sakila.customer C
			ON A.address_id = C.address_id
		WHERE C.`active` = 1
		GROUP BY C.customer_id
		ORDER BY nome DESC;

-- 6) Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos
--    funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem
--    estar agrupados pelo nome e sobrenome do funcionário
SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT
	CONCAT(S.first_name, ' ', S.last_name) 'nome',
    AVG(P.amount) 'media'
    FROM sakila.staff S
		INNER JOIN sakila.payment P
			ON S.staff_id = P.staff_id
		WHERE DATE(payment_date) LIKE '2006%'
        GROUP BY nome;

-- 7) Monte uma query que exiba o id do ator, nome, id do filme e título do filme,
--    usando as tabelas actor, film_actor e film.
--    Dica: você precisará fazer mais de um JOIN na mesma query
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT
	A.actor_id 'ator_id',
    CONCAT(A.first_name, ' ', A.last_name) 'nome',
    FA.film_id 'filme_id',
    F.title 'titulo'
    FROM sakila.actor A
		INNER JOIN sakila.film_actor FA
			ON A.actor_id = FA.actor_id
		INNER JOIN sakila.film F
			ON FA.film_id = F.film_id;
    