Use sakila;

-- 1) Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50.
--   Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível.
--   Finalize ordenando os resultados de forma decrescente
SELECT rating, AVG(length) AS average_length
    FROM sakila.film
    GROUP BY rating
    HAVING average_length BETWEEN 115.0 AND 121.50
    ORDER BY average_length DESC;
    
-- 2) Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50.
--    Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível.
--    Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) AS higher_replacement_costs
    FROM sakila.film
    GROUP by rating
    HAVING higher_replacement_costs > 3950.50
    ORDER BY higher_replacement_costs;