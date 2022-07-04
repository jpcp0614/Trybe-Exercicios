'''
0 - qual análise você quer?
1 - ler os dados do arquivo
2 - gerar análises sobre os dados
3 - registrar os resultados em outro arquivo (relatório)
'''
from src.analyzer import sales_by_console
from src.exporter import export_report
from src.importer import import_data


def main():
    MENU_OPTIONS = '''
    0 - Sair
    1 - Total de vendas por console
    '''

    print('Digite o número da opção desejada: ')
    user_input = input(MENU_OPTIONS)

    games_data = import_data()

    if user_input == '0':
        print('Saindo...')
        return None
    if user_input == '1':
        # análise com o games_data
        report = sales_by_console(games_data)
        print('Analisando...')
        print(report)
        print('Salvando relatório...')
        export_report(report)
        print('Relatório salvo!')
        print('Saindo...')
    else:
        print('Opção inválida!')
        print('Saindo...')
        return None


main()
