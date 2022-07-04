/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os
movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o
nome de uma peça com letras maiúsculas quanto com letras minúsculas,
sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string
ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)*/


let pecaXadrez = "CavaLOs".toLowerCase();

switch(pecaXadrez) {
  case "rei":
    console.log("rei -> horizontal, vertical e diagonal - somente uma casa de cada vez");
    break;

  case "rainha":
    console.log("rainha -> horizontal, vertical e diagonais - não pode pular outras peças");
    break;

  case "bispo":
    console.log("bispo -> diagonal - não pode pular outras peças");
    break;

  case "cavalo":
    console.log("cavalo -> L - duas casas em sentido horizontal e mais uma na vertical ou vice-versa - pode pular outras peças");
    break;

  case "torre":
    console.log("torre -> vertical ou horizontal - não pode pular outras peças");
    break;

  case "peão":
    console.log("peão -> uma casa para frente - avança duas casas no seu primeiro movimento do jogo");
    break;

  default:
    console.log("error");
}
