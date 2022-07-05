# Objetos

- Objetos são entidades da aplicação, ou seja, eles interagem entre si para solucionar os requisitos do sistema.


## Primeiro exemplo

Liquidificador

- 1) Identificamos os principais atributos deste objeto (cor, potencia, voltagem, ligado, velocidade, velocidade_maxima)

### Método Constructor/Inicializador

Em Python, esta operação é dividida em dois Métodos
- new (Construtor)
- init (inicializador)

2) Recriar o método init dentro da classe

class Liquidificador:
    def __init__(self, cor, potencia, voltagem):
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3

- O primeiro parâmetro, o self, representa a instância do objeto, ou seja, tem acesso ao objeto na memória. Com o método init, inicializamos os atributos do objeto apenas atribuindo um valor a cada nova chave.
-- Exemplo: self.ligado = False.

- Os próximos parâmetros são os que permitem criar de forma customizada nosso objeto, como a cor: self._cor = cor.
-- Exemplo: liquidificador_azul = Liquidificador('Azul', 200, 127)
            liquidificador_vermelho = Liquidificador('Vermelho', 250, 220)


## Encapsulamento e Abstração
Em Python, por meio do encapsulamento, podemos simplificar significativamente a programação, bem como proteger informações sigilosas ou sensíveis.

- não temos as já conhecidas palavras reservadas: public, private e protected que são utilizadas em outras linguagens para declarar um atributo como privado, por exemplo. Porém, existe uma convenção para indicar que a acessibilidade é privada: basta nomear um método ou atributo com o prefixo __ (dunder/duplo underline), como vimos nos atributos __ligado, __cor, __peso.


class Liquidificador:
    def __init__(self, cor, potencia, voltagem):
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
       	self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


## Abstração
Perceba que se agora chamarmos o método ligar, não temos a necessidade de conhecer o cálculo interno. Este conceito é chamado de Abstração, sendo positivo durante a programação pois deixa os códigos mais limpos.

- A abstração de dados oculta os detalhes da implementação e mostra apenas a funcionalidade para o usuário, a fim de reduzir a complexidade do código.

liquidificador_vermelho = Liquidificador("Vermelho", 250, 220)
liquidificador_vermelho.ligar(1)
print("Esta ligado?", liquidificador_vermelho.esta_ligado())
# Esta ligado? True
liquidificador_vermelho.desligar()
print("Esta ligado?", liquidificador_vermelho.esta_ligado())
# Esta ligado? False


## Composição
Agora que temos um liquidificador funcionando, vamos associá-lo a uma pessoa que cozinha, dizendo assim que esta pessoa pode possuir um liquidificador

- Lembre que uma pessoa não é da mesma classe que um liquidificador, ela somente é possuidora desse objeto. Neste caso, precisamos utilizar do conceito de Composição.
- Composição é atribuir o objeto de uma classe a outra, gerando assim um relacionamento de pertencimento entre eles.

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

Agora, a classe Pessoa tem o método específico para comprar seu liquidificador:

pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)


## Herança
Evitar repetição de código com o conceito de herança, criando assim uma classe Eletrodomésticos. Neste sentindo, as classes geladeira, batedeira, fogão, micro-ondas serão suas filhas, ou seja, a herdam.

- Herança é especializar o comportamento de uma classe, ou seja, a classe herdeira é tudo que a classe ascendente é e talvez um pouco mais!

class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

