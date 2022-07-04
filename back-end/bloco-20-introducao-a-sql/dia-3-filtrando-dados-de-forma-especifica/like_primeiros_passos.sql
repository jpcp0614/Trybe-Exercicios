USE sakila;

-- 1) Encontra qualquer resultado finalizando com "don"
SELECT * FROM film
	WHERE title LIKE '%DON';

-- 2) Encontra qualquer resultado iniciando com "plu"
SELECT * FROM film
	WHERE title LIKE 'PLU%';

-- 3) Encontra qualquer resultado que contém "plu"
SELECT * FROM film
	WHERE title LIKE '%PLU%';

-- 4) Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM film
	WHERE title LIKE 'P%R';
    
-- 5) Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM film
	WHERE title LIKE '_C%';
    
-- 6) Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM film
	WHERE title LIKE '________';

-- 7) Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM film
	WHERE title LIKE 'E__%';





