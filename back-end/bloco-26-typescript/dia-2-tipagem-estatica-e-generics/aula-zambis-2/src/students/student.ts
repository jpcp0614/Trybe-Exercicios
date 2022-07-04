import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

export enum Module {
  Fundamentos = 'Fund',
  Frontend = 'Front',
  Backend = 'Back',
  CS = 'CS',
}

export type Student = {
  name: string,
  age: number,
  module: Module,
}

// const exampleStudent = {
//   name: 'John Wick',
//   age: 42,
//   module: Module.Backend,
// }

export interface IStudentModel {
  _connection: Pool;
  addStudent: (student: Student) => Promise<void>;
  getStudents: () => Promise<Student[]>;
}

export class StudentModel implements IStudentModel {
  _connection: Pool; // o underscore é uma convenção, para não ser alterada fora da minha classe
  
  constructor(connection: Pool) {
    this._connection = connection;
  }

  addStudent = async ({ name, age, module }: Student) => {
    const QUERY = 'INSERT INTO students (name, age, module) VALUES (?, ?, ?);';
    // const { name, age, module } = student;
    await this._connection.execute<ResultSetHeader>(QUERY, [name, age, module]);
  };
  
  getStudents = async (): Promise<Student[]> => {
    const QUERY = 'SELECT * FROM students;';
    const [result] = await this._connection.execute<RowDataPacket[]>(QUERY);

    return result as Student[];
  };
}

// é preciso instanciar a class (criar a partir do StudentModel, um nono estudante)
// const newStudent = new StudentModel([]);


// export const printStudent = (student: string) => {
//   if (typeof student === 'string') {
//   console.log(student.toUpperCase());
//   } else {
//     console.log(student);
//   }
// }

// export const sayHello = (students: string[] | string) => {
//   if (Array.isArray(students)) {
//     students.forEach((student) => console.log(`Hello ${student}`)) // se students for um array
//   } else {
//     console.log(`Hello ${students}`); // quando não for um array
//   }
// }
