abstract class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract move(): void;
  abstract sleep(): void;
}

class Bird extends Animal {

  public move() {
    console.log(`The ${this.name} is flying`);
  }

  public sleep() {
    console.log(`The ${this.name} is sleeping`);
  }
}

class Mammal extends Animal {

  public move() {
    console.log(`The ${this.name} is walking`);
  }

  public sleep() {
    console.log(`The ${this.name} is sleeping`);
  }
}

class Fish extends Animal {

  public move() {
    console.log(`The ${this.name} is swimming`);
  }

  public sleep() {
    console.log(`The ${this.name} is sleeping`);
  }
}

const bird = new Bird('Pássaro');
const mammal = new Mammal('Homem');
const fish = new Fish('Dourado');

const funcMove = (animal: Animal) => {
  animal.move();
}

const funcSleep = (animal: Animal) => {
  animal.sleep();
}

funcMove(bird);
funcMove(mammal);
funcMove(fish);

funcSleep(bird);
funcSleep(mammal);
funcSleep(fish);