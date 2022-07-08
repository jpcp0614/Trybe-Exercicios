import random
from abc import ABC, abstractmethod


class SellerTeam:
    def __init__(self):
        # imagine que as pessoas vendedoras são lidas de um DB
        self.__people = [
          'Lucas', 'Marina', 'Felipe', 'Augusto', 'Flávio',
          'Sérgio', 'Rafaela', 'Luana',
        ]

    # get
    @property
    def people(self):
        return self.__people

    # set
    @people.setter
    def people(self, people):
        self.__people = people


class RandomSeller:
    def __init__(self, seller_team):
        self.seller_team = seller_team

    def owner_decoration(func):
        def wrapper(*args, **kwargs):
            print('-------- CARREGANDO LISTA --------')
            returned_value = func(*args, **kwargs)
            print('FECHOU\n\n')
            return returned_value
        return wrapper

    @owner_decoration
    def next_seller(self):
        seller = random.choice(self.seller_team.people)
        print(f'Vendedor: {seller}')
        return seller


class Decorator(ABC):
    def __init__(self, random_seller):
        self.random_seller = random_seller

    @abstractmethod
    def next_seller(self):
        raise NotImplementedError


class RandomSellerWithInterns(Decorator):
    def next_seller(self):
        list_interns = ['Gustavo', 'Jorge', 'Amanda']
        self.random_seller.seller_team.people += list_interns

        self.random_seller.next_seller()


# class RandomSellerWithInterns:
#     def __init__(self, seller_team):
#         # lista de estagiários
#         list_interns = ['Gustavo', 'Jorge', 'Amanda']
#         self.seller_team = seller_team
#         self.seller_team += list_interns

#     def next_seller(self):
#         seller = random.choice(self.seller_team)
#         print(f'Vendedor: {seller}')
#         return seller


if __name__ == '__main__':
    seller_team = SellerTeam()
    list_sellers = seller_team.people
    print(list_sellers)

    print('Pessoas Vendedoras')
    random_seller = RandomSeller(seller_team)
    random_seller.next_seller()

    print('Pessoas Vendedoras + Estagiários')
    random_seller_with_interns = RandomSellerWithInterns(random_seller)
    random_seller_with_interns.next_seller()
