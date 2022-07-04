// Complete a seguinte função para que a mesma devolva todos os possíveis números de 4 dígitos,
// onde cada um seja menor ou igual a <maxDigit>, e a soma dos dígitos de cada número gerado seja 21.

const maxDigit = 6;

for (let i = 1000; i <= 7770; i++) {
  let sum = 0;
  let number = i;
  for (let j = 0; j < 4; j++) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  if (sum === 21) {
    console.log(i);
  }
}