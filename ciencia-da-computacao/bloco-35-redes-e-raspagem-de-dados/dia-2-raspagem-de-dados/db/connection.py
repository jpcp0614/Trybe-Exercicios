from pymongo import MongoClient


# padrão: localhost 27017
# podemos modificar, alterando a URI
# client = MongoClient('mongodb://localhost:27017')

def connection():
    client = MongoClient()
    return client


# o banco será criado, caso não exista
db = connection().catalogue

# a coleção books será criada se não existir
catalogue = db.books

# fecha a conexão com o db
# client.close()

# book = {
#   "title": "A Light in the Attic"
# }

# document_id = db.books.insert_one(book).inserted_id

documents = [
  {
    "title": "Tipping the Velvet",
  },
  {
    "title": "Soumission",
  },
]

db.books.insert_many(documents)

connection().close()
