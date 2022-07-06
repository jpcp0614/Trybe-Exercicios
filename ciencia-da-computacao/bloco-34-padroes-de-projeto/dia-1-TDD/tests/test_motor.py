from elevator_system.motor import Motor, MotorSide
import pytest


@pytest.fixture
def motor():
    return Motor()


def test_create_motor(motor):
    assert motor.running is False
    assert motor.side == MotorSide.STOPPED
    assert motor.voltagem == 360


def test_turn_on_left(motor):
    motor.turn_on(MotorSide.LEFT)

    assert motor.running is True
    assert motor.side == MotorSide.LEFT


def test_turn_on_right(motor):
    motor.turn_on(MotorSide.RIGHT)

    assert motor.running is True
    assert motor.side == MotorSide.RIGHT


def test_turn_off_left(motor):
    motor.turn_on(MotorSide.LEFT)
    motor.turn_off()

    assert motor.running is False
    assert motor.side == MotorSide.STOPPED


def test_turn_off_right(motor):
    motor.turn_on(MotorSide.RIGHT)
    motor.turn_off()

    assert motor.running is False
    assert motor.side == MotorSide.STOPPED
