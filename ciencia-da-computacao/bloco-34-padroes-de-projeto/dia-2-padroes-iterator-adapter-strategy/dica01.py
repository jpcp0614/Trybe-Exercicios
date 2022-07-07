import sys
from operator import add, sub


FUNCS = {
    'somar': add,
    'subtrair': sub,
}


try:
    file_name, func, n1, n2 = sys.argv
    n1, n2 = int(n1), int(n2)
    result = FUNCS[func](n1, n2)
except ValueError:
    print('''
      Argumentos inválidos!!!
      Experimente python3 dica01.py somar 10 20
    ''', file=sys.stderr)
except KeyError:
    available_functions = ', '.join(FUNCS.keys())
    print(f'Função indisponível, tente uma destas: {available_functions}')
else:
    print(f'O resultado da operação {func} foi {result}')
    sys.exit(0)

opcao = 1
while opcao != 0:
    n1 = int(input('Digite um número: '))
    n2 = int(input('Digite outro número: '))
    opcao = int(
      input(
        '''
        1 - somar
        2 - subtrair
        0 - sair
        '''))
    
    if opcao == 1:
        print(f'{n1} + {n2} = {n1 + n2}')
    elif opcao == 2:
        print(f'{n1} - {n2} = {n1 - n2}')
    
