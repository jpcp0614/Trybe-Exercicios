'''
Uma casa possui eletrodomésticos, tais como:
geladeira, batedeira, micro-ondas, fogão e etc..
Implemente o objeto pessoa realizando a compra de uma geladeira e a ligue.
Teste com prints para que possamos visualizar a pessoa e seus eletrônicos.
'''


class Geladeira():
    def __init__(self, modelo, cor, voltagem, preco, litragem):
        self.modelo = modelo
        self.cor = cor
        self.voltagem = voltagem
        self.preco = preco
        self.litragem = litragem
        self.ligada = False

    def ligar_geladeira(self):
        if self.ligada:
            print('Geladeira já está ligada')
        else:
            self.ligada = True
            print('Geladeira ligada')

    def desligar_geladeira(self):
        if self.ligada:
            self.ligada = False
            print('Geladeira desligada')
        else:
            print('Geladeira já está desligada')

    def __str__(self):
        return f'''
        - Modelo: {self.modelo}
        - Cor: {self.cor}
        - Voltagem: {self.voltagem}
        - Preço: {self.preco}
        - Litragem: {self.litragem}
        '''


geladeira = Geladeira('Brastemp', 'Branca', 127, 5000, '450L')
print(geladeira)

geladeira.ligar_geladeira()
