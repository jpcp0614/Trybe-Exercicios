class Animal {
  public _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public move(): void {
    console.log(`${this._name} está se movendo`);
  }

  public sleep(): void {
    console.log(`${this._name} está dormindo`);
  }
}

class Bird extends Animal {
  public move() {
    super.move();
    console.log(`${this._name} está voando`);
    super.sleep();
  }
}

class Mammal extends Animal {
  public move() {
    super.move();
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