from enum import Enum


class Motor():
    def __init__(self):
        self.running = False
        self.side = MotorSide.CLOCKWISE


class MotorSide(Enum):
    CLOCKWISE = 0
    ANTICLOCKWISE = 1
