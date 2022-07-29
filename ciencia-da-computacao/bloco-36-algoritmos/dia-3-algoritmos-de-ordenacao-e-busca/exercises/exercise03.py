'''
Execute os algoritmos de ordenação por seleção e inserção, para as entradas
de dados ordenadas, inversamente ordenadas e aleatórias.
Em seguida, compare-os. Faça testes para entradas
de tamanho 10.000, 100.000, 1.000.000.
'''

from cronometro import Cronometro
from random import shuffle


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


def selection_sort(numbers):
    n = len(numbers)

    for index in range(n-1):
        min_index = index

        for search_index in range(index + 1, n):
            if numbers[search_index] < numbers[min_index]:
                min_index = search_index

        # Troca os elementos de posição
        current_element = numbers[index]
        numbers[index] = numbers[min_index]
        numbers[min_index] = current_element

    return numbers


# print(selection_sort(ordenados))
# print(selection_sort(inversamente_ordenados))
# print(selection_sort(aleatorios))


with Cronometro("Ordenados"):
    selection_sort(ordenados)

with Cronometro("Inversamente Ordenados"):
    selection_sort(inversamente_ordenados)

with Cronometro("Aleatórios"):
    selection_sort(aleatorios)


def insertion_sort(numbers):
    # Quantidade de elementos na lista:
    n = len(numbers)

    # Começaremos a ordenar pelo segundo elemento:
    for index in range(1, n):
        # Pegamos o segundo elemento e o definimos como chave:
        key = numbers[index]

        # Tomamos a posição anterior para iniciar a comparação:
        new_position = index - 1
        # Enquanto a chave for menor, remaneja o elemento para frente:
        while new_position >= 0 and numbers[new_position] > key:
            # Remaneja o elemento:
            numbers[new_position + 1] = numbers[new_position]
            new_position = new_position - 1

        # Insere a chave na posição correta:
        numbers[new_position + 1] = key

    return numbers


# print(insertion_sort(ordenados))
# print(insertion_sort(inversamente_ordenados))
# print(insertion_sort(aleatorios))


with Cronometro("Ordenados"):
    insertion_sort(ordenados)

with Cronometro("Inversamente Ordenados"):
    insertion_sort(inversamente_ordenados)

with Cronometro("Aleatórios"):
    insertion_sort(aleatorios)
