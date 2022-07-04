--  Buscar o nome das pessoas colaboradoras e das respectivas gerências (manager) na tabela employees

SELECT
	CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) 'pessoa_colaboradora',
    CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) 'gerencia'
		FROM hr.employees e
			INNER JOIN hr.employees m
				ON e.MANAGER_ID = m.EMPLOYEE_ID;