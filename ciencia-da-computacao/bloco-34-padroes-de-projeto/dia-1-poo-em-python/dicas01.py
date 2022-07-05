'''
Herança é quando duas classes são próximas,
têm características mútuas mas não são iguais
e existe uma especificação de uma delas.
Nesse caso, temos uma classe mais generalizada,
que é a classe mãe, e temos uma classe mais específica,
a classe trilha
'''


class Conta:
    def __init__(self, numero, nome, saldo=0):
        self.numero = numero
        self.nome = nome
        self.saldo = saldo

    def set_nome(self, nome):
        self.nome = nome

    def deposito(self, valor):
        self.saldo += valor

    def saque(self, valor):
        if self.saldo >= valor:
            self.saldo -= valor


class ContaInvestimento(Conta):
    def __init__(self, numero, nome, saldo, taxaJuros):
        Conta.__init__(self, numero, nome, saldo)
        self.taxaJuros = taxaJuros

    def adicioneJuros(self):
        self.saldo += self.saldo * self.taxaJuros / 100
