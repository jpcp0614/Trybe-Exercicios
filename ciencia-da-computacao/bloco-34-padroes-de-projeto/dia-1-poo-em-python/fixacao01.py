'''
Uma casa possui eletrodomésticos, tais como:
geladeira, batedeira, micro-ondas, fogão e etc..
Implemente o objeto pessoa realizando a compra de uma geladeira e a ligue.
Teste com prints para que possamos visualizar a pessoa e seus eletrônicos.
'''


class Eletrodomestico():
    def __init__(self, nome, preco):
        self.__nome = nome
        self.__preco = preco
        self.__ligado = False

    def ligar(self):
        self.__ligado = True

    def desligar(self):
        self.__ligado = False

    def __str__(self):
        return f'''
        - Nome do eletrodoméstico: {self.nome}
        - Preço do eletrodoméstico: {self.preco}
        - Ligado: {self.desligar()}
        '''


class Pessoa():
    def __init__(self, nome, saldo_na_conta, geladeira: Eletrodomestico):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletro = []

    def comprar_eletrodomestico(self, geladeira):
        self.eletro.append(eletrodomestico)
        self.saldo_na_conta -= eletrodomestico.preco

    def __str__(self):
        return f'''
        - Nome: {self.nome}
        - Saldo na conta: {self.saldo_na_conta}
        - Eletrodomestico: {self.eletronicos}
        - Ligar geladeira: {geladeira.ligar()}
        '''
