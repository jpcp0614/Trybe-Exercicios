'''
Meça o tempo de execução do algoritmo acima e,
mudando o tamanho das entradas, veja como, se você
aumenta a entrada em n vezes, o tempo de execução
aumenta em n² vezes!
'''


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        # print(f'Array 1: {number1}')
        for number2 in array2:
            # print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    # print(f'{number_of_iterations} iterações!')
    print(result)
    return result


# meu_array = [1, 2, 3, 4, 5] # 0,03s user 0,00s system 99% cpu 0,038 total
# multiply_arrays(meu_array, meu_array)

meu_array = list(range(1, 1000))  # 0,21s user 0,13s system 4% cpu 7,528 total
multiply_arrays(meu_array, meu_array)
