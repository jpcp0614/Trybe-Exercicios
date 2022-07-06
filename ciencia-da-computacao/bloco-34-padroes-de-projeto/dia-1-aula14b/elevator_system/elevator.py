from enum import Enum
from elevator_system.motorized_equipment import MotorizedEquipment


class Elevator(MotorizedEquipment):
    def __init__(self, motor):
        super().__init__(motor)

        self.current_floor = 0
        self.door_is_open = False
        self._status = ElevatorStatus.STOPPED

    def move(self, destination_floor):
        if destination_floor == self.current_floor:
            self.door_is_open = True
            self._status = ElevatorStatus.STOPPED
            return
        self.door_is_open = False

        if destination_floor > self.current_floor:
            self.move_up(destination_floor)
        else:
            self.move_down(destination_floor)
        self.current_floor = destination_floor

    def move_up(self, destination_floor):
        self._status = ElevatorStatus.GOING_UP
        self.current_floor = destination_floor
        self.forward(3)

    def move_down(self, destination_floor):
        self._status = ElevatorStatus.GOING_DOWN
        self.current_floor = destination_floor
        self.backward(3)


class ElevatorStatus(Enum):
    STOPPED = 0
    GOING_UP = 1
    GOING_DOWN = 2
    LOCKED = 3
