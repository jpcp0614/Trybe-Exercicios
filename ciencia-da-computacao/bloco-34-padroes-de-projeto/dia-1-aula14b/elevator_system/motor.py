from enum import Enum


class Motor():
    def __init__(self, voltagem=360):
        self.running = False
        self.side = MotorSide.CLOCKWISE
        self.voltagem = voltagem

    def turn_on(self, side):
        self.side = side
        self.running = True

    def turn_off(self):
        self.running = False


class MotorSide(Enum):
    CLOCKWISE = 0
    ANTICLOCKWISE = 1
