const readline = require('readline-sync');

const calcArea = () => {
  const side = readline.questionInt('Enter an integer (square side): ')
  const areaCalculus = Math.pow(side, 2)
  console.log(area);

  if (side < 0) throw Error('Invalid value')

  return areaCalculus;
}
calcArea();

module.exports = { calcArea };