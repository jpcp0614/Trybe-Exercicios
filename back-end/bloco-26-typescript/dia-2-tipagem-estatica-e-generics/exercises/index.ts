import { Car } from './Car';
import { Colors } from './Colors';
import { Doors } from './Doors';
import { Directions } from './Directions';

const Gol = new Car('Gol', Colors.silver, 4);

// somente o motorista
Gol.openTheDoor(Doors.front_door_left);
Gol.closeTheDoor(Doors.front_door_left);
Gol.turnOn();
Gol.deltaS(600);
Gol.turn(Directions.right);
Gol.moveOn();
Gol.deltaS(1200);
Gol.turn(Directions.right);
Gol.deltaS(400);
Gol.stop();

// com o passageiro
Gol.openTheDoor(Doors.back_door_right);
Gol.moveOn();
Gol.deltaS(300);
Gol.turn(Directions.right);
Gol.deltaS(2000);
Gol.turn(Directions.left);
Gol.deltaS(400);
Gol.turn(Directions.right);
Gol.moveOn();
Gol.deltaS(100);
Gol.stop();
Gol.openTheDoor(Doors.back_door_right);
Gol.moveOn();
