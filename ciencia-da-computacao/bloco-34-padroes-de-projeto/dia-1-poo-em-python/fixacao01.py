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


class Pessoa():
    def __init__(self, nome, saldo_da_conta):
        self.nome = nome
        self.saldo_da_conta = saldo_da_conta
        self.geladeira = None

    def comprar_geladeira(self, geladeira: Geladeira):
        if self.saldo_da_conta >= geladeira.preco:
            self.saldo_da_conta -= geladeira.preco
            self.geladeira = geladeira
            print('Geladeira comprada com sucesso!')
        else:
            print('Saldo insuficiente')

    def ligar_geladeira(self):
        if self.geladeira:
            self.geladeira.ligar_geladeira()
        else:
            print('Não há geladeira para ligar')

    def __str__(self):
        return f'''
        - Nome: {self.nome}
        - Saldo da conta: {self.saldo_da_conta}
        - Geladeira: {self.geladeira}
        '''


geladeira = Geladeira('Brastemp', 'Branca', 127, 5000, '450L')
# print(geladeira)

pedro = Pessoa('Pedro', 10000)
pedro.comprar_geladeira(geladeira)

# print(pedro)

pedro.ligar_geladeira()
print(pedro)
