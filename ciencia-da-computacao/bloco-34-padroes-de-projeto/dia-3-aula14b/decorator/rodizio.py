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


if __name__ == '__main__':
    seller_team = SellerTeam()
    print(seller_team.people)
    seller_team.people.append('João')
    print(seller_team.people)
