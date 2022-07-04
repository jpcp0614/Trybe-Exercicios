SELECT * FROM SpotifyClone.`user`;
SELECT * FROM SpotifyClone.reproduction_history;
SELECT * FROM SpotifyClone.song;
SELECT * FROM SpotifyClone.plan;
SELECT * FROM SpotifyClone.artist;
SELECT * FROM SpotifyClone.album;
SELECT * FROM SpotifyClone.following_artists;

-- Desafio 2
SELECT
	COUNT(S.song_id) `cancoes`,
    COUNT(DISTINCT(A.artist_id)) `artistas`,
    COUNT(DISTINCT(A.album_id)) `albuns`
    FROM SpotifyClone.song S
		INNER JOIN SpotifyClone.album A
			ON A.album_id = S.album_id;

-- Desafio 3
SELECT
	U.`user` `usuario`,
    COUNT(RH.song_id) `qtde_musicas_ouvidas`,
    FORMAT(SUM(S.duration_seconds)/60, 2) `total_minutos`
    FROM SpotifyClone.`user` U
		INNER JOIN SpotifyClone.reproduction_history RH
			ON 	RH.user_id = U.user_id
		INNER JOIN SpotifyClone.song S
			ON S.song_id = RH.song_id
		GROUP BY U.user_id
        ORDER BY `usuario`;

-- Desafio 4
SELECT
	U.`user` `usuario`,
    IF (MAX(YEAR(RH.time_stamp)) = 2021, 'Usuário ativo', 'Usuário inativo') `condicao_usuario`
    FROM SpotifyClone.`user` U
		INNER JOIN SpotifyClone.reproduction_history RH
			ON RH.user_id = U.user_id
		GROUP BY U.user_id
		ORDER BY `usuario`;

-- Desafio 5
SELECT
	S.song `cancao`,
    COUNT(RH.user_id) `reproducoes`
    FROM SpotifyClone.song S
		INNER JOIN SpotifyClone.reproduction_history RH
			ON RH.song_id = S.song_id
		GROUP BY S.song_id
        ORDER BY `reproducoes` DESC, `cancao`
        LIMIT 2;

-- Desafio 6
SELECT
	MIN(P.cost) `faturamento_minimo`,
    MAX(P.cost) `faturamento_maximo`,
    FORMAT(AVG(P.cost), 2) `faturamento_medo`,
    SUM(P.cost) `faturamento_total`
    FROM SpotifyClone.plan P
		INNER JOIN SpotifyClone.`user` U
			ON U.plan_id = P.plan_id;

-- Desafio 7
SELECT
	AR.artist `artista`,
    AL.album `album`,
    COUNT(FA.artist_id) `seguidores`
    FROM SpotifyClone.artist AR
		INNER JOIN SpotifyClone.album AL
			ON AL.artist_id = AR.artist_id
		INNER JOIN SpotifyClone.following_artists FA
			ON FA.artist_id = AR.artist_id
		GROUP BY AL.album_id
        ORDER BY `seguidores` DESC, `artista`, `album`;

-- Desafio 8
SELECT
	AR.artist `artista`,
    AL.album `album`
    FROM SpotifyClone.artist AR
		INNER JOIN SpotifyClone.album AL
			ON AL.artist_id = AR.artist_id
		WHERE AR.artist = 'Walter Phoenix'
        ORDER BY `album`;

-- Desafio 9
SELECT
	COUNT(RH.song_id) `quantidade_musicas_no_historico`
    FROM SpotifyClone.reproduction_history RH
		INNER JOIN SpotifyClone.song S
			ON S.song_id = RH.song_id
		INNER JOIN SpotifyClone.`user` U
			ON U.user_id = RH.user_id
		WHERE U.`user` = 'Bill';

-- Desafio 10
SELECT
	S.song `nome`,
    COUNT(RH.song_id) `reproducoes`
    FROM SpotifyClone.song S
		INNER JOIN SpotifyClone.reproduction_history RH
			ON RH.song_id = S.song_id
		INNER JOIN SpotifyClone.`user` U
			ON U.user_id = RH.user_id
		INNER JOIN SpotifyClone.plan P
			ON P.plan_id = U.plan_id
		WHERE P.plan IN ('gratuito', 'pessoal')
        GROUP BY S.song
        ORDER BY `nome`;

-- Desafio 11
SELECT
	S.song `nome_musica`,
    CASE
		WHEN S.song LIKE '%Streets%' THEN REPLACE(S.song, 'Streets', 'Code Review')
        WHEN S.song LIKE '%Her Own%' THEN REPLACE(S.song, 'Her Own', 'Trybe')
        WHEN S.song LIKE '%Inner Fire%' THEN REPLACE(S.song, 'Inner Fire', 'Project')
        WHEN S.song LIKE '%Silly%' THEN REPLACE(S.song, 'Silly', 'Nice')
        WHEN S.song LIKE '%Circus%' THEN REPLACE(S.song, 'Circus', 'Pull Request')
        ELSE S.song
	END `novo_nome`
    FROM SpotifyClone.song S
		WHERE S.song RLIKE 'Streets|Her Own|Inner Fire|Silly|Circus'
        ORDER BY `nome_musica`;
    
