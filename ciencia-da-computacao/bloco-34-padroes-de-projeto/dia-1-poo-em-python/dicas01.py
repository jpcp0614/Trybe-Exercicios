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


class Funcionario:
    def __init__(self, nome):
        self.__nome = nome

    def retorna_nome(self):
        return self.__nome


class Empresa:
    func = []

    def __init__(self):
        print('Empresa Fictícia em funcionamento')

    def funcionar(self):
        while True:
            print('1. Contratar')
            print('2. Exibir lista de funcionários')
            print('0. Sair...')
            op = int(input())

            if op == 1:
                self.contratar()
            elif op == 2:
                self.exibir()
            elif op == 0:
                self.sair()
            else:
                print('Opção inválida')
                break

    def contratar(self):
        nome = input('Nome: ')
        self.func.append(Funcionario(nome))

    def exibir(self):
        for funcionario in self.func:
            print(f'''
            {funcionario.retorna_nome()}
            ''')

    def sair(self):
        print('Empresa Fictícia encerrada')
        exit()


empresa = Empresa()
empresa.funcionar()
