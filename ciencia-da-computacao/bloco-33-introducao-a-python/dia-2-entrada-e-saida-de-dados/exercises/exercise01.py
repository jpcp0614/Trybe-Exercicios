'''
Faça um programa que receba um nome e
imprima o mesmo na vertical em escada invertida
'''


def inverted_ladder(name):
    for i in range(len(name), 0, -1):
        print(name[0:i])


if __name__ == '__main__':
    name = input('Digite seu nome: ')
    inverted_ladder(name)
