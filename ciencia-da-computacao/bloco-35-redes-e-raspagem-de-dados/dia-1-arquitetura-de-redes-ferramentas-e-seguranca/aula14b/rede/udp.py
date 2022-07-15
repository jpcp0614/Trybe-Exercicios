from socketserver import UDPServer, DatagramRequestHandler


class UDPHandler(DatagramRequestHandler):
    def handler(self):
        self.wfile.write(b'Hello World!\n')
        # continuar e validar a conexão
        while True:
            # vou ler esse arquivo (rfile)
            # ler a linha (readline)
            # trabalhar com os dados da tabela (strip)
            # decode para string
            data = self.rfile.readline().strip().decode('utf-8')
            if not data:
                break
            print(data)


# vamos fazer o acesso ao servidor
if __name__ == '__main__':
    server_address = ('localhost', 9090)
    with UDPServer(server_address, UDPHandler) as server:
        print('Server UDP ativo')
        server.serve_forever()  # para que o método não pare
