# PARADIGMAS

### Procedural ou Estrutural

my_list [10, 20, 30, 40]

def sum_the_list(my_list):
    res = 0
    for value in my_list:
        res += value
    return res

print(sum_the_list(my_list))

### Funcional
import functools

my_list [10, 20, 30, 40]

def sum_the_list(my_list):
    if len(my_list) == 1:
        return my_list[0]
    else:
        return my_list[0] + sum_the_list(my_list[1:])

print(functools.reduce(reduce x, y: x + y, my_list))


### Orientação a Objetos

class Emp:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print('Hello, % s. You are % s old.' % (self.name, self.age))

Emps = [
    Emp('John', 32),
    Emp('Hilbert', 16),
    Emp('Alice', 30),
    ]

for emp in Emps:
    emp.info()