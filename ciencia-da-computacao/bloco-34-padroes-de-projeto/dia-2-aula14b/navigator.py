from abc import ABC, abstractmethod


class Navigator:
    def __init__(self, navigation_strategy):
        self.__navigation_strategy = navigation_strategy

    def build_route(self, departure, arrival):
        self.__navigation_strategy.build_route(departure, arrival)


class NavigationStrategy(ABC):
    @classmethod
    @abstractmethod
    def build_route(self):
        raise NotImplementedError


class WalkStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota a pé saindo de {departure} para {arrival}")


class BikeStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de bicicleta saindo de {departure} para {arrival}")


class BusStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de ônibus saindo de {departure} para {arrival}")


class CarStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de carro saindo de {departure} para {arrival}")


Navigator(WalkStrategy).build_route('Centro', 'Pampulha')
Navigator(BikeStrategy).build_route('Centro', 'Pampulha')
Navigator(BusStrategy).build_route('Centro', 'Pampulha')
Navigator(CarStrategy).build_route('Centro', 'Pampulha')
