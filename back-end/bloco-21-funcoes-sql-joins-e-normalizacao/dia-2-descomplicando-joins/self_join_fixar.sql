-- 1) Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências
--    (manager) cujos departamentos (department) são diferentes
SELECT * FROM hr.employees;

SELECT
	CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) 'colaboradores',
    CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) 'gerente'
    FROM hr.employees e
		INNER JOIN hr.employees m
			ON e.MANAGER_ID = m.EMPLOYEE_ID
		WHERE e.DEPARTMENT_ID != m.DEPARTMENT_ID;

-- 2) Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.
SELECT * FROM hr.employees;

SELECT
	CONCAT(m.FIRST_NAME, ' ' , m.LAST_NAME) 'gerencia',
    COUNT(*) 'quantidade'
    FROM hr.employees m
		INNER JOIN hr.employees e
			ON m.MANAGER_ID = e.MANAGER_ID
		GROUP BY m.EMPLOYEE_ID;
    