'''
Dada uma lista de números, retorne a lista invertida.

Reverse de [0, 1, 2, 3, ..., N] = [N, ..., 3, 2, 1, 0]
'''


# def reverse(input_list):
#     return input_list[::-1]


def reverse(input_list):
    if len(input_list) <= 1:
        return input_list
    else:
        return reverse(input_list[1:]) + [input_list[0]]


def test_reverse():
    assert reverse([0, 1, 2, 3, 4, 5]) == [5, 4, 3, 2, 1, 0]
    assert reverse([7, 1, 8, 4, 8]) == [8, 4, 8, 1, 7]
    assert reverse([970]) == [970]
    assert reverse([]) == []
