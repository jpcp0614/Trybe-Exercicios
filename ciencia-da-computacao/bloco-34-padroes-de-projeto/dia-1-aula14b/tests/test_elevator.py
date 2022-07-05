from elevator_system.elevator import Elevator, ElevatorStatus


def test_create_elevator():
    elevator = Elevator()

    assert elevator.current_floor == 0

    assert elevator.door_is_open is False

    assert elevator._status == ElevatorStatus.STOPPED
