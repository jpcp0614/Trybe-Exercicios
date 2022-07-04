// TODO 1) Crie uma classe Car cuja o objeto representará um carro
import { Colors } from './Colors';
import { Directions } from './Directions';
import { Doors } from './Doors';

export class Car {
  _brand: string;
  _color: Colors;
  _doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk = (): void => console.log('Bi bi');

  openTheDoor = (door: Doors): void => {
    console.log(`Abre a ${Doors[door]}`);
  };
  closeTheDoor = (door: Doors): void => {
    console.log(`Fecha a ${Doors[door]}`)
  };

  turnOn = (): void => console.log('Liga o carro');
  turnOff = (): void => console.log('Desliga o carro');

  speedUp = (): void => console.log('Acelera o carro');
  speedDown = (): void => console.log('Desacelera o carro');

  stop = (): void => console.log('Pare o carro');
  turn = (direction: Directions): void => console.log(`Vira o carro para a ${direction}`)

  deltaS = (ds: number): void => console.log(`Em ${ds}m`);

  moveOn = (): void => console.log('Siga em frente');
}