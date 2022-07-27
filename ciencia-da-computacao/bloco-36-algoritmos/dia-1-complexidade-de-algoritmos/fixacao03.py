'''
Faça um algoritmo qualquer com três loops aninhados um dentro do outro.
Entenda como ele terá uma complexidade de O(n³)!
'''


def algoritmo_qualquer(numbers):
    for number in numbers:
        for number in numbers:
            for number in numbers:
                print(number)


# 0,18s user 0,09s system 5% cpu 4,693 total
algoritmo_qualquer(list(range(1, 10)))
