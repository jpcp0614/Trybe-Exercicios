-- 6) Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT
	M.id,
	M.`title` 'Filme',
    M.director 'Direção',
    M.`year` 'Ano de Lançamento',
    M.length_minutes 'Duração',
    B.rating 'Avaliação',
    T.`name` 'Cinema',
    T.location 'Localização'
    FROM Pixar.Movies M
		INNER JOIN Pixar.BoxOffice B
			ON B.movie_id = M.id
		INNER JOIN Pixar.Theater T
			ON M.theater_id = T.id
		WHERE B.rating > 8
		ORDER BY B.rating;
    