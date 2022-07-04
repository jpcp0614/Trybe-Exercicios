-- Tarefa Bônus - 1 a 5
USE PiecesProviders;

-- 1) Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT
SELECT Provider, Price FROM Provides
	WHERE Provider = 'RBT';
    
-- 2) Escreve uma query para exibir todas as informações das cinco peças com os maiores preços
SELECT * FROM Provides
	ORDER BY Price DESC
    LIMIT 5;

-- 3) Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item
SELECT Provider, Price FROM Provides
	ORDER BY Price DESC
    LIMIT 4  OFFSET 2;

-- 4) Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL
--    Ordene o resultado pelos preços das peças de forma decrescente
SELECT * FROM Provides
	WHERE Provider = 'HAL'
    ORDER BY Price DESC;

-- 5) Escreva uma query para exibir por quantas empresas a peça 1 é provida
SELECT COUNT(Piece) FROM Provides
	WHERE Piece = 1;






