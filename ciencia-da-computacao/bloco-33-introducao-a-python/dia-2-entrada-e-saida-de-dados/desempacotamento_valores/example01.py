a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d


# Quando um * está presente no desempacotamento, os valores
# são desempacotados em formato de lista.
head, *tail = (1, 2, 3)
print(head)  # saída: 1
print(tail)  # saída: [2, 3]
