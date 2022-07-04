const firstLi = document.getElementById('firstli');
const secondLi = document.getElementById('secondli');
const thirdLi = document.getElementById('thirdli');
const input = document.getElementById('input');
const myPage = document.getElementById('my-spotrybefy');


// 1.    Copie esse arquivo e edite apenas ele;

// 2.    Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1.  Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addChangeTech (event) {
  const elementTech = document.querySelector(".tech");
  elementTech.classList.remove("tech"); // retorna o nome da classe do elemento, como DOMTokenList objeto (adicionar, remover e alternar classe CSS)
  elementTech.classList.add("tech");
  input.value = ""; // retorna o valor do atributo value de um campo de texto
}

firstLi.addEventListener("click", addChangeTech);
secondLi.addEventListener("click", addChangeTech);
thirdLi.addEventListener("click", addChangeTech);


// 3.    Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener("input", function(event) {
  const elementTech = document.querySelector('.tech');
  elementTech.innerText = event.target.value; // Uma referência ao objeto que enviou o evento
});


// 4.    Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1.  Que tal redirecionar para seu portifólio?
myPage.addEventListener("dblclick", function() {
  window.location.replace("https://www.linkedin.com/in/jpcp0614/");
});


// 5.    Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myPage.addEventListener("mouseover", function(event) {
  event.target.style.color = "yellow";
});

myPage.addEventListener("mouseout", function(event) {
  event.target.style.color = "unset";
});


// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.