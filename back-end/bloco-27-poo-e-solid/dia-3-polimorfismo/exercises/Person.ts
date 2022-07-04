export default abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.validateName(name);
    this.validateBirthDate(birthDate);

    this._name = name;
    this._birthDate = birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    this._birthDate = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres');
    }
  }

  private validateBirthDate(value: Date) {
    let age = new Date().getFullYear() - value.getFullYear();
    if (value > new Date()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }
    if (age > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos');
    }
  }
}