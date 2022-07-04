"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// interface CRUD {
//   push(): void;
//   pop(): void;
// }
//* podemos também usar herança (extends) numa classe já implementada (implements)
//* é possível criar uma classe com mais de uma interface (TS permite)
//* export class User implements IUserDTO, CRUD {
class User {
    constructor() {
        this._name = '';
        this._password = '';
        this._active = true;
    }
    // push(): void {
    //   throw new Error("Method not implemented.");
    // }
    // pop(): void {
    //   throw new Error("Method not implemented.");
    // }
    //* encapsulamentos de acesso
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set password(password) {
        this._password = password;
    }
    get password() {
        return this._password;
    }
    set active(active) {
        this._active = active;
    }
    get active() {
        return this._active;
    }
    static getGenerateHash() {
        const number = Math.random().toFixed();
        return this.ID.concat(`${number}H&1234%&*lIKHG`);
    }
}
exports.User = User;
//* elemento estático possui formas diferentes de acesso
//* será acessado via classe e não via objeto
// public static ID: string;
User.ID = '';
// console.log(User.getGenerateHash());
// User.ID // -> quando ID é público
// User.getId(); // -> quando ID é privado
// const objUser: IUserDTO = new User();
// objUser.name = 'John';
// console.log(objUser.name);
