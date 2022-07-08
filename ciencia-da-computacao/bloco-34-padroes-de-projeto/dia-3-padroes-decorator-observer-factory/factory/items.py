from abc import ABC, abstractmethod


class Item(ABC):
    @abstractmethod
    def __repr__(self):
        # __repr__ é o método que o Python chama quando
        # realizamos um print() do objeto
        pass


class ItemHamburger(Item):
    def __repr__(self):
        return "Hambúrguer"


class ItemRefrigerante(Item):
    def __repr__(self):
        return "Refrigerante"


class ItemSorvete(Item):
    def __repr__(self):
        return "Sorvete"


class ItemFritas(Item):
    def __repr__(self):
        return "Fritas"
