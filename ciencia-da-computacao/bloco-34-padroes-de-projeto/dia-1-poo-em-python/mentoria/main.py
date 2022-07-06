from personagem import Personagem
from jedi_sith import Jedi, Sith


personagem1 = Personagem('Padmé', 'Humano', 50, 160, 50)
darth_vader = Sith('Darth Vader', 'Humano', 130, 200, 130)
luke = Jedi('Luke', 'Humano', 80, 170, 100)

print('Personagens:')
print(f'{personagem1.nome}, -> {personagem1.falar()}')
print(f'{darth_vader.nome} -> {darth_vader.falar()}')
print(f'{luke.nome} ->\n')


print('Round 1:')
print(f'{darth_vader.nome} ataca {luke.nome}')
darth_vader.atacar(luke)
