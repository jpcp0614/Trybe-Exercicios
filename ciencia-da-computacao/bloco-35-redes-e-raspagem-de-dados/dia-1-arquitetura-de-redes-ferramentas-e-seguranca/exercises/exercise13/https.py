'''
4   Agora vamos escrever um servidor https usando os módulos nativos
    do python ssl e http.server. Embora esses módulos tenham muitos
    recursos (muitos mesmo), nós vamos usar apenas alguns.
    Tente seguir as instruções a seguir:

4.1 Crie um contexto SSL com a classe SSLContext, usando o protocolo de versão
    mais alta disponível para servidores.
    (dica: as opções estão listadas na documentação).
4.2 Carregue no contexto SSL a cadeia de certificação, passando tanto o
    arquivo de certificação quanto a sua chave.
    (dica: existe um método para isso).
4.3 Crie uma instância de HTTPServer. O endereço deve ser uma
    tupla ('localhost', 8000) e para responder as requisições,
    use SimpleHTTPRequestHandler.
    (dica: apesar do exemplo na documentação, não use with).
4.4 Crie um socket server-side usando o método wrap_socket do seu contexto SSL.
    Passe como parâmetro o socket do servidor (server.socket).
4.5 Substitua o socket do servidor pelo socket que você acabou de criar.
4.6 Execute o servidor com o método serve_forever.
'''


from http.server import SimpleHTTPRequestHandler, HTTPServer
import ssl


ssl_context = ssl.SSLContext()  # 4.1
ssl_context.load_cert_chain('cert.pem', keyfile='key.pem')  # 4.2

server_address = ('0.0.0.0', 8000)  # 4.3
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)  # 4.3

httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)  # 4.4

httpd.serve_forever()  # 4.5


'''
5   Acesse o servidor no endereço https://localhost:8000/ utilizando o
    Firefox (precisa ser o Firefox). Perceba que ele vai informar que o
    certificado não é reconhecido por ele, pois não foi assinado por
    nenhuma autoridade da confiança dele.

5.1 Chrome e Safari se recusam a acessar um site cujo certificado não
    está assinado por NENHUMA autoridade certificadora. Existem instruções
    para agir como uma autoridade certificadora,
    mas não precisa seguir por esse caminho.

6   Acesse o servidor novamente, porém desta vez utilizando cURL
(de fora do Docker, se você estiver usando).
'''

# 5 e 5.1
'''
127.0.0.1 - - [16/Jul/2022 11:05:53] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [16/Jul/2022 11:05:53] code 404, message File not found
127.0.0.1 - - [16/Jul/2022 11:05:53] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [16/Jul/2022 11:07:26] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [16/Jul/2022 11:07:27] code 404, message File not found
127.0.0.1 - - [16/Jul/2022 11:07:27] "GET /favicon.ico HTTP/1.1" 404 -
'''

# 6
'''
exercise13 git:(exercicios/bloco35) ✗ curl https://localhost:8000
curl: (60) SSL certificate problem: self-signed certificate
More details here: https://curl.se/docs/sslcerts.html

curl failed to verify the legitimacy of the server and therefore could not
establish a secure connection to it. To learn more about this situation and
how to fix it, please visit the web page mentioned above.
'''


'''
7 Por último, vamos utilizar um recurso do cURL, somente para testes
(somente utilize, caso realmente você esteja esperando por aquilo),
que é o parâmetro -k ou --insecure. Com ele, falamos para o nosso
cURL prosseguir a request mesmo sabendo que a conexão não é "confiável".
'''

# 7
'''
exercise13 git:(exercicios/bloco35) curl -k https://localhost:8000
<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Directory listing for /</title>
</head>
<body>
<h1>Directory listing for /</h1>
<hr>
<ul>
<li><a href="cert.pem">cert.pem</a></li>
<li><a href="exercise13.md">exercise13.md</a></li>
<li><a href="https.py">https.py</a></li>
<li><a href="key.pem">key.pem</a></li>
</ul>
<hr>
</body>
</html>
'''
