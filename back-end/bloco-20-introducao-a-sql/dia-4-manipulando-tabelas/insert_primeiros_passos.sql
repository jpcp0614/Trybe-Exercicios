USE sakila;

SELECT * FROM staff;

-- Inserir dados na tabela
-- INSERT INTO nome_da_tabela (coluna1, coluna2)
-- VALUES ('valor_coluna1', 'valor_coluna2');

-- Inserir múltiplas linhas
-- INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
-- ('valor_1','valor_2'),
-- ('valor_3','valor_4'),
-- ('valor_5','valor_6');

-- Ignorando linhas existentes
-- INSERT IGNORE INTO pessoas (id, name) VALUES
-- (4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
-- (5,'Amanda');

-- Insert select (inserindo dados de uma outra tabela)
-- INSERT INTO tabelaA (coluna1, coluna2)
--     SELECT tabelaB.coluna1, tabelaB.coluna2
--     FROM tabelaB
--     WHERE tabelaB.nome_da_coluna <> 'algumValor'
--     ORDER BY tabelaB.coluna_de_ordenacao;