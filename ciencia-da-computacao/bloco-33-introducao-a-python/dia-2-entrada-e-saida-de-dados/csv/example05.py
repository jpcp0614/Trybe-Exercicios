import csv

with open("arquivo2.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
