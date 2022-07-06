class Elevator():
    def __init__(self):
        self.current_floor = 0
        self.door_is_open = False
        self.__status = 0

    def get_status(self):
        return self.__status
