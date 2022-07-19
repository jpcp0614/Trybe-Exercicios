from connection import connection


db = connection().catalogue

print(db.books.find_one())

for book in db.books.find({"title": {"$regex": "Velvet"}}):
    print(book["title"])

connection().close()
