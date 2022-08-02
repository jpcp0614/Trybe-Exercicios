'''
Em um software monitor, o qual verifica a resiliência de outro software,
precisamos saber o tempo máximo que um software permaneceu sem instabilidades.
Para isto, a cada hora é feito uma requisição ao sistema para verificamos
se está tudo bem. Supondo um array que contenha os estados coletados
por nosso software, calcule quanto tempo máximo que o
servidor permaneceu sem instabilidades.
'''


def max_stable_time(array):
    max_time = 0
    time = 0

    for i in range(len(array)):
        if array[i] == 1:
            time += 1
        else:
            max_time = max(max_time, time)
            time = 0

    return max(max_time, time)


print(max_stable_time([0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0]))
