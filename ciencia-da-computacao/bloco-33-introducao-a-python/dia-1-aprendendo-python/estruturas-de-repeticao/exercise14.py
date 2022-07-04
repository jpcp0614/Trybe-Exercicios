ratings = [6, 8, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
new_ratings = []
ratings_3 = []
phrase = 'Múltiplos de 3'

for element in ratings:
    new_ratings.append(element * 10)

for element_10 in new_ratings:
    if (element_10 % 3 == 0):
        ratings_3.append(element_10)

print(f'{ratings_3} => {phrase}')