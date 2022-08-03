'''
Dada uma lista não vazia, unida individualmente com o nó principal,
retorne o nó do meio da lista. Se houver dois nós no meio, retorne o
segundo nó do meio.
'''


from videoFelps.problema01.linked_list import LinkedList
from rich import print


if __name__ == '__main__':
    my_linked_list = LinkedList()

    my_linked_list.insert_first("Felps")
    my_linked_list.insert_first("Eli")
    my_linked_list.insert_first("Flávio")
    my_linked_list.insert_first("Bux")

    print(my_linked_list.get_mid_element())
