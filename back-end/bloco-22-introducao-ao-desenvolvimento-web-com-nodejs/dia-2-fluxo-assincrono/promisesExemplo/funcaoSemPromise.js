function calculateDivision(num1, num2) {
  if (num2 === 0) throw new Error ('Não pode ser feito uma divisão por zero')

  const result = num1 / num2;

  return result;

}

try {
  const result = calculateDivision(5, 0);
  console.log('resultado: %s', result);
} catch (e) {
  console.log('erro: %s', e.message)
}