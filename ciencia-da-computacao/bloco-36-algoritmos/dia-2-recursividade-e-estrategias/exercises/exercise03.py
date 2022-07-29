'''
Crie um algoritmo recursivo que encontre,
em uma lista, o maior número inteiro.
'''


def maior_numero_aux(list, tamanho):
    if tamanho == 1:
        return list[0]
    else:
        maior_do_resto_da_lista = maior_numero_aux(list, tamanho-1)
        if list[tamanho-1] < maior_do_resto_da_lista:
            return maior_do_resto_da_lista
        else:
            return list[tamanho-1]


def maior_numero_da_lista(list):
    tamanho = len(list)
    return maior_numero_aux(list, tamanho)


lista = [12, 200, 30, 4]
print(maior_numero_da_lista(lista))
