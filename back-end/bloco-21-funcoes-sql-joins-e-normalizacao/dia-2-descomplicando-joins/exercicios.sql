SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;
-- 1) Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme
SELECT
	M.title 'filme',
	B.domestic_sales 'vendas nacionais',
    B.international_sales 'vendas internacionais'
	FROM Pixar.Movies M
		INNER JOIN Pixar.BoxOffice B
			ON B.movie_id = M.id;

-- 2) Utilizando o INNER JOIN, faça uma busca que retorne a SOMA de vendas (internacionais e nacionais) para cada filme que possui um número maior de
--    vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT
	M.title 'filme',
	(B.domestic_sales + B.international_sales) 'vendas'
	FROM Pixar.Movies M
		INNER JOIN Pixar.BoxOffice B
			ON B.movie_id = M.id
		WHERE B.international_sales > B.domestic_sales;

-- 3) Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente
SELECT
	M.title 'filme',
    B.rating 'avaliacao'
    FROM Pixar.Movies M
		INNER JOIN Pixar.BoxOffice B
			ON M.id = B.movie_id
		ORDER BY avaliacao DESC;

-- 4) Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem
--    filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas.
--    Retorne os nomes dos cinemas em ordem alfabética
SELECT
	T.`name` 'cinema',
    T.location 'localizacao',
    M.title 'filme',
    M.director 'diretor',
    M.`year` 'ano',
    M.length_minutes 'duracao'
    FROM Pixar.Theater T
		LEFT JOIN Pixar.Movies M
			ON T.id = M.theater_id
		ORDER BY cinema;

-- 5) Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente,
--    os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	T.`name` 'cinema',
    T.location 'localizacao',
    M.title 'filme',
    M.director 'diretor',
    M.`year` 'ano',
    M.length_minutes 'duracao'
    FROM Pixar.Theater T
		RIGHT JOIN Pixar.Movies M
			ON T.id = M.theater_id
		ORDER BY cinema;