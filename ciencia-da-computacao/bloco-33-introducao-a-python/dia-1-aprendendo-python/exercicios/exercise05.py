'''
Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
Crie uma função que retorne dois valores em uma tupla contendo a quantidade
de latas de tinta a serem compradas e o preço total a partir
do tamanho de uma parede(em m²).
'''


def wall_size(area):
    unit_price = 80
    liters = area / 3
    latas = liters // 18

    if liters % 18:
        latas += 1
    return latas, latas * unit_price


print(wall_size(108))
