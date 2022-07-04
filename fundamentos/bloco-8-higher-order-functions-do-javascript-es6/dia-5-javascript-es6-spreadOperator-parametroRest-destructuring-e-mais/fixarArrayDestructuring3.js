/*
* array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir.
* Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
*/
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares
// ref. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// virgulas: ignorar valores

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima