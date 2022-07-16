# openssl genrsa -out key.pem

-> gerar um arquivo com uma key


# openssl req -new -key key.pem -out csr.pem

-> inserir informações que serão incorporadas a solicitação de certificado

You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:BR
State or Province Name (full name) [Some-State]:Rio de Janeiro
Locality Name (eg, city) []:Duque de Caxias
Organization Name (eg, company) [Internet Widgits Pty Ltd]:JP Home
Organizational Unit Name (eg, section) []:Home
Common Name (e.g. server FQDN or YOUR name) []:JP
Email Address []:jpcp0614@gmail.com

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:itsnotabug
An optional company name []:jp-home


# openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

-> assinatura do certificado está ok

Certificate request self-signature ok
subject=C = BR, ST = Rio de Janeiro, L = Duque de Caxias, O = JP Home, OU = Home, CN = JP, emailAddress = jpcp0614@gmail.com


# rm csr.pem

-> apaga o arquivo de assinatura