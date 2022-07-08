import random


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

    def next_seller(self):
        seller = random.choice(self.seller_team)
        print(f'Vendedor: {seller}')
        return seller


class RandomSellerWithInterns:
    def __init__(self, seller_team):
        # lista de estagiários
        list_interns = ['Gustavo', 'Jorge', 'Amanda']
        self.seller_team = seller_team
        self.seller_team += list_interns

    def next_seller(self):
        seller = random.choice(self.seller_team)
        print(f'Vendedor: {seller}')
        return seller


if __name__ == '__main__':
    seller_team = SellerTeam()
    list_sellers = seller_team.people
    print(list_sellers)

    print('Pessoas Vendedoras')
    random_seller = RandomSeller(list_sellers)
    random_seller.next_seller()

    print('Pessoas Vendedoras + Estagiários')
    random_seller_with_interns = RandomSellerWithInterns(list_sellers)
    random_seller_with_interns.next_seller()
