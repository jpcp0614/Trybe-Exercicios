"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../students/student");
let studentClass = {
    name: 'John Wick',
    students: [],
    module: student_1.Module.Backend,
    grades: []
};
const addGrades = (studentName, project, grade) => {
    const foundStudent = studentClass.students.find(student => student.name === studentName); // encontrar o estudante
    if (!foundStudent) {
        return 'Student not found';
    }
    studentClass.grades.push([foundStudent, project, grade]); // adicionar a nota - push retorna um número
};
