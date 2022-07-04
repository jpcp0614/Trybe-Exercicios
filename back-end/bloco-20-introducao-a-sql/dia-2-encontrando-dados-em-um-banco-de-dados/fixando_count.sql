USE sakila;

-- 1) Quantas senhas temos cadastradas nessa tabela? uma
SELECT COUNT(password) FROM staff;

-- 2) Quantas pessoas temos no total trabalhando para nossa empresa? duas
SELECT COUNT(*) FROM staff;

-- 3) Quantos emails temos cadastrados nessa tabela? dois
SELECT COUNT(email) FROM staff;