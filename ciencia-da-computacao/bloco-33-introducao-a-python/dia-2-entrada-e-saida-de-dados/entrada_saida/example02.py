# ENTRADA


import random

random_number = random.randint(1, 10)
sort = ''


while sort != random_number:
    sort = int(input('Digite um número: '))
    if sort > random_number:
        print('O número é maior')
    elif sort < random_number:
        print('O número é menor')
    else:
        print('Você acertou!')
