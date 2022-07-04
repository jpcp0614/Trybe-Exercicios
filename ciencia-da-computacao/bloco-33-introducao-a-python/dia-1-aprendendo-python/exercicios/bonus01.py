'''
Dada uma lista, descubra o menor elemento.
Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.
'''

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def find_small_number(list):
    return min(list)


print(find_small_number(numbers))


def small_number(list):
    small = list[0]
    for number in list:
        if number < small:
            small = number
    return small


print(small_number(numbers))
