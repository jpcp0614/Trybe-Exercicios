'''
Faça um programa que, dado um valor n qualquer, tal que n > 1,
imprima na tela um triângulo retângulo com n asteriscos de base.
Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:
'''

n = 5
i = 1

# triângulo invertido
while i <= 5:
    print('*' * n)
    i += 1
    n -= 1

# triângulo normal
for j in range(1, n + 1):
    print('*' * j)
