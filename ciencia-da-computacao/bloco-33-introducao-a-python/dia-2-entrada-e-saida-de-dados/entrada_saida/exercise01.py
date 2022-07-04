'''
Faça um programa que solicite o nome de uma
pessoa usuária e imprima-o na vertical.
'''

nome = input('Digite o seu nome: ')


def nome_digitado(nome):
    for letra in nome:
        print(letra)


nome_digitado(nome)
