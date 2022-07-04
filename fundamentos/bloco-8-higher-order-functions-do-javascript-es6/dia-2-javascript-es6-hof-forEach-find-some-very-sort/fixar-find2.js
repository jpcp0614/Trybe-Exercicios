const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (word) => word.length === 5;
  // Adicione seu código aqui:
const word5 = names.find(findNameWithFiveLetters);

console.log(word5);