# Padrões de Projeto

### Design Patterns

 - Formas para resolver problemas comuns na orientação de objetos

 - facilitar a reutilização do desenho da solução e a comunicação, assim como melhorar a documentação e compreensão de um sistema, essa comunidade de cientistas começou a catalogar estes padrões

## Classificação dos Padrões de Projeto

Padrões de Criação:
- O foco é em como os objetos são criados e como criar objetos flexíveis que podem ser facilmente reaproveitados.
Exemplo deste padrão de criação é o Factory.


Padrões Estruturais:
- O foco está no design da estrutura de objetos e de classes, simplificando e identificando o relacionamento entre eles. Utilizam-se fortemente os conceitos de Herança e Composição.
Esses padrões trazem maneiras de lidar com objetos e classes mais complexos e maiores, sem perder eficiência e flexibilização. Exemplos desses padrões são o Adapter, que abordaremos hoje, e o Decorator, que abordaremos em aulas futuras.


Padrões Comportamentais:
- Foca em como os objetos interagem entre si e suas responsabilidades. Exemplos são o Iterator e o Strategy, que veremos hoje. Veremos também, em aulas próximas, o padrão Observer, que você talvez já tenha observado em frameworks/libraries reativas — como Vue, React e Angular.



## Iterator

Imagine a situação: você está em um time de desenvolvimento e suas habilidades envolvidas ma criação de códigos limpos e reutilizáveis serão muito bem-vindas. O primeiro desafio está relacionada à cobrança de clientes, e em uma reunião a dor da equipe é compartilhada:

Costumávamos fazer os relatórios de cobrança a clientes de forma manual, mas isso se tornou impossível com o constante crescimento de clientes que começou há 3 meses. Estamos com um atraso de 3 meses de relatório! Agora nossa empresa comprou uma ferramenta automática de relatórios, mas o meu computador não conseguiu carregar 3 meses de tabela para fazer o relatório! Exige muito da memória e o sistema simplesmente trava.

class DbSimulator:
    def __init__(self):
        # Imagine que estes dados estão populados no banco de dados
        self.person_table = [
            {"name": "Morgana", "age": "22"},
            {"name": "Sarah", "age": "24"},
            {"name": "Will", "age": "33"},
            {"name": "Rick", "age": "23"},
            {"name": "John", "age": "22"},
            {"name": "Peter", "age": "35"},
            {"name": "Groove", "age": "48"},
            {"name": "Sam", "age": "19"},
        ]

    # Não se preocupe com este método apenas simula um retorno get do banco.
    def get(self, query, page):
        per_page = 2

        if query == "select * from person":
            first = (page * per_page) - per_page
            last = page * per_page
            return self.person_table[first:last]


Para consultá-lo em partes menores, será criada uma classe chamada Iterable, que tem a coleção de objetos que pode ser iterada (no caso, o banco de dados para o relatório). Será implementado o método __iter__, padronizado pelo Python, responsável por fornecer um objeto iterador que veremos a seguir.

 Iterator e Iterable é a Interface padronizada pelo Python
from collections.abc import Iterable, Iterator

class DatabaseIterable(Iterable):
    def __init__(self, db, query):
        self.db = db
        self.query = query

    """Aqui retornamos qual é o objeto que realiza a iteração"""
    def __iter__(self):
        return DatabaseIterator(self.db, self.query)


O objeto iterador é uma instância da classe DatabaseIterator, em que será inserida a lógica para acessar o banco de dados e realizar as requisições por lotes (páginas). Implementa-se o método __next__, padronizado pelo Python, permitindo a iteração no DatabaseIterable.

class DatabaseIterator(Iterator):
    def __init__(self, db, query):
        """No construtor da classe iteradora, definimos o valor inicial do
        contador current_page, e também o(s) atributo(s) que será(ão)
        responsável(is) por armazenar/acessar a coleção de dados pela qual
        queremos iterar."""

        self.db = db
        self.query = query
        self.current_page = 1

    def get_page(self, page):
        return self.db.get(self.query, page)

    def __next__(self):
        """Este método busca no banco de dados a página que queremos e
        incrementa o contador current_page, para retornarmos a próxima página
        na próxima vez que o método for chamado."""

        data = self.get_page(page=self.current_page)

        """É uma boa prática a utilização da exceção StopIteration() para
        indicar que não foi possível avançar na iteração. Ou seja: tentamos
        acessar uma current_page que não existe."""

        if not data:
            raise StopIteration()

        self.current_page += 1
        return data


Note que cada vez que o método __next__ é chamado na instância retornada por __iter__, receberemos uma parte pequena dos dados, que pro sua vez será utilizada na ferramenta de relatórios.

Depois de pronto, como usar? Como vamos iterar na coleção?
Como respeitamos a interface do Python para escrever o padrão iterator, ele já libera o funcionamento do clássico for:

# Primeiro instanciamos o ITERÁVEL
record_paginator = DatabaseIterable(DbSimulator(), "select * from person")

# Em seguida podemos usar o for pra iterar
# Nesse momento o ITERADOR é criado implicitamente
for page in record_paginator:
    # faz algo com a pagina, que é uma lista de resultados
    for record in page:
        print(record["name"])


No Python por exemplo, quando chamamos um for para iterar sobre um objeto, a linguagem envia a mensagem __iter__() de modo a obter um iterador. Em seguida, envia para o iterador a mensagem __next__() para encontrar o próximo item, e o próximo, e o próximo... até o iterador se esgotar, isto é, levantar a exceção StopIteration(). Assim, toda classe que implementar o padrão iterator pode ser usada com estruturas como o for: listas, tuplas, dicionários, árvores e até arquivos.

para todas as estruturas iteráveis do Python (inclusive a nossa classe DatabaseIterable), esse processo implícito do for pode ser feito explicitamente passando o objeto iterável como parâmetro da função nativa iter(). O retorno dessa chamada será exatamente o objeto iterador definido no retorno do __iter__, que poderá ser passado como parâmetro para a função nativa next(). Dessa forma, cada chamada do next() funciona como 1 ciclo do for.