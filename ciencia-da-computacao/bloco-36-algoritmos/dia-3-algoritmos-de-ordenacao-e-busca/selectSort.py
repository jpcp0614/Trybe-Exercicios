'''
Selection Sort:
    Encontre o menor elemento da lista (ordem alfabética);
    Adicione o elemento encontrado em uma outra lista;
    Repita o processo para todos os elementos restantes.
'''


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


numbers = [7, 5, 9, 2, 6, 8]
print(f"Lista inicial: {numbers}")
ordered_list = selection_sort(numbers)
print(f"Lista ordenada: {ordered_list}")
