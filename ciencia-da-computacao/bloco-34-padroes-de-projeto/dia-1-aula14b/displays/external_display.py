from .interface_display import InterfaceDisplay
from elevator_system.elevator import ElevatorStatus


class ExternalDisplay(InterfaceDisplay):
    def __init__(self, elevator):
        self.elevator = elevator

    def display(self):
        side_icon = ""

        if self.elevator._status == ElevatorStatus.GOING_UP:
            side_icon = "⬆"

        if self.elevator._status == ElevatorStatus.GOING_DOWN:
            side_icon = "⬇"

        return f"{side_icon} {self.elevator.current_floor}"
