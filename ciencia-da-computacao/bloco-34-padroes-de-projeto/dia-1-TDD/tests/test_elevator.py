from elevator_system.elevator import Elevator, ElevatorStatus
import pytest


@pytest.fixture
def elevator():
    return Elevator()


def test_create_elevator(elevator):
    assert elevator.current_floor == 0
    assert elevator.door_is_open is False
    assert elevator.get_status() == ElevatorStatus.STOPPED


def test_move_up(elevator):
    destination_floor = 5
    elevator.move(destination_floor)

    assert elevator.door_is_open is False
    assert elevator.get_status() == ElevatorStatus.GOING_UP
    assert elevator.current_floor == destination_floor


def test_move_down(elevator):
    elevator.current_floor = 5
    destination_floor = 1
    elevator.move(destination_floor)

    assert elevator.door_is_open is False
    assert elevator.get_status() == ElevatorStatus.GOING_DOWN
    assert elevator.current_floor == destination_floor


def test_move_same_floor(elevator):
    elevator.current_floor = 5
    destination_floor = 5
    elevator.move(destination_floor)

    assert elevator.door_is_open is True
    assert elevator.get_status() == ElevatorStatus.STOPPED
    assert elevator.current_floor == destination_floor
