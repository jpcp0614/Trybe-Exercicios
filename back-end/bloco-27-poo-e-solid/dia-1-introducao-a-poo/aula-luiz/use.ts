/*
TODO Existem duas maneiras de colocar uma classe dentro de outra
* 1) Através de uma composição (private _objJogador: Jogador = new Jogador()) -> encapsulamento
* 2) Através de uma herança (extends Jogador)

*/

import Jogador from './oop';

class TimeDeFutebol {

  private arrayJogadores: Jogador[];

  constructor() {
    this.arrayJogadores = [];
  }

  adicionaJogador(objJogador: Jogador) {
    this.arrayJogadores.push(objJogador);
  }

  verTime() {
    return this.arrayJogadores;
  }
}

const objTime: TimeDeFutebol = new TimeDeFutebol();
const objJogador1: Jogador = new Jogador('John Wick');
objTime.adicionaJogador(objJogador1);

console.log(objTime.verTime());
