from pymongo import MongoClient


# padrão: localhost 27017
# podemos modificar, alterando a URI
# client = MongoClient('mongodb://localhost:27017')

client = MongoClient()

# o banco será criado, caso não exista
db = client.catalogue

# a coleção books será criada se não existir
students = db.books

# fecha a conexão com o db
client.close()
