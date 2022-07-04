// TODO Fixar

interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {

  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    let sum = this.myNumber + myParam;
    return `Soma: ${this.myNumber} + ${myParam} = ${sum}`;
  }
}

const objMyFunc = new MyClass(10);
console.log(objMyFunc.myFunc(20));

// interface Animal {
//   name: string;
//   getAge(): number | void;
//   getBirthDate(): Date;
// }

// class Bird implements Animal {
//   private _birthDate;

//   constructor(public name: string, birthDate: Date) {
//     this._birthDate = birthDate;
//   }

//   public getAge() {
//     if (this._birthDate > new Date) {
//       return console.log("Birth date can't be in the future");
//     } else {
//       const age = new Date().getFullYear() - this._birthDate.getFullYear();
//       return console.log(age);
//     }
//   }

//   public getBirthDate() {
//     return this._birthDate;
//   }

//   //* A classe deve possuir todos os atributos e
//   //* métodos definidos na interface, mas não necessariamente se limitar a eles
//   public fly() {
//     console.log(`${this.name} is flying`);
//   }
// }

// const data = new Date();
// data.setFullYear(2021);

// const bird = new Bird('Parrot', data);
// bird.getAge();

// bird.fly();