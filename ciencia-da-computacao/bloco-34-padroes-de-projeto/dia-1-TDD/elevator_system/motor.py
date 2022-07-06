from enum import Enum


class MotorSide(Enum):
    STOPPED = 0
    LEFT = 1
    RIGHT = 2


class Motor():
    def __init__(self, voltagem=360):
        self.running = False
        self.side = MotorSide.STOPPED
        self.voltagem = voltagem

    def turn_on(self, side):
        self.running = True
        self.side = side

    def turn_off(self):
        self.running = False
        self.side = MotorSide.STOPPED
