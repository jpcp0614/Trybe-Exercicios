class Calculator:
    def soma(self, x, y):
        return x + y


class Language():
    BR = {
      'um': 1, 'dois': 2, 'tres': 3, 'quatro': 4, 'cinco': 5,
      'seis': 6, 'sete': 7, 'oito': 8, 'nove': 9, 'zero': 0,
    }

    EN = {
      'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
      'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'zero': 0,
    }

    @classmethod
    def check(cls, language, number):
        if language == 'en':
            return cls.EN.get(number)
        elif language == 'br':
            return cls.BR.get(number)
        else:
            raise ValueError('Language not supported')


class DecoratedCalculator:
    def __init__(self, calculator: Calculator, language):
        self.calculator = calculator
        self.language = language

    def convert_number(self, number):
        if not isinstance(number, str):
            return number
        return Language.check(self.language, number)

    def soma(self, x, y):
        x = self.convert_number(x)
        y = self.convert_number(y)
        return self.calculator.soma(x, y)


calculadora = Calculator()
# print(calculadora.soma(1, 2))

calculadoraDecorada = DecoratedCalculator(calculadora, 'en')
print(calculadoraDecorada.soma('one', 'two'))

calculadoraDecorada = DecoratedCalculator(calculadora, 'br')
print(calculadoraDecorada.soma('um', 'dois'))
