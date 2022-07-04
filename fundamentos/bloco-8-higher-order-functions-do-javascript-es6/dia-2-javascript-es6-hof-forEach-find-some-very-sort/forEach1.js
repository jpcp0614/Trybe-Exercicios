let listaDeAprovados = [
  'ada.lovelace@example.com',
  'marie.curie@example.com',
  'margaret.hamilton@exemple.com',
  'alan.turing@exemple.com',
];

const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso`);
};

listaDeAprovados.forEach((item, posicao, array) => {
  enviarEmail(item);
  console.log(`Sua posição é a: ${posicao}`);
  console.log(`O total de pessoas no processo seletivo é de: ${array.length}`);
});