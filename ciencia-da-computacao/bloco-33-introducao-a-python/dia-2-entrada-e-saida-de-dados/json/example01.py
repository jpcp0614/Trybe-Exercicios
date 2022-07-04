# with open("superheroes.json") as superheroes_file:
#     print(superheroes_file.read())


# import json


# with open("superheroes.json") as superheroes_file:
#     print(json.load(superheroes_file)[0])


# with open("superheroes.json") as superheroes_file:
#     superheroes_list = json.load(superheroes_file)
#     result = list()

#     for superhero in superheroes_list:
#         result.append({superhero['superhero']: superhero['alter_ego']})
#     print(result)


import csv


# with open("dc-data-wikia.csv") as superheroes_file:
#     superheroes_list = csv.DictReader(superheroes_file)
#     for superhero in superheroes_list:
#         print(superhero)


with open("dc-data-wikia.csv") as superheroes_file:
    header, *superheroes_list = csv.reader(superheroes_file)
    print(header)
