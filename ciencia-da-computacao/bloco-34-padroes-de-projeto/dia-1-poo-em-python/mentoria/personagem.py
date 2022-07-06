from personagem_interface import PersonagemInterface


class Personagem(PersonagemInterface):
    def __init__(self, nome, especie, peso, altura, hp):
        self.nome = nome
        self.especie = especie
        self.__peso = peso
        self.__altura = altura
        self.__hp = hp

    def get_hp(self):
        return self.__hp

    def set_hp(self, dano):
        self.__hp -= dano

    def falar(self):
        return 'Olá'
