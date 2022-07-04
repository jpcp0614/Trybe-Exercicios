// mudar o texto do parágrafo <p>
function changeText() {
  let textParagraph = document.getElementsByTagName('p')[1];
  textParagraph.innerText = 'Estar trabalhando e ganhando muito bem';
}
changeText();

// mudar o fundo amarelo
function backgroundYellow() {
  let changeBackgroundToGreen = document.getElementsByClassName('main-content')[0];
  changeBackgroundToGreen.style.background = 'rgb(76, 164, 109)';
}
backgroundYellow();

// mudar o fundo vermelho
function backgroundRed() {
  let changeBackgroundToWhite = document.getElementsByClassName('center-content')[0];
  changeBackgroundToWhite.style.background = 'rgb(255, 255, 255)';
}
backgroundRed();

// corrigir o texto <h1>
function correctText() {
  let correctParagraph = document.getElementsByClassName('title')[0];
  correctParagraph.innerText = 'Exercício 5.1 - JavaScript';
}
correctText();

// texto em maiúsculo <p>
function textUpperCase() {
  let paragraphUpperCase = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphUpperCase.length; i += 1) {
    paragraphUpperCase[i].innerText = paragraphUpperCase[i].innerText.toUpperCase();
  }
}
textUpperCase();

// mostra o conteúdo de <p>
function showP() {
  let paragraph = document.getElementsByTagName('p');
  for (let i = 0; i < paragraph.length; i += 1) {
  console.log(paragraph[i].innerText);
  }
}
showP();