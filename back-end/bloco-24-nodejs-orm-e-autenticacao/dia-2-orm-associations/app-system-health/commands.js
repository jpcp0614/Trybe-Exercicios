/*

* npm init -y

* npm i express sequelize body-parser dotenv mysql2

* npm i nodemon eslint-config-trybe-backend sequelize-cli -D

* npx sequelize-cli init

* Criar o banco de dados de acordo com o config.js
* npx sequelize db:create

* Criar migrations plans, patients, surgeries e patient_surgeries
* npx sequelize migration:generate --name plans
* npx sequelize migration:generate --name patients
* npx sequelize migration:generate --name surgeries
* npx sequelize migration:generate --name patient_surgeries

* Gerar as migrations
* npx sequelize db:migrate

* Criar seeders plans, patients, surgeries e patient_surgeries
* npx sequelize seed:generate --name plans
* npx sequelize seed:generate --name patients
* npx sequelize seed:generate --name surgeries
* npx sequelize seed:generate --name patient_surgeries

* Executa os seeders
* npx sequelize db:seed:all


* 1:1 - hasOne
* 1:N hasMany

*/