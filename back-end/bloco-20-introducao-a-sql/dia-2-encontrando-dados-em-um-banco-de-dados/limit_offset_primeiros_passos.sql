USE sakila;

-- limit the numbers of rows and skip 3
SELECT * FROM rental LIMIT 10 OFFSET 3;

-- Qual query eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY na tabela actor?
SELECT * FROM actor LIMIT 10 OFFSET 5;