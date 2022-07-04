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

