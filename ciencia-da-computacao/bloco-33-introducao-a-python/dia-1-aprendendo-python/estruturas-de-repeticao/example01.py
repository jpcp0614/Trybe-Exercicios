# FOR

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurant = []
min_rating = 3.0

# Exemplo 01
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurant.append(restaurant)
        print('laço', restaurant) # cada laço é um restaurante
print(filtered_restaurant);



# COMPREENSÃO DE LISTAS (list comprehension)

# Exemplo 2
filtered_restaurant_2 = [restaurant["name"]
                          for restaurant in restaurants
                          if restaurant["nota"] > min_rating]
print(filtered_restaurant_2);


team = ["Ana", "Rafa", "Bernardo", "Duda", "André", "Jean", "Bruno"]
a_names = []

# Exemplo 3
for name in team:
    if name[0] == "A":
        a_names.append(name)
print(a_names)

# Exemplo 4
b_names = [name.upper() for name in team if name[0] == "B"]
print(b_names)