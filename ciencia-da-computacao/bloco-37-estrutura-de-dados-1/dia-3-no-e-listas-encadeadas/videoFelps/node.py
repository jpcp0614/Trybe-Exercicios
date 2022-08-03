class Node:
    def __init__(self, value):
        self.value = value  # dado a ser armazenado
        self.next = None  # forma de apontar para o próximo nó

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"
