import time
from elevator_system.motor import Motor, MotorSide


class MotorizedEquipment:
    def __init__(self, motor=Motor):
        self.motor = motor

    # sentido horário
    def forward(self, seconds):
        self.motor.turn_on(MotorSide.CLOCKWISE)
        time.sleep(seconds)
        self.motor.turn_off()

    # sentido anti-horário
    def backward(self, seconds):
        self.motor.turn_on(MotorSide.ANTICLOCKWISE)
        time.sleep(seconds)
        self.motor.turn_off()
