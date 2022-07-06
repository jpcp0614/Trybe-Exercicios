from elevator_system.elevator import Elevator
import pytest


@pytest.fixture
def elevator():
    return Elevator()


def test_create_elevator(elevator):
    assert elevator.current_floor == 0
    assert elevator.door_is_open is False
    assert elevator.get_status() == 0
