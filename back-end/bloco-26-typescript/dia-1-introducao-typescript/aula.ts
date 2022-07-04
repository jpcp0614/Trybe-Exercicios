// const add = (numero1: number, numero2: number): number => {
//   return numero1 + numero2;
// }

// const user: {
//   firstname: string,
//   age: number,
// } = {
//   firstname: '',
//   age: 10,
// }

const hash = (): void => {
  let hashMap = new Map<number, string>([
    [1, "first"],
    [2, "second"],
    [3, "third"],
  ]);

  hashMap.forEach((element: string, id: number): void => {
    console.log(id, element);
  });
};

hash();
