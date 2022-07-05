# class User:

#     def __init__(self, name, street, number, district):
#         '''
#         Você nunca vai passar a rua sem passar também o número e o bairro!
#         '''
#         self.name = name
#         self.address_street = street
#         self.address_number = number
#         self.address_district = district


class Address:
    def __init__(self, street, number, district):
        self.street = street
        self.number = number
        self.district = district

    def __str__(self):
        return f'''
        Endereço completo: {self.street}, {self.number}, {self.district}
        '''


class User():
    def __init__(self, name, address: Address):
        self.name = name
        self.address = address

    def __str__(self):
        return f'''
        Nome: {self.name}
        {self.address}
        '''


address = Address('R. dos Bobos', '0', 'Sem Bairro')
user = User('João', address)
print(user)
