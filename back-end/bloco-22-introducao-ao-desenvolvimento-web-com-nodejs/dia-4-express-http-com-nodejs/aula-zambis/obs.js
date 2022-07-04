/*
* Explicações:

* GET     -> estou enviando uma requisição, então eu quero ler (read no servidor)
* POST    -> eu quero colocar, escrever dentro do servidor
* PUT     -> eu quero editar as coisas (editar tudo)
* DELETE  -> deletar as coisas
* PATCH   -> editar só uma parte do que está lá dentro do servidor (lembrar de jogos)

* HTTP STATUS CODES

* 1xx -> tudo deu certo
*   100 - continue

* 2xx -> tudo deu certo
*   200 - ok
*   201 - created
*   202 - accepted
*   204 - no content

* 3xx -> tudo deu certo (achei, vou te direcionar)
*   300 - found
*   308 - redirect

* 4xx -> erros por parte do cliente
*   400 - bad request
*   401 - unauthorized
*   404 - not found
*   422 - unprocessable entity

* 5xx -> error internos, dos servidores
*   500 - internal server error
*   501 - not implemented
*   502 - bad gateway
*   503 - unavailable

! Quando retornar cada um deles? A gente que decide, com base nos protocolos (o que faça sentido)


*/