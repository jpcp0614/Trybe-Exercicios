let pizza1 = "4 Queijos";
let pizza2 = "Frango com Catupiry";
let pizza3 = "Marguerita";
let pizza4 = "Palmito";
let pizza5 = "chocolate";

let pizzas = ["4 Queijos", "Frango com Catupiry", "Marguerita", "Palmito", "Chocolate"]; //array

pizzas[5] = "Peito de peru"; //adicionar na posição 5
pizzas[4] = "Goiaba com Queijo"; //substitui o item na posição 4
pizzas.push("Chocolate"); //adicionar após a última posição no array

console.log(pizzas.length); //quantos items têm no array
console.log(pizzas.sort()); //colocar em ordem alfabética/crescente
console.log(pizzas[0]); //primeira posição no

for (let index = 0; index < pizzas.length; index++) { //começa no 0(posição); condição; incrementar
  console.log(pizzas[index]);
}
