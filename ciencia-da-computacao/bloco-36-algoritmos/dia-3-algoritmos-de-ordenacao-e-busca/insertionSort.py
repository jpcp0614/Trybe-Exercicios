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


numbers = [7, 5, 9, 2, 6, 8]
print(insertion_sort(numbers))
