class Animal {
  public _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public move(): void {
    console.log(`${this._name} está se movendo`);
  }
}

class Bird extends Animal {
  public move() {
    console.log(`${this._name} está voando`);
  }
}

class Mammal extends Animal {
  public move() {
    console.log(`${this._name} está andando`);
  }
}

const animal = new Animal('Cachorro');
const bird = new Bird('Pássaro');
const mammal = new Mammal('Homem');

const myFunc = (animal: Animal) => {
  animal.move();
}

myFunc(animal);
myFunc(bird);
myFunc(mammal);