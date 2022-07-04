/*
Adição, Subtração, Multiplicação e Divisão
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

Podem ser utilizados diretamente nas colunas
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;



Divisão de inteiros com DIV e como encontrar seus restos com o MOD

DIV: retorna o resultado inteiro de uma divisão, ignorando as casas decimais
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

MOD: retorna o resto da divisão como retultado
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5


Arredondando Valores

O ROUND arredonda os números de acordo com sua parte decimal. Se for maior ou igual a 0.5, o resultado é um arredondamento para cima.
Caso contrário, ocorre um arredondamento para baixo.

Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); 10
SELECT ROUND(10.5136); 11
SELECT ROUND(-10.5136); -11
SELECT ROUND(10.4925, 2); 10.49
SELECT ROUND(10.4925, 3); 10.493

O arredondamento sempre para cima pode ser feito com o CEIL
SELECT CEIL(10.51); 11
SELECT CEIL(10.49); 11
SELECT CEIL(10.2); 11

O arredondamento sempre para baixo pode ser feito com o FLOOR
SELECT FLOOR(10.51); 10
SELECT FLOOR(10.49); 10
SELECT FLOOR(10.2); 10



Exponenciação e Raiz Quadrada

Para cálculos de exponenciação e raiz quadradas, podemos utilizar as funções POW e SQRT, respectivamente.
Elevando um número X à potência Y usando a função POW
SELECT POW(2, 2); 4
SELECT POW(2, 4); 16

Encontrando a raiz quadrada de um valor usando SQRT
SELECT SQRT(9); 3
SELECT SQRT(16); 4



Gerando valores aleatórios

Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))
*/