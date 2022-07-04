/*

Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING

Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY,
o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos.
O GROUP BY também pode ser usado em conjunto com as funções de agregação que vimos anteriormente.
O GROUP BY pode ser construído da seguinte forma:

SELECT coluna(s) FROM tabela
GROUP BY coluna(s);


Uma das formas como podemos utilizar o GROUP BY é agrupar os registros pelo valor de uma coluna,
exibindo apenas um registro de cada valor, como é feito com a coluna first_name a seguir.

SELECT first_name FROM sakila.actor
GROUP BY first_name;

Se você executar a query anterior no seu banco de dados sakila, verá que são retornados 128 resultados.
Porém, se retirar o GROUP BY, como na query abaixo, notará que existem 200 registros na tabela actor.
Isso acontece, pelo fato de ele agrupar todos os registros que possuem o mesmo first_name,
evitando duplicações na hora de retornar os dados.

É mais comum utilizar o GROUP BY em conjunto com o AVG, MIN, MAX, SUM ou COUNT. Por exemplo, caso queiramos
saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT().
Assim, teremos uma informação mais fácil de ser compreendida

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;
*/

-- Exemplos com GROUP BY:

-- 1) Média de duração de filmes agrupados por classificação indicativa
SELECT rating, ROUND(AVG(length), 2) FROM film GROUP BY rating;

-- 2) Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost) FROM film GROUP BY rating;

-- 3) Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost) FROM film GROUP BY rating;

-- 4) Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost) FROM film GROUP BY rating;


-- Exemplos do video:
USE sakila;
SELECT district, COUNT(*) FROM address
	GROUP BY district -- não há repetição de valores
    HAVING COUNT(*) > 5;
    

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- É importante entender que quando usamos o HAVING estamos filtrando
-- somente os resultados gerados após o GROUP BY ter sido executado