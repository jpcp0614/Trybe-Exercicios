const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 15 === 0;
  // Adiciona seu código aqui

  const divFor15 = numbers.find(findDivisibleBy3And5);


console.log(divFor15);