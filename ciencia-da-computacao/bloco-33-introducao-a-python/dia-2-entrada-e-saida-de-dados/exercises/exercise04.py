'''
Dado o seguinte arquivo no formato JSON, leia seu conteúdo e
calcule a porcentagem de livros em cada categoria em relação
ao número total de livros. O resultado deve ser escrito em um
arquivo no formato CSV como o exemplo abaixo.
'''
import json
import csv


# def retrieve_books(file):
#     return json.load(file)


# def count_books_by_categories(books):
#     categories = {}
#     for book in books:
#         for category in book["categories"]:
#             if not categories.get(category):
#                 categories[category] = 0
#             categories[category] += 1
#     return categories


# def calculate_percentage_by_category(book_count_by_category, total_books):
#     return [
#         [category, num_books / total_books]
#         for category, num_books in book_count_by_category.items()
#     ]


# def write_csv_report(file, header, rows):
#     writer = csv.writer(file)
#     writer.writerow(header)
#     writer.writerows(rows)


# if __name__ == "__main__":
#     # retrieve books
#     with open("books.json") as file:
#         books = retrieve_books(file)

#     # count by category
#     book_count_by_category = count_books_by_categories(books)

#     # calculate percentage
#     number_of_books = len(books)
#     books_percentage_rows = calculate_percentage_by_category(
#         book_count_by_category, number_of_books
#     )

#     # write csv
#     header = ["categoria", "percentagem"]
#     with open("report.csv", "w") as file:
#         write_csv_report(file, header, books_percentage_rows)


# Vídeo GABARITO


# Recuperar o arquivo books
def retrieve_books(file):
    '''
    retrieve_books(file)
    Função que transforma o 'file'
    num objeto Python, para que haja
    manipulação de dados
    '''
    print(retrieve_books.__doc__)
    return json.load(file)


# Calcular a quantidade de livros por categoria
def count_books_by_categories(books):
    '''
    count_books_by_categories(books)
    Função que conta a quantidade de livros
    por categoria
    (for que percorrerá o 'books' e,
    para cara 'book', haverá um for
    que percorrerá as categorias
    se não existir a categoria, criará uma
    com valor inicial zero
    se existir a categoria, fará o incremento
    do valor)
    '''
    # nome da categoria e o total de livros
    categories = dict()
    for book in books:
        for category in book['categories']:
            # se não existir a categoria dentro do dicionário
            if not categories.get(category):
                # cria uma entrada no dicionário
                # cria uma chave (category) que inicia com valor zero
                categories[category] = 0
            # incrementa o valor da chave (category)
            categories[category] += 1
    print(count_books_by_categories.__doc__)
    return categories


# Calcular o percentual de livros
def calculate_percentage_by_category(book_count_by_category, total_books):
    '''
    calculate_percentage_by_category(book_count_by_category, total_books)
    Função que calcula o percentual de livros
    por categoria - usando list comprehension
    (criar uma lista, com várias listas,
    que terão dois elementos: o nome da categoria
    e a quantidade da categoria)
    '''
    print(calculate_percentage_by_category.__doc__)
    return [
        # category e num_books virão da iteração do for
        [category, num_books / total_books]
        # converter o book_count_by_category em tupla (items())
        for category, num_books in book_count_by_category.items()
    ]


# Escrever o relatório num arquivo CSV
def write_csv_report(file, header, rows):
    '''
    write_csv_report(file, header, rows)
    Função que escreve o arquivo,
    cria o cabeçalho e as linhas
    '''
    writer = csv.writer(file)
    # escreve o cabeçalho
    writer.writerow(header)
    # escreve as linhas
    writer.writerows(rows)
    print(write_csv_report.__doc__)


# Chamar as funções de forma encadeada
if __name__ == '__main__':
    # retrieve_books
    with open('books.json', mode='r') as file:
        books = retrieve_books(file)

    # count_books_by_categories
    book_count_by_category = count_books_by_categories(books)

    # calculate_percentage_by_category
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category,  number_of_books)

    # write csv
    with open('report.csv', mode='w') as file:
        header = ['categoria', 'porcentagem']
        rows = books_percentage_rows
        write_csv_report(file, header, rows)
