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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./students/student");
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./connection"));
const app = (0, express_1.default)();
app.get('/', (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const studentModel = new student_1.StudentModel(connection_1.default);
    const students = yield studentModel.getStudents();
    return res.status(200).json(students);
}));
app.post('/', (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, module } = req.body;
    const studentModel = new student_1.StudentModel(connection_1.default);
    yield studentModel.addStudent({
        name,
        age,
        module,
    });
    return res.status(201).json({ message: 'Successfully created' });
}));
app.listen(3000, () => console.log('Porta 3000'));
// import * as functionsStudents from './students/student';
// function main(): void { // void não existe em JS
//   addStudent({
//     name: 'John Wick',
//     age: 42,
//     module: Module.Backend,
//   })
//   const students = getStudents();
//   console.log('\nStudents:\n', students);
//   // console.log(Module[students[0].module]);
//   // console.log(Object.values(Module)[2]);
//   // console.log(Module[2]);
//   // sayHello(students);
// }
// main();
