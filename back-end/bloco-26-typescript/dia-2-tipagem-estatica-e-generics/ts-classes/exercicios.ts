// TODO 1) Crie uma classe cujo objeto represente um Cachorro

interface Dog {
  _name: string;
  _breed: string;
  _isQuadruped: boolean;
}

class Dog {
  // _name: string;
  // _breed: string;
  // _isQuadruped: boolean;

  constructor(name: string, breed: string, isQuadruped: boolean) {
    this._name = name;
    this._breed = breed;
    this._isQuadruped = isQuadruped;
  }
}

// TODO 2) Crie uma classe cujo objeto represente uma Casa
interface House {
  _address: string;
  _numberOfRooms: number;
  _hasGarage: boolean;
}

class House {
  // _address: string;
  // _numberOfRooms: number;
  // _hasGarage: boolean;

  constructor(address: string, numberOfRooms: number, hasGarage: boolean) {
    this._address = address;
    this._numberOfRooms = numberOfRooms;
    this._hasGarage = hasGarage;
  }
}

// TODO 3) Crie uma classe cujo objeto represente um Voo
interface Flight {
  _origin: string;
  _destination: string;
  _departureTime: Date;
  _arrivalTime: Date;
  _isBoeing: boolean;
}

class Flight {

  constructor(origin: string, destination: string, departureTime: Date, arrivalTime: Date, isBoeing: boolean) {
    this._origin = origin;
    this._destination = destination;
    this._departureTime = departureTime;
    this._arrivalTime = arrivalTime;
    this._isBoeing = isBoeing;
  }

}