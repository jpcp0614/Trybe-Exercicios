'''
Defina uma classe Estatistica que calcule média,
mediana e moda de uma lista de números.
Dica: Utilize métodos de classe.
'''


class Estatistica():
    @classmethod
    def media(cls, lista):
        return round(sum(lista) / len(lista), 2)

    @classmethod
    def mediana(cls, lista):
        lista.sort()
        index = len(lista) // 2
        if len(lista) % 2 == 0:
            return (lista[index - 1] + lista[index]) / 2
        else:
            return lista[index]

    @classmethod
    def moda(cls, lista):
        return max(lista, key=lista.count)


lista = [1, 1, 1, 2, 4, 5]
print(Estatistica.media(lista))
print(Estatistica.mediana(lista))
print(Estatistica.moda(lista))
