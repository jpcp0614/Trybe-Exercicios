def bubble_sort(numbers):
    # Quantidade de elementos na lista:
    n = len(numbers)

    # Precisamos ordenar n-1 elementos:
    for ordered_elements in range(n - 1):
        # Vamos percorrer até o elemento anterior ao ordenado:
        for item in range(0, n - 1 - ordered_elements):
            # se um elemento for maior, flutuamos ele para cima:
            if numbers[item] > numbers[item + 1]:
                current_element = numbers[item]
                numbers[item] = numbers[item + 1]
                numbers[item + 1] = current_element

    # Lembra da troca com desempacotamento?
    # numbers[item], numbers[item + 1] = numbers[item + 1], numbers[item]
    return numbers


numbers = [7, 5, 9, 2, 6, 8]
print(bubble_sort(numbers))
