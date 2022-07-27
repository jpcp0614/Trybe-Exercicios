'''
Imagine que você recebe dois arrays de tamanho igual, array1 e array2.
Para cada elemento do array1, realize uma busca binária no array2.
Mostre que a ordem de complexidade do
algoritmo resultante é O(n * log n), ou O(n log n).
'''


def do_something(array1, array2):
    start = 0
    end = len(array1) - 1

    while start <= end:
        mid = (start + end) // 2

        if array1[mid] == array2[mid]:
            return mid

        if array1[mid] < array2[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1


array1 = [2, 3, 4, 10, 40, 22]
array2 = [2, 3, 4, 10, 40, 22]


result = do_something(array1, array2)
print(f"Elemento encontrado na posição: {result}")
