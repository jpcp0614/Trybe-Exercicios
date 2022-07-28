'''
Escreva um algoritmo que recebe uma lista e retorne-a na ordem reversa.
'''


def reverse_list(list):
    if len(list) == 1:
        return list
    else:
        return [list[-1]] + reverse_list(list[:-1])


lista = [1, 2, 3, 4, 5]
print(reverse_list(lista))
