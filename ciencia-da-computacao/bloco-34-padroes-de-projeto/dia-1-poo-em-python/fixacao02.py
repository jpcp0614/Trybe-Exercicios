class Home_Appliance():
    def __init__(self, color, potency, voltage, price):
        self.__color = color
        self.__potency = potency
        self.__voltage = voltage
        self.__price = price
        self.__is_on = False
        self.__current_consumption = 0

    def get_color(self):
        return self.__color

    def get_potency(self):
        return self.__potency

    def get_voltage(self):
        return self.__voltage

    def get_price(self):
        return self.__price

    def get_current_consumption(self):
        return self.__current_consumption

    def get_is_on(self):
        return self.__is_on

    def turn_on(self, speed):
        self.__speed = speed
        self.__current_consumption = (
            (self.__potency / self.__voltage) / self.__speed) * self.__speed
        self.__is_on = True

    def turn_off(self):
        self.__is_on = False
        self.__speed = 0

    def __str__(self):
        return f'''
        - Color: {self.__color}
        - Potency: {self.__potency}
        - Voltage: {self.__voltage}
        - Price: {self.__price}
        - Current Consumption: {self.__current_consumption}
        '''


class Microwave(Home_Appliance):
    def __init__(self, color, potency, voltage, price, time):
        super().__init__(color, potency, voltage, price)
        self.time = time

    def cook(self):
        if self.time:
            print(f'Cooking for {self.time} seconds')
        else:
            print('Microwave is off')


class Mixer(Home_Appliance):
    def __init__(self, color, potency, voltage, price, volume):
        super().__init__(color, potency, voltage, price)
        self.volume = volume

    def mix(self):
        if self.volume:
            print(f'Mixing {self.volume} cups')
        else:
            print('Mixer is off')


class Cooker(Home_Appliance):
    def __init__(self, color, potency, voltage, price, volume):
        super().__init__(color, potency, voltage, price)
        self.__volume = volume

    def cook(self):
        if self.__is_on:
            print(f'Cooking {self.__volume} grams')
        else:
            print('Cooker is off')

    def __str__(self):
        return f'''
        - Potency: {self.__potency}
        - Voltage: {self.__voltage}
        - Price: {self.__price}
        - Volume: {self.__volume}
        '''


microwave = Microwave('white', 1000, 127, 2000, 10)
mixer = Mixer('white', 500, 127, 2000, 10)
cooker = Cooker('white', 600, 127, 2000, 10)

microwave.cook()

microwave.turn_on(10)

print(microwave)
