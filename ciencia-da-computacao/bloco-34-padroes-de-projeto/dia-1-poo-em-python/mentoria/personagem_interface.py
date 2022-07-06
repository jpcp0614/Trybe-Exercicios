from abc import ABC, abstractmethod


class PersonagemInterface(ABC):
    @abstractmethod
    def falar(self):
        raise NotImplementedError
