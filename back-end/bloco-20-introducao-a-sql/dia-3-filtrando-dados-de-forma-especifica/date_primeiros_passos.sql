USE sakila;

-- 1) Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM payment
	WHERE DATE(payment_date) = '2005-07-31';
    
-- 2) Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM payment
	WHERE payment_date LIKE '2005-07-31%'; -- demorou mais em relação ao 1)

-- 3) Encontra um pagamento com dia e hora exatos
SELECT * FROM payment
	Where payment_date LIKE '2005-08-20 00:30:52';

-- 4) Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
SELECT * FROM payment
	WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

-- Apenas uma parte da data
SELECT DATE(payment_date) FROM payment; -- data sem hora
SELECT YEAR(payment_date) FROM payment; -- somente o ano
SELECT MONTH(payment_date) FROM payment; -- somente o mês
SELECT DAY(payment_date) FROM payment; -- somente o dia
SELECT HOUR(payment_date) FROM sakila.payment; -- somente a hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- somente o minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- somente o segundo