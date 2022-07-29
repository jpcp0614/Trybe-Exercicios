'''
Utilize o módulo random da linguagem Python para gerar
um array com 100 números. Cada um desses números deve
ser a média de n números gerados aleatoriamente.
Qual é a ordem de complexidade de tempo e de espaço deste programa?
'''

import random


def average_random(n):
    numbers = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        numbers.append(average / n)

    return numbers

# complexidade O(n)
# complexidade de espaço O(1)
