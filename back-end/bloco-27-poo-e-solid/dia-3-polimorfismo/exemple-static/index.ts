class Employee {
  private static employeeCount: number = 0;
  public name: string;

  constructor(name: string) {
    this.name = name;
    Employee.addEmployee();
  }

  private static addEmployee(): void {
    this.employeeCount++;
  }

  public static get employees(): number {
    return this.employeeCount;
  }
}

const obj = new Employee('John Wick');
console.log(Employee.employees);