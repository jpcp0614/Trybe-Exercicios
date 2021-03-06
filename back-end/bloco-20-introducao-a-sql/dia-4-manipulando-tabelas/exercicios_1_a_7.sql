-- Exercícios de 1 a 7

USE Pixar;

-- 1) Insira as produções da Pixar abaixo na tabela Movies:
/*
	Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
	Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
	Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
	WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
*/

SELECT * FROM Movies;
INSERT INTO Movies (title, director, `year`, length_minutes)
	VALUES
		('Monstros SA', 'Pete Docter', 2001, 92),
		('Procurando Nemo', 'John Lasseter', 2003, 107),
		('Os Incríveis', 'Brad Bird', 2004, 116),
		('WALL-E', 'Pete Docter', 2004, 104);
    
-- 2) Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno
--    e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice
SELECT * FROM BoxOffice;
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUES
		(8, 6.8, 450000000, 370000000);

-- 3) O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton.
--    Corrija esse dado utilizando o UPDATE
SET SQL_SAFE_UPDATES = 0; -- ou FALSE
UPDATE Movies
	SET director = 'Andrew Staton'
    WHERE id = 9;

-- 4) O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies.
--    Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE
UPDATE Movies
	SET title = 'Ratatouille', `year` = 2010
    WHERE id = 3;

-- 5) Insira as novas classificações abaixo na tabela BoxOffice; lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies
/*
	Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
	Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
	WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
*/
UPDATE BoxOffice
	SET movie_id = 9
    WHERE movie_id = 8; -- corrigir o id que coloquei no exercício 2

INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUES
		(8, 8.5, 300000000, 250000000),
        (10, 7.4, 460000000, 510000000),
        (11, 9.9, 290000000, 280000000);

-- 6) Exclua da tabela Movies o filme "WALL-E"
SELECT * FROM Movies;
SELECT * FROM BoxOffice;

DELETE FROM Movies
	WHERE title = 'WALL-E'; -- id = 11
    -- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
    -- (`Pixar`.`BoxOffice`, CONSTRAINT `BoxOffice_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
DELETE FROM BoxOffice
	WHERE movie_id = 11; -- OK
DELETE FROM Movies
	WHERE title = 'WALL-E'; -- OK


-- 7) Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton"
SELECT * FROM Movies
	WHERE director LIKE 'Andrew%'; -- id's = 2 e 9

DELETE FROM BoxOffice
	WHERE movie_id IN (2, 9); -- OK
DELETE FROM Movies
	WHERE id IN (2, 9); -- OK


