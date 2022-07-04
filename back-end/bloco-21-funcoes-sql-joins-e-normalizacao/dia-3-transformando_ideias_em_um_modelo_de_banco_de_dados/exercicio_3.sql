-- 3) Monte uma query que:
-- 		a)  Crie um banco de dados chamado normalization ;
-- 		b)  Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
-- 		c)  Popule todas as tabelas com os dados fornecidos nos exercícios.

-- CREATE DATABASE IF NOT EXISTS normalization;

-- Tabela 1 (employee):  |  Funcionario_id  |  Nome  |  Sobrenome  |  Email  |  Telefone  |  DataCadastro  |
-- Tabela 2 (sector):  |  setor_id  |  Setor  |
-- Tabela 3 (employee_sector):  |  Funcionario_id  |  setor_id  |

USE normalization;

CREATE TABLE `employee` (
	`employee_id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100),
    `last_name` VARCHAR(100),
    `email` VARCHAR(100),
    `phone_number` VARCHAR(20),
    `registration_date` VARCHAR(20),
    PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB;

INSERT INTO `employee` (`employee_id`, `first_name`, `last_name`, `email`, `phone_number`, `registration_date`)
	VALUES
		(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)-998552-1445', '2020-05-05 08:50:25'),
        (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
        (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
        (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');


CREATE TABLE `sector` (
	`sector_id` INT NOT NULL AUTO_INCREMENT,
    `sector` VARCHAR(20),
    PRIMARY KEY (`sector_id`)
) ENGINE=InnoDB;

INSERT INTO `sector` (`sector`)
	VALUES ('Administration'), ('Sales'), ('Operational'), ('Strategic'), ('Marketing');
    
CREATE TABLE `employee_sector` (
	`employee_id` INT NOT NULL,
    `sector_id` INT NOT NULL,
    FOREIGN KEY (`employee_id`) REFERENCES `employee`(`employee_id`),
    FOREIGN KEY (`sector_id`) REFERENCES `sector`(`sector_id`)
) ENGINE=InnoDB;

INSERT INTO `employee_sector` (`employee_id`, `sector_id`)
	VALUES (12, 1), (12, 2), (13, 3), (14, 4), (14, 2), (15, 5);