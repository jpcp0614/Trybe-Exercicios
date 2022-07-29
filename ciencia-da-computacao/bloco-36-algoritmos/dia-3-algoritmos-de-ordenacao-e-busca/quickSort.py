def quick_sort(numbers, start, end):
    if start < end:
        p = partition(numbers, start, end)
        # Os menores em relação ao pivô ficarão à esquerda:
        quick_sort(numbers, start, p - 1)
        # Os maiores elementos em relação ao pivô ficarão à direita
        quick_sort(numbers, p + 1, end)


# função auxiliar responsável pela partição do array
# escolhendo um pivô e fazendo movimentações dos sub arrays gerados
def partition(numbers, start, end):
    pivot = numbers[end]
    delimit = start - 1

    for i in range(start, end):
        # o index será o elem em análise no momento - passará por todos os elem
        if numbers[i] <= pivot:
            delimit = delimit + 1
            numbers[i], numbers[delimit] = numbers[delimit], numbers[i]

    numbers[delimit + 1], numbers[end] = numbers[end], numbers[delimit + 1]

    return delimit + 1


numbers = [6, 5, 3, 1, 8, 7, 2, 4]
quick_sort(numbers, 0, len(numbers) - 1)
print(numbers)
