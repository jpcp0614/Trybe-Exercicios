// * usando o .reduce
const numbers1 = [32, 15, 3, 2, -5, 56, 10];

const getSum1 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers1 = numbers1.reduce(getSum1);
console.log(sumNumbers1); // 113


// * segundo parâmetro após a função
const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum2 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers2 = numbers2.reduce(getSum2, 10); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers2); // 113

/*
* Com 10:
* Agora o resultado mudou para 123, e o primeiro número impresso foi o 10.
* Entendeu? Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result, ou seja, no acumulador.
* Ele é o valor inicial do reduce. Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.
*/