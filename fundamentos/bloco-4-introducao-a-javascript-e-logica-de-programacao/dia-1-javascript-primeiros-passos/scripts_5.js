//switch -- case

let trafficLight = "roxo";

switch (trafficLight) {
  case "vermelho":
    console.log("Pare");
    break; //se for vermelho, ele executa o console.log e pára

  case "amarelo":
    console.log("Atenção");
    break;

  case "verde":
    console.log("Siga");
    break;
  
  default:
    console.log("Valor não identificado");
}