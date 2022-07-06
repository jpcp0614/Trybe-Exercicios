import json
from displays.interface_display import InterfaceDisplay


class DisplayJson(InterfaceDisplay):
    def __init__(self, elevator):
        self.elevator = elevator

    def display(self):
        return json.dumps(
            {
                "floor": self.elevator.current_floor,
                "side": str(self.elevator._status),
            }
        )
