class Student {
  private _enrollment: string;
  private _name: string;
  private _testGrades: number[];
  private _workGrades: number [];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._testGrades = [];
    this._workGrades = [];
  }

  public setEnrollment(enrollment: string): void {
    this._enrollment = enrollment;
  }

  public getEnrollment():string {
    return this._enrollment;
  }

  public setName(name: string): void {
    if (name.length < 3) {
      throw new Error('Nome precisa ter mais de 3 caracteres');
    }
    this._name = name;
  }

  public getName():string {
    return this._name;
  }

  public setTestGrades(testGrades: number[]): void {
    if (testGrades.length !== 4) {
      throw new Error('Você deve informar 4 notas de prova');
    }
    this._testGrades = testGrades;
  }

  public getTestGrades():number[] {
    return this._testGrades;
  }

  public setWorkGrades(workGrades: number[]): void {
    if (workGrades.length !== 2) {
      throw new Error('Você deve informar 2 notas de trabalho');
    }
    this._workGrades = workGrades;
  }

  public getWorkGrades():number[] {
    return this._workGrades;
  }

  public sumGrades(): number {
    return this._testGrades.reduce((a, b) => a + b, 0) + this._workGrades.reduce((a, b) => a + b, 0);
  }

  public averageGrade(): number {
    const test = this._testGrades.length;
    const work = this._workGrades.length;

    return Number((this.sumGrades() / (test + work)).toFixed(2));
  }
}

const objStudent = new Student('20220331', 'John Paul');
objStudent.setTestGrades([6, 10, 7.4, 7]);
objStudent.setWorkGrades([8, 9]);

console.log(objStudent);
console.log(objStudent.sumGrades());
console.log(objStudent.averageGrade());