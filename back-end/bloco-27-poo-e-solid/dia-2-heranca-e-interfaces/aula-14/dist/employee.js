"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const user_1 = require("./user");
class Employee extends user_1.User {
    constructor() {
        //* o super() vai chamar o construtor do User, inicializando o name e o password
        super();
    }
    getWelcome() {
        return `Welcome, ${super.name}!`; //* super faz com que eu tenha acesso ao name da outra classe
    }
    getActive() {
        return super._active;
    }
}
exports.Employee = Employee;
const obj = new Employee();
obj.name = 'John Doe';
console.log(obj.getWelcome());
console.log(Employee.getGenerateHash()); //* acessar um método estático da outra classe
console.log(obj.getActive()); //* consigo 'ver' o active da outra classe
