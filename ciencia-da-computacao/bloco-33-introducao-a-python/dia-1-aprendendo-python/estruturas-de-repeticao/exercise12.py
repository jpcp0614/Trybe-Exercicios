# Factorial
import random

n = random.randint(1, 10);
fact = 1

print(f'Calculando {n}!: ', end='')
while n > 0:
    print(f'{n} ', end='')
    print('* ' if n > 1 else ' = ', end='')
    fact *= n
    n -= 1

print(f'{fact}')