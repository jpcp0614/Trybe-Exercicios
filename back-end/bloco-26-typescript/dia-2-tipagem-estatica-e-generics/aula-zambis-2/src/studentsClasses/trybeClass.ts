import { Student, Module } from '../students/student';

type StudentProjectGrade = [
  Student,
  string,
  number
];

type StudentClass = {
  name: string, // type primitivo
  students: Student[], // type composto
  module: Module | null, // module?: quando não é obrigatório
  grades: StudentProjectGrade[],
}

let studentClass: StudentClass = {
  name: 'John Wick',
  students: [],
  module: Module.Backend,
  grades: []
};

const addGrades = (studentName: string, project: string, grade: number): string | void => {
  const foundStudent = studentClass.students.find(student => student.name === studentName); // encontrar o estudante
  if (!foundStudent) {
    return 'Student not found';
  }
  studentClass.grades.push([foundStudent, project, grade]); // adicionar a nota - push retorna um número
}