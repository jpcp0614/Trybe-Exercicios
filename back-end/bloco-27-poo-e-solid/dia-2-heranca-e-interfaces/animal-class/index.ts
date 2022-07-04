class Animal {
  constructor(public name: string, private birthDate: Date) {}

  public getAge(): void {
    const today = new Date();

    if (this.birthDate > new Date()) {
      console.log("Birth date can't be in the future");
    } else {
      const age = today.getFullYear() - this.birthDate.getFullYear();

      return console.log(`The ${this.name} is ${age} years old`);
    }

  }
}

class Mammal extends Animal {
  public walk(): void {
    console.log(`${this.name} is walking`);
  }
}

class Bird extends Animal {
  public fly(): void {
    console.log(`${this.name} is flying`);
  }
}


const cat = new Mammal('Cat', new Date(2019, 2, 30));
const bird = new Bird('Parrot', new Date(2018, 5, 15));

const myFunc = (animal: Animal) => {
  animal.getAge();
}

myFunc(cat);
myFunc(bird);