CREATE DATABASE IF NOT EXISTS `db_sequelize`;

USE `db_sequelize`;
SHOW TABLES;

CREATE TABLE `db_sequelize`.`products` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `description` VARCHAR(45) NULL,
    `price` DECIMAL(10) NULL,
    PRIMARY KEY(`id`)
);