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

    def move(self, destination_floor):
        if destination_floor == self.current_floor:
            self.door_is_open = True
            self.__status = ElevatorStatus.STOPPED
            return
        self.door_is_open = False

        if destination_floor > self.current_floor:
            self.move_up(destination_floor)
        else:
            self.move_down(destination_floor)
        self.current_floor = destination_floor

    def move_up(self, destination_floor):
        self.__status = ElevatorStatus.GOING_UP
        self.current_floor = destination_floor

    def move_down(self, destination_floor):
        self.__status = ElevatorStatus.GOING_DOWN
        self.current_floor = destination_floor
