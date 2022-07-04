// TODO tudo dentro da interface é público (por padrão)
interface IUserDTO { //Data Transfer Object
  name: string;
  password: string
}

// interface CRUD {
//   push(): void;
//   pop(): void;
// }

//* podemos também usar herança (extends) numa classe já implementada (implements)
//* é possível criar uma classe com mais de uma interface (TS permite)
//* export class User implements IUserDTO, CRUD {

export class User implements IUserDTO {
  
  //* elemento estático possui formas diferentes de acesso
  //* será acessado via classe e não via objeto
  // public static ID: string;
  private static ID: string = '';

  private _name: string;
  private _password: string;
  protected _active: boolean;

  constructor() { //* não precisa implementar (não é obrigatório)
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
  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set password(password: string) {
    this._password = password;
  }

  get password() {
    return this._password;
  }

  protected set active(active: boolean) {
    this._active = active;
  }

  protected get active() {
    return this._active;
  }

  public static getGenerateHash(): string {
    const number = Math.random().toFixed();
    return this.ID.concat(`${number}H&1234%&*lIKHG`);
  }

  //* também é possível ter um método estático
  // public static getId() {
  //   return this.ID;
  // }
}

// console.log(User.getGenerateHash());

// User.ID // -> quando ID é público
// User.getId(); // -> quando ID é privado

// const objUser: IUserDTO = new User();
// objUser.name = 'John';
// console.log(objUser.name);