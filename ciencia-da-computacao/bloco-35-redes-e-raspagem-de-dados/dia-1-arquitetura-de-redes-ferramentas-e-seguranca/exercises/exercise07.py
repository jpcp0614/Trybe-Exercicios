from socketserver import UDPServer, DatagramRequestHandler


class UDPHandle(DatagramRequestHandler):
    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode('utf-8').strip())


if __name__ == "__main__":
    server_address = ("localhost", 8084)
    with UDPServer(server_address, UDPHandle) as server:
        print('Conexão iniciada')
        server.serve_forever()
