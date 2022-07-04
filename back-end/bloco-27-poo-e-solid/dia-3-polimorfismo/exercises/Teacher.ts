import Person from './Person';
import IEnrollable from './Interface';
import Subject from './Subject';

export default class Teacher extends Person implements IEnrollable {
  private _subject: Subject;
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._enrollment = this.generateEnrollment();
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(value: Subject) {
    this.validateSubject(value.name);
    this._subject = value;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    this.validateSalary(value);
    this._salary = value;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(value: Date) {
    this.validateAdmissionDate(value);
    this._admissionDate = value;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    this._enrollment = value;
  }

  private validateSubject(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    }
  }

  private validateSalary(value: number): void {
    if (value < 0) {
      throw new Error('O salário não pode ser negativo');
    }
  }

  private validateAdmissionDate(value: Date) {
    if (value > new Date()) {
      throw new Error('A data de admissão não pode ser no futuro');
    }
  }

  public generateEnrollment(): string {
    let numberRandom = (Math.random() * 10 ) + 1;
    let date = Date.now();
    let string = String(numberRandom * date);
    let hash = string.split('.').join('');

    return `${hash.substring(0, 8)}-${hash.substring(8, 15)}-${hash.substring(15, 17)}`;
  }

}