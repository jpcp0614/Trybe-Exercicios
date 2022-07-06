from elevator_system.motor import Motor, MotorSide


def test_create_motor():
    motor = Motor()

    assert motor.running is False
    assert motor.side == MotorSide.CLOCKWISE
    assert motor.voltagem == 360
