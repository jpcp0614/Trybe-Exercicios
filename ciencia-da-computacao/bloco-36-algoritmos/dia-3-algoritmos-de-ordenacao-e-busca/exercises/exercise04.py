'''
Compare o tempo de execução do algoritmo merge_sort e bubble_sort
para uma entrada de 10.000 valores aleatórios.
Explique através de análise de complexidade o que ocorre.
'''


from cronometro import Cronometro
from mergeAndBubble import merge_sort, bubble_sort


ordenados = list(range(10000))
aleatorios = ordenados[:]

with Cronometro("Merge Sort"):
    merge_sort(aleatorios)

with Cronometro("Bubble Sort"):
    bubble_sort(aleatorios)


# Merge demorou 0.0572 segundos
# Bubble demorou 5.877 segundos
