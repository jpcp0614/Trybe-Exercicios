-- update

-- UPDATE nome_da_tabela
-- SET propriedade_a_ser_alterada = 'novo valor para coluna'
-- WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

-- UPDATE sakila.staff
-- SET first_name = 'Rannveig'
-- WHERE first_name = 'Ravein';

-- IMPORTANTE:
-- Em uma janela de query dentro do MySQL Workbench, sempre que abri-lo, é possível desabilitar a funcionalidade do ID,
-- antes de executar seus comandos de UPDATE ou DELETE
-- SET SQL_SAFE_UPDATES = 0;

-- Alterando mais de uma coluna ao mesmo tempo
-- UPDATE sakila.staff
-- SET first_name = 'Rannveig', last_name = 'Jordan'
-- WHERE staff_id = 4;

-- Atualização em massa
-- Opção 1 - Incluindo a lista de condições fixas
-- UPDATE sakila.actor
-- SET first_name = 'JOE'
-- WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
-- UPDATE sakila.actor
-- SET first_name = (
-- CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
--               WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
--               WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
--           ELSE first_name -- em todos os outros casos, mantém-se o first_name
-- END);


-- UPDATE de forma sequencial
-- Se o comando ORDER BY for usado juntamente com o UPDATE, os resultados serão alterados na ordem em que forem encontrados.
-- Se o comando LIMIT for usado em conjunto com o UPDATE, um limite será imposto na quantidade de resultados que podem ser alterados.
-- Caso contrário, todos os resultados que satisfizerem a condição serão atualizados.
-- Veja a sintaxe abaixo. Lembre-se de que os valores entre colchetes ( [] ) são opcionais:

-- UPDATE nome_da_tabela
-- SET coluna1 = valor1, coluna2 = valor2
-- [WHERE condições]
-- [ORDER BY expressao [ ASC | DESC ]]
-- [LIMIT quantidade_resultados];

-- -- Exemplo:
-- UPDATE sakila.staff
-- SET password = 'FavorResetarSuaSenha123'
-- WHERE active = 1
-- ORDER BY last_update
-- LIMIT 2;

-- safe-updates:
-- SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;


