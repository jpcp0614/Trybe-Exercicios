import json

with open('pokemons.json') as file:
    content = file.read()
    pokemons = json.loads(content)['results']
    print(pokemons)
    for pokemon in pokemons:
        pokemons_names = (pokemon['name'])
        print(pokemons_names)
