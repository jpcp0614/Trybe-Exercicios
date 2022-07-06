from elevator_system.motorized_equipment import MotorizedEquipment
from elevator_system.motor import Motor


def test_create_equipment():
    motorized_equipment = MotorizedEquipment(Motor())
    assert type(motorized_equipment.motor) == Motor
