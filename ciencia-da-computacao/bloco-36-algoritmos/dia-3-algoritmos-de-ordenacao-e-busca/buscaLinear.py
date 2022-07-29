def linear_search(numbers, target):
    # N será a quantidade de elementos da lista:
    n = len(numbers)
    # vamos iterar a lista completa:
    for index in range(0, n):
        # se encontrar o elemento alvo, retorne a posição:
        if numbers[index] == target:
            return index

    return -1  # Não encontrou? Retorne -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1
