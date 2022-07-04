// function getArray(items : any[]) : any[] {
//   return new Array().concat(items);
// }

// let numberArray = getArray([5, 10, 15, 20]);
// let stringArray = getArray(["Cats", "Dogs", "Birds"]);
// numberArray.push(25);
// stringArray.push("Rabbits");
// numberArray.push("isto não é um número");
// stringArray.push(30);
// console.log(numberArray);
// // Saída:  [5, 10, 15, 20, 25, "isto não é um número"]
// console.log(stringArray);
// // Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]


// TODO Para garantir que o TypeScript verifique e garanta que os valores sejam de um determinado tipo:

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação


// TODO Outra forma de uso comum para generics é com interfaces e classes:

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber = processor(100, "Olá");
// let returnString = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".