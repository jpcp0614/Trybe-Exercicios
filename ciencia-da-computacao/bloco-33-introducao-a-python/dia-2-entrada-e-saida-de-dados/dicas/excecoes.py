# AssertionError
# assert faz verificação
# Levantado quando uma instrução assert falha
'''
animal1 = 'cachorro'
animal2 = 'gato'
assert animal1 == animal2
'''


# AttributeError
# Levantado quando uma instrução tenta acessar
# um atributo de um objeto que não existe
'''
class Pessoa():
    nome = 'Pedro'


print(Pessoa.nome)
print(Pessoa.idade)
'''


# TypeError
# Levantado quando uma instrução tenta fazer uma operação
# com tipos de dados incompatíveis
'''
print('42' + 42)
'''


# EOFError
# Levantado quando uma instrução tenta ler um arquivo
# e não há mais nada para ler
# no terminal do Python, Ctrl + D, durante o processo de entrada de dados
'''
n = int(input('Digite um valor: '))
print(n * 10)
'''

# ImportError
# Levantado quando uma instrução tenta importar um módulo
# que não existe
'''
from collections import cbd
'''


# ModuleNotFoundError
# Levantado quando uma instrução tenta importar um módulo
# que não existe
'''
import testeModulo
'''


# IndexError
# Levantado quando uma instrução tenta acessar um índice
# de um objeto que não existe
'''
list = []
print(list[0])
'''


# KeyError
# Levantado quando uma instrução tenta acessar uma chave
# de um dicionário que não existe
'''
dicionario = {'nome': 'João'}
print(dicionario['idade'])
'''


# NotImplementedError
# Levantado quando uma instrução tenta acessar um método
# que não foi implementado
'''
def get():
    raise NotImplementedError('Não implementado')


get()
'''
