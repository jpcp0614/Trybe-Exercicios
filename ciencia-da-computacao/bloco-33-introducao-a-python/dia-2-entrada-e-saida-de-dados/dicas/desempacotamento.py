x, y = 'ab'


print(x)  # 'a'
print(y)  # 'b'


nome_e_nascimento = [('João', 'Canadá'), ('Camila', 'Inglaterra')]

for nome, local in nome_e_nascimento:
    print(f'{nome} nasceu no(a) {local}')


a, *b = 'Pedro'


print(a)  # 'P'
print(b)  # ['e', 'd', 'r', 'o']
