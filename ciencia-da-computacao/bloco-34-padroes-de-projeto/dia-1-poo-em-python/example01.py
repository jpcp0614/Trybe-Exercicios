def produto(num, other_num=1):
    return num * other_num


# print(produto(2, 2))
# print(produto(2))


# parâmetros posicionais
def produtorio(lista, /, inicio=1):
    total = inicio or 1
    for item in lista:
        total *= item
    return total


# print(produtorio([1, 2, 3]))


def outra_funcao(a, b, *, option):
    print(option)


outra_funcao(1, 2, option=42)
