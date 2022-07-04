"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = exports.Module = void 0;
var Module;
(function (Module) {
    Module["Fundamentos"] = "Fund";
    Module["Frontend"] = "Front";
    Module["Backend"] = "Back";
    Module["CS"] = "CS";
})(Module = exports.Module || (exports.Module = {}));
class StudentModel {
    constructor(connection) {
        this.addStudent = ({ name, age, module }) => __awaiter(this, void 0, void 0, function* () {
            const QUERY = 'INSERT INTO students (name, age, module) VALUES (?, ?, ?);';
            // const { name, age, module } = student;
            yield this._connection.execute(QUERY, [name, age, module]);
        });
        this.getStudents = () => __awaiter(this, void 0, void 0, function* () {
            const QUERY = 'SELECT * FROM students;';
            const [result] = yield this._connection.execute(QUERY);
            return result;
        });
        this._connection = connection;
    }
}
exports.StudentModel = StudentModel;
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
