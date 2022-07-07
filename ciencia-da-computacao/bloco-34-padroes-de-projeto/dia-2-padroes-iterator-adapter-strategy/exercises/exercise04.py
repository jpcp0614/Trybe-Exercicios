'''
Agora que você tem duas formas diferentes de dar cartas para o seu baralho,
refatore o código para não precisar mais de dois baralhos e dois iteradores
isolados, mas sim usar um único iterador com duas
estratégias diferentes de iteração.
'''

from collections.abc import Iterator, Iterable
from abc import ABC, abstractmethod


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class Iteration(ABC):
    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class IterationRegular(Iteration):
    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class IterationReverse(Iteration):
    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class VerifyIteration():
    @classmethod
    def check(cls, iteration):
        if iteration == IterationReverse:
            return -1
        else:
            return 0


class BaralhoIterator(Iterator):
    def __init__(self, cartas, iteration):
        self._cartas = cartas
        self._index = VerifyIteration.check(iteration)
        self._iteration = iteration

    def __next__(self):
        try:
            current_value = self._cartas[self._index]
        except IndexError:
            raise StopIteration()
        else:
            self._index = self._iteration.proxima_carta(self._index)
            return current_value


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, iteration):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.iteration = iteration

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self.iteration)


baralho = Baralho(IterationRegular)
for carta in baralho:
    print(carta)
