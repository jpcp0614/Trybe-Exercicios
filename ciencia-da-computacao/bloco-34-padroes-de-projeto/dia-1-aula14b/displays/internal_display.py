from displays.interface_display import InterfaceDisplay


class InternalDisplay(InterfaceDisplay):
    def __init__(self, elevator):
        self.elevator = elevator

    def display(self):
        return str(self.elevator.current_floor)
