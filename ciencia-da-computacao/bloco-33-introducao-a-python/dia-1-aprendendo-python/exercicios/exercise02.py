# Calcule a média aritmética dos valores contidos em uma lista.

list = [1, 2, 5, 8, 10]


def calc_average(list):
    sum = 0
    for i in list:
        sum += i
    return sum / len(list)


print(calc_average(list))
