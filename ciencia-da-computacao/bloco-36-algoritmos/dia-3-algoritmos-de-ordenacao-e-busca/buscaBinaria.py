def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    # os índices podem ser no máximo =s, o início não pode ultrapassar o fim:
    while start <= end:
        mid = (start + end) // 2  # encontro o meio

        # se o elemento do meio for o alvo, devolve a posição do meio:
        if numbers[mid] == target:
            return mid

        # se o elemento for menor, atualiza o índice do fim:
        if target < numbers[mid]:
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
