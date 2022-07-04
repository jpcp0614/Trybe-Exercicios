SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;

-- last_name's  iguais - LEFT JOIN
SELECT
	C.customer_id,
    C.first_name,
    A.actor_id
    FROM sakila.customer C
		LEFT JOIN sakila.actor A -- faz referência a tabela da esquerda na grid de resultados, comparando com a tabela do lado direito (actor_id)
			ON C.last_name = A.last_name;

-- last_name's  iguais - RIGHT JOIN
SELECT
	C.customer_id,
    C.first_name,
    A.actor_id
    FROM sakila.customer C
		RIGHT JOIN sakila.actor A -- faz referência a tabela da direita na grid de resultados, comparando com a tabela do lado esquerdo (customer_id, first_name)
			ON C.last_name = A.last_name;
            
-- LEFT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
	FROM sakila.customer AS c
		LEFT JOIN sakila.actor AS a
			ON c.last_name = a.last_name
		ORDER BY c.last_name;

-- RIGHT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
	FROM sakila.customer AS c
		RIGHT JOIN sakila.actor AS a
			ON c.last_name = a.last_name
		ORDER BY c.last_name;

-- INNER JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
	FROM sakila.customer AS c
		INNER JOIN sakila.actor AS a
			ON c.last_name = a.last_name
		ORDER BY c.last_name;