-- STORED PROCEDURES, STORED FUNCTIONS e TRIGGERS

/*
Comandos que permitirem criar blocos de código SQL reutilizáveis

Podemos armazenar blocos de códigos (queries) para serem usados posteriormente no MySQL de duas maneiras:
- Stored procedure;
- Stored function.

O código fica armazenado no servidor do banco de dados para que possa ser utilizado sem a necessidade de reescrever uma funcionalidade

- Dica sobre como nomear suas procedures e functions
Verbo + resultado -> ObterTotalDeGastos

- Pontos fortes quanto ao uso de Stored Procedures
	a. Centraliza o código SQL em um servidor de banco de dados
    b. Evita a necessidade de reescrever algo específico para cada linguagem
    c. Propaga mudanças feitas em uma stored procedure imediatamente para todas as aplicações que a usam
    
- Pontos fracos quanto ao uso de Stored Procedures
	a. Resolver um único problema na sua regra de negócio
    b. Debugar esse código armazenado é mais difícil
    c. Não há como versionar o código de uma stored procedure tão facilmente
*/
SELECT * FROM sakila.film;
