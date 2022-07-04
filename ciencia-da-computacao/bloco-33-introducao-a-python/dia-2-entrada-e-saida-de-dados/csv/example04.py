import csv

with open("arquivo.csv", "w") as file:
    lista = ["oi", "olá"]
    csv.writer(file).writerow(lista)
