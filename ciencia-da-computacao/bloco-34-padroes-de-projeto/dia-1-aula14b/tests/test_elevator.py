from elevator_system.elevator import Elevator, ElevatorStatus
from elevator_system.motor import Motor


def test_create_elevator():
    motor = Motor()
    elevator = Elevator(motor)

    assert elevator.current_floor == 0

    assert elevator.door_is_open is False

    assert elevator._status == ElevatorStatus.STOPPED


def test_move_up():
    motor = Motor()
    elevator = Elevator(motor)
    destination_floor = 5

    elevator.move(destination_floor)

    assert elevator.door_is_open is False

    assert elevator._status == ElevatorStatus.GOING_UP

    assert elevator.current_floor == destination_floor


def test_move_down():
    motor = Motor()
    elevator = Elevator(motor)
    elevator.current_floor = 10
    destination_floor = 5

    elevator.move(destination_floor)

    assert elevator.door_is_open is False

    assert elevator._status == ElevatorStatus.GOING_DOWN

    assert elevator.current_floor == destination_floor


def test_move_same_floor():
    motor = Motor()
    elevator = Elevator(motor)
    elevator.current_floor = 5
    destination_floor = 5

    elevator.move(destination_floor)

    assert elevator.door_is_open is True

    assert elevator._status == ElevatorStatus.STOPPED

    assert elevator.current_floor == destination_floor
