lista = ['Python', 'JavaScript', 'C#', 'PHP', 'Java', 'Assembly', 'Ruby', 'Go']

print(iter(lista))  # list_iterator

obj_iterator = iter(lista)

print(next(obj_iterator))  # 'Python'
