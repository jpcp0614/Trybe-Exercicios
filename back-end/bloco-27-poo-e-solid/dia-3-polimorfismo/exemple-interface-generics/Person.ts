export interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

export class PhysicalPerson implements Person {
  private static _lastId: number = 0;
  private _name: string;
  private _id: number;
  private _cpf: string;

  constructor(name: string, cpf: string) {
    this._name = name;
    this._cpf = cpf;
    this._id = PhysicalPerson.newId();
  }

  private static newId(): number {
    return this._lastId++;
  }

  public get name(): string { return this._name; }
  public get id(): number { return this._id; }
  public get cpf(): string { return this._cpf; }
  public showIdentification(): void {
    console.log(`PhysicalPerson: ${this._name} (${this._cpf})`);
  }
}

export class LegalPerson implements Person {
  private static _lastId: number = 0;
  private _name: string;
  private _id: number;
  private _cnpj: string;

  constructor(name: string, cnpj: string) {
    this._name = name;
    this._cnpj = cnpj;
    this._id = LegalPerson.newId();
  }

  private static newId(): number {
    return this._lastId++;
  }

  public get name(): string { return this._name; }
  public get id(): number { return this._id; }
  public get cnpj(): string { return this._cnpj; }
  public showIdentification(): void {
    console.log(`PhysicalPerson: ${this._name} (${this._cnpj})`);
  }
}