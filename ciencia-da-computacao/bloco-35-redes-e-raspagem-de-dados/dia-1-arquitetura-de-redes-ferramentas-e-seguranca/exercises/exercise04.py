from socketserver import TCPServer, StreamRequestHandler


server_address = "localhost", 8085


class TCPHandle(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Hello, World!\n")
        while True:
            data = self.rfile.readline().strip().decode("utf-8")
            if not data:
                self.wfile.write(b"Connected")
                print("Disconnected")
                break
            print(data)

        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode('ascii').strip())


if __name__ == "__main__":
    with TCPServer(server_address, TCPHandle) as server:
        print('Conexão iniciada')
        server.serve_forever()
