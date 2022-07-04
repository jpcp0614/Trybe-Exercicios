import { User } from "./user";

export class Employee extends User {

  constructor() {
    //* o super() vai chamar o construtor do User, inicializando o name e o password
    super();
  }

  public getWelcome(): string {
    return `Welcome, ${super.name}!`; //* super faz com que eu tenha acesso ao name da outra classe
  }

  public getActive(): boolean {
    return super.active;
  }
}

const obj: Employee = new Employee();
obj.name = 'John Doe';
console.log(obj.getWelcome());

console.log(Employee.getGenerateHash()); //* acessar um método estático da outra classe

console.log(obj.getActive()); //* consigo 'ver' o active da outra classe