(.ambient_dia_1) ➜  exercise10 git:(exercicios/bloco35) python3 -m http.server 8080
Serving HTTP on 0.0.0.0 port 8080 (http://0.0.0.0:8080/) ...
127.0.0.1 - - [15/Jul/2022 20:17:01] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [15/Jul/2022 20:17:02] code 404, message File not found
127.0.0.1 - - [15/Jul/2022 20:17:02] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [15/Jul/2022 20:17:19] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [15/Jul/2022 20:18:12] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [15/Jul/2022 20:18:12] code 404, message File not found
127.0.0.1 - - [15/Jul/2022 20:18:12] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [15/Jul/2022 20:18:24] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [15/Jul/2022 20:19:12] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [15/Jul/2022 20:19:18] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [15/Jul/2022 20:19:28] "GET / HTTP/1.1" 200 -


Depois, segui os passos do site:

1) Fazer download do arquivo
2) sudo tar xvzf ~/Downloads/ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin
3) curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list && sudo apt update && sudo apt install ngrok
4) ngrok config add-authtoken <token> (é preciso fazer sign up para ter o token)
5) ngrok http 80