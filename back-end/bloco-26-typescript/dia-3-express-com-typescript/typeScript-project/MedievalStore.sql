DROP SCHEMA IF EXISTS `MedievalStore`;
CREATE SCHEMA `MedievalStore`;

CREATE TABLE `MedievalStore`.`Users` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `username` TEXT NOT NULL,
  `classe` TEXT NOT NULL,
  `level` INTEGER NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY(`id`)
);

CREATE TABLE `MedievalStore`.`Orders` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `userId` INTEGER,
  PRIMARY KEY(`id`),
  FOREIGN KEY (`userId`) REFERENCES `MedievalStore`.`Users` (`id`)
);

CREATE TABLE `MedievalStore`.`Products` (
  `id` INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` TEXT NOT NULL,
  `amount` TEXT NOT NULL,
  `orderId` INTEGER,
  FOREIGN KEY (`orderId`) REFERENCES `MedievalStore`.`Orders` (`id`)
);
