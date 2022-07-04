'''
Crie uma função que receba os três lado de um triângulo e informe
qual o tipo de triângulo formado ou "não é triangulo", caso não
seja possível formar um triângulo.
'''


def triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
            return 'Equilátero'
        elif a == b or a == c or b == c:
            return 'Isósceles'
        else:
            return 'Escaleno'
    else:
        return 'Não é triângulo'


print(triangle(6, 5, 3))
