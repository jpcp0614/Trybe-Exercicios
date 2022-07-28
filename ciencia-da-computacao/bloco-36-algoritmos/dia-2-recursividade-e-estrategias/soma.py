'''
Faça um algoritmo recursivo de soma. Esse algoritmo deve receber
um número de parâmetro e deve somar todos os números antecessores a ele.
'''


def soma(n):
    if n == 0:
        return 0
    else:
        print(n, end='')
        print(' = ' if n == 1 else ' + ', end='')
        return n + soma(n-1)


print(soma(20))
