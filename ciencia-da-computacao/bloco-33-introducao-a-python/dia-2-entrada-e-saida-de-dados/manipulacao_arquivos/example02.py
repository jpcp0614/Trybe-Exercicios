# ESCRITA

file = open('arquivo.txt', mode='w')
file.write('Arquivo de escrita!')
file.close()


# LEITURA

file = open('arquivo.txt', mode='r')
content = file.read()
print(content)
file.close()
