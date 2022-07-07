class Calculator:
    def soma(self, x, y):
        return x + y


class DecoratedCalculatorBR:
    def __init__(self, calculator: Calculator):
        self.calculator = calculator

    def convert_number(self, number):
        if not isinstance(number, str):
            return number

        return {
          'um': 1, 'dois': 2, 'tres': 3, 'quatro': 4, 'cinco': 5,
          'seis': 6, 'sete': 7, 'oito': 8, 'nove': 9, 'zero': 0,
        }.get(number)

    def soma(self, x, y):
        x = self.convert_number(x)
        y = self.convert_number(y)
        return self.calculator.soma(x, y)


class DecoratedCalculatorEN:
    def __init__(self, calculator: Calculator):
        self.calculator = calculator

    def convert_number(self, number):
        if not isinstance(number, str):
            return number

        return {
          'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
          'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'zero': 0,
        }.get(number)

    def soma(self, x, y):
        x = self.convert_number(x)
        y = self.convert_number(y)
        return self.calculator.soma(x, y)


calculadora = Calculator()
print(calculadora.soma(1, 2))

calculadoraDecoradaBR = DecoratedCalculatorBR(calculadora)
print(calculadoraDecoradaBR.soma('um', 'dois'))

calculadoraDecoradaEN = DecoratedCalculatorEN(calculadora)
print(calculadoraDecoradaEN.soma('one', 'two'))
