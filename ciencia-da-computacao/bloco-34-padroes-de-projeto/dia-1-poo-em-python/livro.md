class Televisão: # 1
    def __init__(self): # 2
        self.ligada = False # 3
        self.canal = 2


tv = Televisão()
tv.ligada -> False
tv.canal -> 2

tv_sala = Televisão()
tv_sala.ligada = True
tv_sala.canal = 4
tv.canal -> 2
tv_sala.canal -> 4


1) Criamos uma nova classe chamada Televisão. Utilizamos a instrução class para indicar a declaração de uma nova classe.canalQuando declaramos uma classe, estamos criando um novo tipo de dados. Esse novo tipo define seus próprios métodos e atributos (lst e string são tipos predefinidos do Python: são classes).
Quando criamos uma lista ou uma string, estamos instanciando ou criando uma instância dessas classes, ou seja, um objeto.

2) Definimos um método especial chamado __init__. Métodos nada mais são que funções associadas a uma classe. O __init__ será chamado sempre que criarmos objetos da classe Televisão, sendo por isso chamado de construtor (constructor) ou inicializador. Um método construtor é chamado sempre que um objeto é instanciado. É o construtor que inicializa nosso novo objeto com seus valores padrões. __init__ recebe um parâmetro chamado self. Por enquanto, entenda self como um objeto televisão em si.

3) Dizemos que self.ligada é um valor de self, ou seja, do objeto televisão. Todo método em Python tem self como primeiro parâmetro. self.ligada é um atributo do objeto. Como self representa o objeto em si, escrevemos self.ligada (maneira de acessar um atributo deste objeto). Se escrevêssemos ligada = False, ligada seria apenas uma variável local do método __init__, e não um atributo do objeto.

tv e tv_sala sao objetos independentes, podendo cada um ter seus próprios valores, como duas televisões no mundo real.
Quando criamos um objeto de uma classe, ele tem todos os métodos e atributos que declaramos na classe e que foram inicializamos pelo construtor.

## TRIVIA
Python constrói objetos em duas etapas. A primeira etapa é o __new__, que em seguida chama o método __init__.
__new__ cria a instância e é utilizado para alterar a definição de classe dinamicamente, em geral, usada em programas mais avançados de framework.
__init__ é chamado por __new__ para inicializar a classe com seus valores iniciais. Isso ocasiona o problema de chamar __init__ de construtor. Como não utilizaremos __new__, chamaremos o __init__ de construtor ou inicializador