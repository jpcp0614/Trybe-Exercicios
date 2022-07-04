/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
  - INSS (Instituto Nacional do Seguro Social)
      - Salário bruto até R$ 1.556,94: alíquota de 8%
      - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
      - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
      - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  - IR (Imposto de Renda)
      - Até R$ 1.903,98: isento de imposto de renda
      - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
      - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
      - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
      - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/


let salarioBruto = 2514.72;

//aliquota INSS
let aliquotaInss8 = 0.08; //8%
let aliquotaInss9 = 0.09; //9%
let aliquotaInss11 = 0.11; //11%
let aliquotaInssMax = 570.88;

//aliquota IR
let aliquotaIr75 = 0.075 //7.5%
let aliquotaIr15 = 0.15; //15%
let aliquotaIr225 = 0.225; //22.5%
let aliquotaIr275 = 0.275; //27.5%

//parcela IR
let parcelaIr75 = 142.8;
let parcelaIr15 = 354.8;
let parcelaIr225 = 636.13;
let parcelaIr275 = 869.36;

//SalarioDeduzidoInss
if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
  salarioDeduzidoInss = salarioBruto*(1 - aliquotaInss8);

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioDeduzidoInss = salarioBruto*(1 - aliquotaInss9);

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioDeduzidoInss = salarioBruto*(1 - aliquotaInss11);

} else if (salarioBruto > 5189.82) {
  salarioDeduzidoInss = salarioBruto - aliquotaInssMax;
  
}

//salarioLiquido
if (salarioDeduzidoInss <= 1903.98) {
  console.log("O salário líquido é R$ " + salarioDeduzidoInss.toFixed(2));

} else if (salarioDeduzidoInss >= 1903.99 && salarioDeduzidoInss <= 2826.65) {
  salarioLiquido = salarioDeduzidoInss*(1 - aliquotaIr75) + parcelaIr75;
  console.log("O salário líquido é R$ " + salarioLiquido.toFixed(2));

} else if (salarioDeduzidoInss >= 2826.66 && salarioDeduzidoInss <= 3751.05) {
  salarioLiquido = salarioDeduzidoInss*(1 - aliquotaIr15) + parcelaIr15;
  console.log("O salário líquido é R$ " + salarioLiquido.toFixed(2));

} else if (salarioDeduzidoInss >= 3751.06 && salarioDeduzidoInss <= 4664.68) {
  salarioLiquido = salarioDeduzidoInss*(1 - aliquotaIr225) + parcelaIr225;
  console.log("O salário líquido é R$ " + salarioLiquido.toFixed(2));

} else if (salarioDeduzidoInss > 4664.68) {
  salarioLiquido = salarioDeduzidoInss*(1 - aliquotaIr275) + parcelaIr275;
  console.log("O salário líquido é R$ " + salarioLiquido.toFixed(2));

} else {
  console.log("error: não é um valor de salário válido")
}