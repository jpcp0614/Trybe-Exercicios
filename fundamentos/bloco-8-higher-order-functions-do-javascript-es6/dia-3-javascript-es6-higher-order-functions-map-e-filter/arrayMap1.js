let listaDePessoasAprovadas = [
  'ada.lovelace@example.com',
  'marie.currie@example.com',
  'margaret.hamilton@example.com',
  'alan.turing@example.com'
];

const enviarEmail = (objetoEmail) => {
  console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`);
};

let listaDeEmails;
listaDeEmails = listaDePessoasAprovadas.map((email) => {
  return { email: email, nota: 10 };
});

listaDeEmails.forEach((objetoEmail) => enviarEmail(objetoEmail));