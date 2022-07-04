// TODO 1) Crie um type para um objeto que represente um pássaro

type bird = {
  name: string,
  specie: string,
  gender: string,
  weight: number,
  isSing: boolean,
}

// TODO 2) Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois

type numbers = {
  x: number,
  y: number,
}

function sumNumbers(nbs: numbers): number{
  return nbs.x + nbs.y;
}

sumNumbers({ x: 1, y: 2 });

// TODO 3) Crie um type para um objeto que represente um endereço

type address = {
  street: string,
  number: number,
  city: string,
  state: string,
  country: string,
  zipCode: string
}