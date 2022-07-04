class SuperClass {

  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello(): void {
    console.log('Hello world!');
  }
}

class SubClass extends SuperClass {

  public sayHello2() {
    this.sayHello();
  }
}

function myFunc(obj: SubClass): void {
  obj.sayHello2();
}

const sayHelloSuperClass = new SuperClass();
const sayHelloSubClass = new SubClass();

// myFunc(sayHelloSuperClass);
myFunc(sayHelloSubClass);