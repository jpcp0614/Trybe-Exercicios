from enum import Enum


class ElevatorStatus(Enum):
    STOPPED = 0
    GOING_UP = 1
    GOING_DOWN = 2
    LOCKED = 3


class Elevator():
    def __init__(self):
        self.current_floor = 0
        self.door_is_open = False
        self.__status = ElevatorStatus.STOPPED

    def get_status(self):
        return self.__status
