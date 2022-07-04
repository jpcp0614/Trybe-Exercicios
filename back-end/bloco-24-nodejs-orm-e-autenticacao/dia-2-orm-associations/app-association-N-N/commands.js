/*

* npm init -y

* npm i express sequelize body-parser dotenv mysql2

* npm i nodemon eslint-config-trybe-backend sequelize-cli -D

* npx sequelize-cli init

* Criar o banco de dados de acordo com o config.js
* npx sequelize db:create

* Criar migrations books, users e user-books
* npx sequelize migration:generate --name create-books
* npx sequelize migration:generate --name create-users
* npx sequelize migration:generate --name create-user-books

* Gerar as migrations
* npx sequelize db:migrate

* Criar seeders books, users e user-books
* npx sequelize seed:generate --name books
* npx sequelize seed:generate --name users
* npx sequelize seed:generate --name user-books

* Executa os seeders
* npx sequelize db:seed:all


* 1:1 - hasOne
* 1:N hasMany

*/