"use strict";
/*
TODO Existem duas maneiras de colocar uma classe dentro de outra
* 1) Através de uma composição (private _objJogador: Jogador = new Jogador()) -> encapsulamento
* 2) Através de uma herança (extends Jogador)

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oop_1 = __importDefault(require("./oop"));
class TimeDeFutebol {
    constructor() {
        this.arrayJogadores = [];
    }
    adicionaJogador(objJogador) {
        this.arrayJogadores.push(objJogador);
    }
    verTime() {
        return this.arrayJogadores;
    }
}
const objTime = new TimeDeFutebol();
const objJogador1 = new oop_1.default('John Wick');
objTime.adicionaJogador(objJogador1);
console.log(objTime.verTime());
