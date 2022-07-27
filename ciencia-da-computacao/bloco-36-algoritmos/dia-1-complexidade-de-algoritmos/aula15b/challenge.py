'''
Dada uma coleção ORDENADA de inteiros
e um número alvo

- Retorne True se há um par de números cuja soma resulta no alvo
- Retorne False caso contrário

Analise a ordem de complexidade de tempo e espaço
'''


def check_sum(numbers, target):
    for index_1, num_1 in enumerate(numbers):
        for index_2, num_2 in enumerate(numbers):
            if (index_1 != index_2) and (num_1 + num_2) == target:
                return True
    return False


def test_check_sum():
    assert check_sum([-1, 1, 1, 2, 3, 4], 7) is True
    assert check_sum([1, 2, 5, 8, 13, 21], 3) is True
    assert check_sum([1, 2, 5, 8, 13, 21], 22) is True
    assert check_sum([1, 1, 2, 4, 4], 7) is False
    assert check_sum([1, 2, 3, 4], 9) is False
    assert check_sum([1, 20, 300, 4000], 0) is False
