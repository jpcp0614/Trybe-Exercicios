from abc import ABC, abstractmethod


class InterfaceDisplay(ABC):
    @abstractmethod
    def __init__(self, elevator):
        pass

    @abstractmethod
    def display(self, elevator):
        """Retorna o display do elevator."""
        pass
