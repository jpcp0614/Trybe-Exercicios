import { createUnparsedSourceFile } from "typescript";

class SuperClass {

  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Hello world!');
  }
}

class SubClass extends SuperClass {

  constructor() {
    super();
    this.isSuper = false;
  }

}

function myFunc(obj: SubClass): void {
  obj.sayHello();
  console.log(obj.isSuper ? "Super!" : "Sub!");
}

const sayHelloSuperClass = new SuperClass();
const sayHelloSubClass = new SubClass();

myFunc(sayHelloSuperClass);
myFunc(sayHelloSubClass);
