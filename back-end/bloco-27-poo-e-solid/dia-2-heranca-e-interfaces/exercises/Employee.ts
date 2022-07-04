import IEmployee from './IEmployee';

export default class Employee implements IEmployee {
  public registration: string;

  constructor(
    public salary: number,
    public admissionDate: Date
  ) {
    this.registration = this.generateRegistration();
    this.salary = salary;
    this.admissionDate = admissionDate;
  }

  public generateRegistration(): string {
    let numberRandom = (Math.random() * 10 ) + 1;
    let date = Date.now();
    let string = String(numberRandom * date);
    let hash = string.split('.').join('');

    return `${hash.substring(0, 8)}-${hash.substring(8, 15)}-${hash.substring(15, 17)}`;
  }
  
}