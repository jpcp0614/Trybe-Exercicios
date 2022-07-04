// import Person from './Person';
import Student from './Student';
import Employee from './Employee';
import Subject from './Subject';
import Teacher from './Teacher';

//* Não dá para instanciar mais a classe Person
// const person1 = new Person('John', new Date('1980/6/15'));
// console.log(person1, '\n');

const matricula = new Student('John', new Date('1980/6/15'));
console.log(matricula, '\n');

const student1 = new Student('Paul', new Date(2015, 5, 10));
student1.examsGrades = [9, 8, 7];
console.log(student1, '\n')

const student2 = new Student('Kennedy', new Date(2012, 7, 2));
student2.worksGrades = [9, 5];
console.log(student2, '\n');

const student3 = new Student('Smith', new Date(2017, 8, 14));
student3.examsGrades = [9, 8, 7];
student3.worksGrades = [9, 5];
console.log(student3);
console.log(`Soma das notas de ${student3.name}: `, student3.sumNotes, '\n');

const student4 = new Student('Jack', new Date(2021, 10, 9));
student4.examsGrades = [5, 6, 7, 10];
student4.worksGrades = [9, 10];
console.log(student4);
console.log(`Soma das notas de ${student4.name}: `, student4.sumNotes);
console.log(`Média das notas de ${student4.name}: `, student4.sumAveragedNotes, '\n');

const employee = new Employee(5000, new Date(2019, 1, 1));
console.log(employee);
console.log(`Matrícula do funcionário: ${employee.registration}`, '\n');

const subject = new Subject('Matemática');
console.log(`Nome da matéria: ${subject.name}`, '\n');

const teacher = new Teacher('John Wick', new Date(2010, 5, 21), 2500, subject);
console.log(teacher);