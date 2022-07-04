let pilotosDeF1 = document.getElementsByClassName('piloto-f1-atual');
/*
Acessar a posição [0] do array
*/

for (let i = 0; i < pilotosDeF1.length; i += 1) {
  // console.log(pilotosDeF1[i]);
  pilotosDeF1[i].innerText = "Lewis Hamilton";
}