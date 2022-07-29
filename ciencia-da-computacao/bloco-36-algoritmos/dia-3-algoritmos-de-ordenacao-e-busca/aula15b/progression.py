'''
Dada uma lista de inteiros desordenados:
  - retorne True se for possível construir uma progressão uniforme (aritmética)
  - retorne False caso contrário
'''

from merge import merge_sort


def has_progression(input_list):
    sorted_list = merge_sort(input_list)
    diff = sorted_list[1] - sorted_list[0]

    for index, _ in enumerate(sorted_list[0:-1]):
        if diff != sorted_list[index + 1] - sorted_list[index]:
            return False

    return True


def smart_has_progression(input_list):
    diff = None
    for i in range(len(input_list)):
        min_i = i

        for j in range(i + 1, len(input_list)):
            if input_list[j] < input_list[min_i]:
                min_i = j

        input_list[min_i], input_list[i] = input_list[i], input_list[min_i]

        if i >= 1:
            if diff is None:
                diff = input_list[i] - input_list[i - 1]
            elif diff != input_list[i] - input_list[i - 1]:
                return False

    return True


def test_has_progression():
    assert has_progression([1, 3, 5]) is True
    assert has_progression([3, 6, 1]) is False
    assert has_progression([7, 43, 19, 25, 1, 31, 37, 13]) is True
    assert has_progression([7, 43, 19, 25, 1, 32, 37, 13]) is False
    assert has_progression([1, 2]) is True
