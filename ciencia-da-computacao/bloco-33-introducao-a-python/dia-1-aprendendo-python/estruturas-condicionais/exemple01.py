"""

>>> pantheon_of_arton = [
...     {"nome": "Wynna", "dominio": "Magia"},
...     {"nome": "Nimb", "dominio": "Sorte"},
...     {"nome": "Ahadark", "dominio": "Tormenta"},
... ]
>>> pantheon_of_arton
[{'nome': 'Wynna', 'dominio': 'Magia'}, {'nome': 'Nimb', 'dominio': 'Sorte'}, {'nome': 'Ahadark', 'dominio': 'Tormenta'}]
>>> from random import randint
>>> dice_roll = randint(1, 20)
>>> if dice_roll == 1:
...     print("Vixi... Deu ruim!")
... elif 2 <= dice_roll <= 15:
...     print("Ahadarak, porque me tormentas?!")
... elif 16 <= dice_roll <= 19:
...     print("Nimb, obrigado pela sorte!")
... else:
...     print("Agora, ninguém me segura!")
... 
Ahadarak, porque me tormentas?!

position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

"""