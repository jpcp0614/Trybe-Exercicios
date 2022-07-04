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

  public funcSubClass(obj: SuperClass): void {
    obj.sayHello();
  }
}

const sayHelloSuperClass = new SuperClass();
const sayHelloSubClass = new SubClass();

sayHelloSuperClass.sayHello();
sayHelloSubClass.sayHello();