# GET

➜  exercises git:(exercicios/bloco35) ✗ curl -X GET localhost:3000/techs    
[{"id":1,"name":"HTML5"},{"id":2,"name":"CSS3"},{"id":3,"name":"JavaScript"},{"id":4,"name":"MySQL"}]%                               
➜  exercises git:(exercicios/bloco35) ✗ curl -X GET localhost:3000      
Minhas tecnologias% 


# POST

➜  exercises git:(exercicios/bloco35) ✗ curl -X POST -H 'Content-Type: application/json' -d '{"id": "5", "name": "Python"}' localhost:3000/techs
5 - Python tech has been added%
➜  exercises git:(exercicios/bloco35) ✗ curl -X GET localhost:3000/techs
[{"id":1,"name":"HTML5"},{"id":2,"name":"CSS3"},{"id":3,"name":"JavaScript"},{"id":4,"name":"MySQL"},{"id":"5","name":"Python"}]%



