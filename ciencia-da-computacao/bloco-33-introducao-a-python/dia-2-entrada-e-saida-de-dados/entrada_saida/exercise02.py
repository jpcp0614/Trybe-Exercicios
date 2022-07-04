'''
Escreva um programa que receba vários números naturais e
calcule a soma desses valores. Caso algum valor da entrada
seja inválido (por exemplo uma letra), uma mensagem deve ser
exibida na saída de erros no seguinte formato: "Erro ao somar
valores, {valor} é um valor inválido". Ao final, você deve
imprimir a soma dos valores válidos.

Receba os valores em um mesmo input, solicitando à pessoa usuária
que separe-os com um espaço. Receba os valores no formato str e
utilize o método split para pegar cada valor separado. O método isdigit,
embutido no tipo str, pode ser utilizado para verificar se a
string corresponde a um número natural.
'''

numbers = input('Digite quantos números você quiser, separados por espaço: ')


def sum_numbers(numbers):
    numbersArr = numbers.split(' ')
    sum = 0
    for number in numbersArr:
        if number.isdigit():
            sum += int(number)
        else:
            print(f'Erro ao somar valores, {number} é um valor inválido')
    return sum


print(f'\nOs números digitados foram: {numbers} ', end='')
print('-> A soma é: ', sum_numbers(numbers))
