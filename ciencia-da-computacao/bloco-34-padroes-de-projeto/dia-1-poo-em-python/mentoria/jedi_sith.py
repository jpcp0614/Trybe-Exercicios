from personagem import Personagem
from light_saber import SabreDeLuz
from random import choice
from personagem_interface import PersonagemInterface


class Jedi(Personagem, PersonagemInterface):
    def __init__(
      self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.sabre_de_luz = SabreDeLuz('Verde', 50)

    def defender(self):
        defesa = choice([True, False])

        if defesa:
            print(f'{self.nome} defendeu!')
        return defesa

    def contra_atacar(self, personagem):
        personagem.set_hp(self.sabre_de_luz.forca)
        print(f'{self.nome} contra atacou {personagem.nome}')

    def falar(self):
        return 'Que a força esteja com você!'


class Sith(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.sabre_de_fogo = SabreDeLuz('Vermelho', 50)

    def atacar(self, personagem):
        if not personagem.defender():
            personagem.set_hp(self.sabre_de_fogo.forca)
            print(f'{self.nome} atacou {personagem.nome}!')

    def falar(self):
        return 'Venha para o lado escuro da força'
