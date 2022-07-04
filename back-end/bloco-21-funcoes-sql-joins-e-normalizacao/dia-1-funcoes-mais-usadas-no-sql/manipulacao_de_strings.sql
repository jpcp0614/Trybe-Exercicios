-- Manipulação de Strings

-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string!'); -- > 'OI, EU SOU UMA STRING!'

-- Converte o texto da string em caixa baixa
SELECT LCASE('Oi, eu sou uma string!'); -- > 'oi, eu sou uma string!'

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, seu sou uma string!', 'string', 'cadeia de caracteres'); -- > 'Oi, seu sou uma cadeia de caracteres!'

-- Retorna a parte da esquerda de uma string de acordo com o número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3); -- > Oi,

-- Retorna a parte da direita de uma string de acordo com o número de caracteres especificado
SELECT RIGHT('Oi, eu sou uma string!', 7); -- > string!

-- Exibe o tamanho, em caracteres, da string: a função LENGTH retorna o tamanho em bytes
SELECT CHAR_LENGTH('Oi, eu sou uma string!'); -- > 22

-- Extrai parte de uma string de acordo com o índice de um caractere inicial e a quantidade de caracteres a extrair
-- As strings são indexadas a partir do índice 1 e não no índice 0
SELECT SUBSTRING('Oi, eu sou uma string!', 5, 2); -- > eu

-- Se a quantidade de caracteres a extrair não for definida, então será extraída do índice definido até o final da string
SELECT SUBSTRING('Oi, eu sou uma string!', 5); -- > eu sou uma string!


/* Para testar */

USE sakila;
SELECT * FROM film;

SELECT UCASE(`description`) FROM film LIMIT 5;

SELECT LCASE(title) FROM film LIMIT 5;

SELECT REPLACE(title, 'ACADEMY', 'XABLAU') AS 'New title' FROM film	WHERE film_id = 1;
    
SELECT LEFT(`description`, 12) AS 'New description' FROM film WHERE film_id = 1;

SELECT LCASE(RIGHT(title, 8)) AS 'New title' FROM film WHERE film_id = 1;

SELECT CHAR_LENGTH(title) FROM film WHERE film_id = 1;

SELECT UCASE(SUBSTRING(`description`, 3, 4)) FROM film WHERE film_id = 1;

SELECT LCASE(SUBSTRING(title, 1)) FROM film WHERE film_id = 1;