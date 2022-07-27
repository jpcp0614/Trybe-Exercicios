def linear_search(numbers, target):
    n = len(numbers)  # N será a quantidade de elementos da lista
    for index in range(0, n):  # vamos iterar a lista completa
        if numbers[index] == target:  # se encontrar o elemento -> posição
            return index

    return -1  # Não encontrou? Retorne -1


# 0,05s user 0,02s system 98% cpu 0,065 total
print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1


# def binary_search(numbers, target):
#     # definir os índices
#     start = 0
#     end = len(numbers) - 1

#     # índices podem ser no máximo iguais, o início não pode ultrapassar o fim
#     while start <= end:
#         mid = (start + end) // 2  # encontro o meio

#         # se o elemento do meio for o alvo, devolve a posição do meio
#         if numbers[mid] == target:
#             return mid

#         # se o elemento for menor, atualiza o índice do fim
#         if target < numbers[mid]:
#             end = mid - 1
#         else:  # caso contrário, atualiza o índice do inicio
#             start = mid + 1

#     return -1  # Não encontrou? Retorna -1


# # 0,03s user 0,01s system 97% cpu 0,035 total
# print(binary_search([1, 2, 3], 2))  # saída: 1
# print(binary_search([1, 2, 3], 4))  # saída: -1
