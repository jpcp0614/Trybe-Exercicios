/*

* npm init -y

* npm i express sequelize body-parser dotenv mysql2

* npm i nodemon eslint-config-trybe-backend sequelize-cli -D

* npx sequelize-cli init

* Criar o banco de dados de acordo com o config.js
* npx sequelize db:create

* Criar migrations employees e address
* npx sequelize migration:generate --name create-employees
* npx sequelize migration:generate --name create-addresses

* Gerar as migrations
* npx sequelize db:migrate

* Criar seeders employees e address
* npx sequelize seed:generate --name employees
* npx sequelize seed:generate --name addresses

* Executa os seeders
* npx sequelize db:seed:all


* 1:1 - hasOne
* 1:N hasMany

*/