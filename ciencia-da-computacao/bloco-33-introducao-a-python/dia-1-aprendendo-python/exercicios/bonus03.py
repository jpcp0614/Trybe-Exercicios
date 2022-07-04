'''
Crie uma função que receba um número inteiro N e retorne o somatório de
todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.
'''


def sum_numbers(num):
    return sum(range(1, num + 1))


print(sum_numbers(5))
