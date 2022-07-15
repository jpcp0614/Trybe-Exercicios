from socketserver import TCPServer, StreamRequestHandler


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b'Hello World!\n')
        # continuar e validar a conexão
        while True:
            # vou ler esse arquivo (rfile)
            # ler a linha (readline)
            # trabalhar com os dados da tabela (strip)
            # decode para string
            data = self.rfile.readline().strip().decode('utf-8')
            if not data:
                self.wfile.write(b'Cliente desconectado')
                print('Cliente desconectado')
                break
            print(data)


# vamos fazer o acesso ao servidor
if __name__ == '__main__':
    server_address = ('localhost', 8080)
    with TCPServer(server_address, TCPHandler) as server:
        print('Server TCP ativo')
        server.serve_forever()  # para que o método não pare
