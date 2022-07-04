class Pet():
    def __init__(self, nome, especie, idade, humano):
        self.nome = nome
        self.especie = especie
        self.idade = idade
        self.humano = humano

    def __str__(self):
        return f'''
        - Nome do pet: {self.nome}
        - Espécie do pet: {self.especie}
        - Idade do pet: {self.idade}
        - Humano: {self.humano}
        '''


mila = Pet('Mila', 'Cachorra', 9, 'João Paulo')

print(mila)
