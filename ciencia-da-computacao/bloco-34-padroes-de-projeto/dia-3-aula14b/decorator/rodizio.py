class SellerTeam:
    def __init__(self):
        # imagine que as pessoas vendedoras são lidas de um DB
        self.__people = [
          'Lucas', 'Marina', 'Felipe', 'Augusto', 'Flávio',
          'Sérgio', 'Rafaela', 'Luana',
        ]


if __name__ == '__main__':
    seller_team = SellerTeam()
    print(seller_team.people)
