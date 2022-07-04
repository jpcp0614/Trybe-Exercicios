/*

Prncipais tipos de dados que podemos usar no mysql

- Booleanos
- Caracteres
- Números
- Temporais

1) BOOL: pode receber 1 ou 0 e o valor padrão é NULL
2) CHAR(10): tamanho fixo -> permite inserir até 10 caracteres sempre ocupa todo o espaço reservado
3) VARCHAR(10) tamanho variável -> permite inerir até 10 caracteres e ocupa somente o espaço que for preenchido
4) TINYINT: valores exatos inteiros -> 0 até 255 UNSIGNED (somente valores positivos)
									-> -128 a 127 SIGNED (valores positivos e negativos)
5) Valores exatos inteiros: SMALLINT, MEDIUMINT, INT, BIGINT
6) Valores exatos com precisão decimal: DECIMAL -> permite definir a qtd máxima de números e casas decimais
										FLOAT/REAL -> tem precisão de uma casa decimal
										DOUBLE -> tem a precisão de duas casas decimais
7) Temporais: DATE -> armazena por padrão YYYY-MM-DD
			  TIME -> HH:MM:SS
              YEAR -> somente ano entre 1901 e 2155
              DATETIMA -> YYYY-MM.DD HH:MM:SS até 9999-12-31 23:59:59
              TIMESTAMP -> igual ao DATETIMA mas também opera com base em fuso horário

8) PRIMARY KEY: identificador único para uma linha (pode ter em uma coluna ou mais)
				CREATE TABLE nome_da_tabela ( nome_da_coluna PRIMARY KEY)
9) FOREIGN KEY: chaves estrangeiras que identifica uma coluna ou mais de uma tabeça em uma outra tabela


