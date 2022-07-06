'''
Lembra do exercício dos gráficos? De semelhante modo,
vamos implementar os objetos das seguintes figuras geométricas?
'''

from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return round(PI * self.raio ** 2, 2)

    def perimetro(self):
        return round(2 * PI * self.raio, 2)


quadrado = Quadrado(4)
print(quadrado.area())
print(quadrado.perimetro())

retangulo = Retangulo(2, 6)
print(retangulo.area())
print(retangulo.perimetro())

circulo = Circulo(4)
print(circulo.area())
print(circulo.perimetro())
