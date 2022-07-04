function calculateDivision(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode ser feito uma divisão por zero'));

    const division = num1 / num2;

    resolve(division);
  });

  return promise;
}

calculateDivision(2, 0)
  .then((result) => console.log(result))
  .catch((err) => console.log('error: %s', err.message))