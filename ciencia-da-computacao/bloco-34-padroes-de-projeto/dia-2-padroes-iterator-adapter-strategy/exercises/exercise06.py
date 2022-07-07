'''
Você está trabalhando em um sistema de orçamentos que faz
cálculos de impostos e precisa ser refatorado para adicionar
novos, que no caso são o PIS (0,65%) e o COFINS (3%).
Mas durante a refatoração, você se depara com uma má
prática de código. Encontre essa má prática e a solucione
em conjunto com a refatoração.
'''

from abc import ABC, abstractmethod


class TaxInterface(ABC):
    @abstractmethod
    def calculate(cls, value):
        raise NotImplementedError


class ISS(TaxInterface):
    @classmethod
    def calculate(cls, value):
        return value * 0.1


class ICMS(TaxInterface):
    @classmethod
    def calculate(cls, value):
        return value * 0.06


class PIS(TaxInterface):
    @classmethod
    def calculate(cls, value):
        return value * 0.65


class COFINS(TaxInterface):
    @classmethod
    def calculate(cls, value):
        return value * 0.03


class TaxCalculator():
    def __init__(self, value):
        self.value = value

    def calculateTax(self, tax: TaxInterface):
        return tax.calculate(self.value)


calculate_tax = TaxCalculator(100).calculateTax(COFINS)
print(calculate_tax)

# class Budget:
#     def __init__(self, value):
#         self.value = value

#     def calculate_tax(self, tax):
#         if tax == 'ISS':
#             return self.__calculate_iss()
#         elif tax == 'ICMS':
#             return self.__calculate_icms()

#     def __calculate_iss(self):
#         return self.value * 0.1

#     def __calculate_icms(self):
#         return self.value * 0.06


# budget = Budget(1000)
# print(f"ISS: {budget.calculate_tax('ISS')}")
# print(f"ICMS: {budget.calculate_tax('ICMS')}")
