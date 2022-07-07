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


# Adapter

Mantendo-se na situação abordada anteriormente, sua equipe ficou sabendo de um novo desafio e você agilmente foi acompanhar a nova demanda:
O problema agora é outro: a ferramenta que compramos tem uma API pronta pra integrar no nosso sistema, só que a interface é muito diferente da nossa. Ela exporta uma lista de cabeçalhos e uma lista de valores, não é como a nossa que já monta os dicionários direitinho...

Como resposta, uma pessoa colega de time acrescenta:
Vai dar MUITO trabalho utilizar essa ferramenta... Vamos ter que parar tudo para adaptar o nosso sistema a esse formato! Ou pior, vamos ter que REIMPLEMENTAR a api que eles oferecem... 😳 Quem poderá nos ajudar?

E aí você se lembra do Padrão Adapter.

Ao analisar os códigos do sistema, já deparamos com um exemplo de classe que analisa o relatório e realiza um cálculo de média. Nota-se que o método average() espera que o retorno de load_data() contenha estruturas dict.


class ReportAnalyzer:
    def __init__(self, loader):
        self.loader = loader

    def average(self):
        # este é um dos métodos que espera uma lista de dicionários
        data = self.loader.load_data()
        # aqui ela soma o valor na chave final_price em cada item da lista
        total = sum(order['final_price'] for order in data)
        return total / len(data)


Pelo que foi comentado na reunião, a nova ferramenta (gerenciator3000) não retorna uma estrutura com dicionários, o que é comprovado ao realizar os print de seu retorno:


from gerenciator3000 import ReportLoader

loader = ReportLoader()
print(loader.headers)   ##  ['id', 'date', ..., 'final_price']
print(loader.rows[0])  ##  [1337, '2020-11-20', ..., 2350.5]


O time decidiu fazer uma classe responsável por "traduzir" esses dados do formato da ferramenta para o formato do sistema utilizado pela companhia. Essa classe poderá ser acoplada na ferramenta de relatórios. Tem-se então uma adaptação eficiente:

class G3000LoaderAdapter:
    # aqui o loader é uma instancia do gerenciator3000.ReportLoader original
    def __init__(self, loader):
        self.loader = loader

    def load_data(self):

        # Em python, o zip() junta uma lista de chaves em uma lista de valores
        # e cria um dicionário! por exemplo:
        # zip(['nome', 'idade'], ['Juliana', 27])
        # {'nome': 'Juliana', 'idade': 27}

        return [zip(loader.headers, row) for row in loader.rows]


Feito! Foi utilizado outro padrão, o Adapter. Ele permite converter a interface de uma classe em outra interface, esperada pelo cliente (isto é, o código que usa a classe em questão). O Adapter permite que interfaces incompatíveis trabalhem em conjunto — o que, de outra forma, seria impossível.

from gerenciator3000 import ReportLoader
from project.loaders import G3000LoaderAdapter
from project.analyzer import ReporterAnalyzer

# o loader da ferramenta é carregado do jeito que a ferramenta recomenda
g3000_loader = ReportLoader(...)
# o adaptador recebe o loader da ferramenta
loader = G3000LoaderAdapter(g3000_loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader
analyzer = ReportAnalyzer(loader)

analyzer.average() # Agora funcionará


A aplicação aumenta em complexidade como consequência, pois estamos adicionando novas interfaces e classes. Porém, o desacoplamento entre o código do cliente (ReporterAnalyzer) e o objeto adaptado (ReportLoader) se mantém. Mudanças no objeto adaptado refletem apenas no adaptador (G3000LoaderAdapter) e não no código cliente, então nenhuma lógica existente é alterada para adicionar a funcionalidade. É possível ainda substituir o serviço adaptado através da criação de novos adaptadores.


# Strategy

A equipe qual você faz parte está sendo reconhecida pela empresa! Dada a facilidade em lidar com os problemas, vocês receberam a missão de simplificar um código extenso, que sempre apresenta bugs. A manutenção do código em questão é temida por muitas pessoas desenvolvedoras.

Antes de tudo, deve-se conferir o que este código deve fazer com base no relato da pessoa usuária:
Depois de que o relatório é processado, costumamos emitir uma ordem de cobrança bancária para cada cliente que possui débito automático. Temos um código que realiza a comunicação com as principais instituições bancárias. Mas é frequente um dos bancos alterar a Api deles e nosso código para de funcionar, derrubando o sistema para todo mundo.


class DebitoAutomatico:
    @classmethod
    def debitar(self, conta, valor, banco):
        if banco == "itau":
            # Codigo especifico do Itaú (exemplo)
            # connect_server_udp(itau_line)
            # itau_line.check_system()
            # itau_zig_zag(valor, 'Token 454')
            print("Débito realizado pelo Itau")
        elif banco == "Santander":
            # Codigo especifico do Santander (exemplo)
            # connect_server_tcp(santander_line)
            # santander_line.check_ping()
            # metodo_106(valor)
            print("Santander, Débito efetuado!")
        elif banco == "Bradesco":
            # Codigo especifico do Bradesco (exemplo)
            print("Sucesso!")
        # ... + 150 bancos...
        elif banco == "Caixa":
            # Codigo especifico da Caixa (exemplo)
            print("Efetuado com sucesso, Caixa Agradece!")


DebitoAutomatico.debitar(120, 123, "itau")
DebitoAutomatico.debitar(110, 456, "Santander")
DebitoAutomatico.debitar(120, 789, "Bradesco")


Como melhorar o código? Que estratégia utilizar? É hora de pensar...
Podemos observar que a classe está enorme, afinal, ela possui muitas responsabilidades já que cada banco possui uma estratégia. Que tal começar criando um Objeto/Classe para cada banco? Como possuem similaridades, é possível respeitar uma interface única — por exemplo, todos possuírem um método debitar().


from abc import ABC, abstractmethod


class BancoStrategy(ABC):  # Interface
    @classmethod
    @abstractmethod
    def debitar(cls):
        raise NotImplementedError


class ItauStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos especifico do Itau (exemplo)
        print("Débito realizado pelo Itau")


class SantanderStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos especifico do Santander (exemplo)
        print("Santander, Débito efetuado!")


class BradescoStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos especifico do Bradesco (exemplo)
        print("Sucesso!")

... métodos para todos os bancos


As classes foram colocadas juntas no mesmo arquivo como forma de facilitar a visualização. Considere que cada uma já pode estar em seu respectivo arquivo.
O último passo será criar a classe Banco, que receberá como parâmetro a estratégia escolhida:


from itau_strategy import ItauStrategy
from santander_strategy import SantanderStrategy
from brandeço_strategy import BradescoStrategy

class Banco:
    def __init__(self, banco_strategy):
        self.__banco_strategy = banco_strategy

    def debitar(self, conta, valor):
        self.__banco_strategy.debitar(conta, valor)

Banco(ItauStrategy).debitar(120, 123)
Banco(SantanderStrategy).debitar(110, 456)
Banco(BradescoStrategy).debitar(120, 789)


