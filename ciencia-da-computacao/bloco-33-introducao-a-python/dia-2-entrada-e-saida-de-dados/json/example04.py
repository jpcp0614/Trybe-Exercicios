import json

# leitura de todos os pokemons
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

# separamos somente os do tipo poison
poison_type_pokemons = [
    pokemon for pokemon in pokemons if "Poison" in pokemon["type"]
]

# abre o arquivo para escrita
with open("poison_pokemons.json", "w") as file:
    # escreve no arquivo já transformando em formato json a estrutura
    json.dump(poison_type_pokemons, file)
