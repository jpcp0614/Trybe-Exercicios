import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._worksGrades = [];
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    this.validateEnrollment(value);
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    this.validateExamsGrades(value);
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    this.validateWorksGrades(value);
    this._worksGrades = value;
  }

  public get sumNotes(): number {
    let notesExams = this.examsGrades.reduce((acc, curr) => acc + curr, 0);
    let notesWorks = this.worksGrades.reduce((acc, curr) => acc + curr, 0);
    return notesExams + notesWorks;
  }

  public get sumAveragedNotes(): number {
    let average = this.sumNotes / (this.examsGrades.length + this.worksGrades.length)
    return Number(average.toFixed(2));
  }

  private validateEnrollment(value: string): void {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    }
  }

  private validateExamsGrades(value: number[]): void {
    if (value.length > 4) {
      throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
    }
  }

  private validateWorksGrades(value: number[]): void {
    if (value.length > 2) {
      throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
    }
  }

  private generateEnrollment(): string {
    let numberRandom = (Math.random() * 10 ) + 1;
    let date = Date.now();
    let string = String(numberRandom * date);
    let hash = string.split('.').join('');

    return `${hash.substring(0, 8)}-${hash.substring(8, 15)}-${hash.substring(15, 17)}`;
  }
}