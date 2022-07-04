import { StudentModel, Module, IStudentModel } from './students/student';
import express, { Express, Request, Response, NextFunction } from 'express';
import connection from './connection';

const app: Express = express();

app.get('/', async (_req: Request, res: Response, _next: NextFunction) => {

  const studentModel: IStudentModel = new StudentModel(connection);
  const students = await studentModel.getStudents();

  return res.status(200).json(students);
})

app.post('/', async (req: Request, res: Response, _next: NextFunction) => {
  const { name, age, module } = req.body;
  const studentModel: IStudentModel = new StudentModel(connection);
  
  await studentModel.addStudent({
    name,
    age,
    module,
  });

  return res.status(201).json({ message: 'Successfully created' })
})


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

