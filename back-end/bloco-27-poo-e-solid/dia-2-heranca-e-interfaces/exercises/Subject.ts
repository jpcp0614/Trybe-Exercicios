export default class Subject {
  private _name: string;

  constructor(name: string) {
    this.validateSubject(name);
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this.validateSubject(value);
    this._name = value;
  }

  private validateSubject(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    }
  }
}