class Personagem():
    def __init__(self, nome, especie, peso, altura, hp):
        self.nome = nome
        self.especie = especie
        self.__peso = peso
        self.__altura = altura
        self.__hp = hp
