"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogador {
    constructor(name) {
        this._name = name; // adiciono o name no meu atributo de classe _name
        this._yearBirth = 1990; // adiciono o _yearBirth com valor default
    }
    setName(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
    getYearBirth() {
        return this._yearBirth;
    }
}
exports.default = Jogador;
// const objJogador1: Jogador = new Jogador('John Wick');
// const objJogador2: Jogador = new Jogador('Lucas Hayne');
// console.log(objJogador1._name);
// console.log(objJogador2._name);
const objJogador = new Jogador('');
objJogador.setName('Lucas Hayne');
console.log(objJogador.getName());
console.log(objJogador.getYearBirth());
