/*

Normalização: reduzir ao máximos a quantidade de redundâncias e anomalias na tabela

1ª Forma Normal:
	- As tabelas devem ser escaláveis (preparadas para uma grande quantidade de dados)
    - As tabelas devem ser entensíveis (as mudanças não podem quebrar a integridade dos dados)
	- Colunas devem possuir apenas um valor
	- Valores em uma coluna devem ser do mesmo tipo de dados
	- Cada coluna deve possuir um nome único
	- A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados

2ª Forma Normal
	- A tabela deve estar na 1ª Forma Normal
	- A tabela não deve possuir dependências parciais (qualquer coluna que não depende exclusivamente da chave primária para existir)
    - Aqui costuma entrar a tabela intermediária

3ª Forma Normal
	- A tabela deve estar na 1ª e 2ª Formas Normais;
	- A tabela não deve conter atributos (colunas) que não sejam totalmente dependentes na PK (chave primária).