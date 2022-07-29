def merge_sort(numbers, start=0, end=None):
    if end is None:
        end = len(numbers)
    if (end - start) > 1:  # se não reduzi o suficiente, continua
        mid = (start + end) // 2  # encontrando o meio
        merge_sort(numbers, start, mid)  # dividindo as listas
        merge_sort(numbers, mid, end)
        merge(numbers, start, mid, end)  # unindo as listas


# função auxiliar que realiza a mistura dos dois arrays
def merge(numbers, start, mid, end):
    left = numbers[start:mid]  # indexando a lista da esquerda (E)
    right = numbers[mid:end]  # indexando a lista da direita (D)

    left_index, right_index = 0, 0  # as duas listas começarão do início

    # percorrer sobre a lista inteira como se fosse uma:
    for general_index in range(start, end):
        # se os elementos da E acabaram, preenche o restante com a lista da D:
        if left_index >= len(left):
            numbers[general_index] = right[right_index]
            right_index = right_index + 1
        # se os elementos da D acabaram, preenche o restante com a lista da E:
        elif right_index >= len(right):
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        # se o elemento do topo da E < D, ele será o escolhido:
        elif left[left_index] < right[right_index]:
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            # caso o da D seja menor, ele será o escolhido:
            numbers[general_index] = right[right_index]
            right_index = right_index + 1


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
