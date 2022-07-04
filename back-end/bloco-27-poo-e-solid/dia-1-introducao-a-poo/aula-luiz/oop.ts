class Jogador {

  private _name: string;
  private readonly _yearBirth: number; // não é possível alterar o valor do _yearBirth

  constructor(name: string) {
    this._name = name; // adiciono o name no meu atributo de classe _name
    this._yearBirth = 1990; // adiciono o _yearBirth com valor default
  }

  setName(name: string) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  getYearBirth() {
    return this._yearBirth;
  }
}

export default Jogador;

// const objJogador1: Jogador = new Jogador('John Wick');
// const objJogador2: Jogador = new Jogador('Lucas Hayne');
// console.log(objJogador1._name);
// console.log(objJogador2._name);

const objJogador: Jogador = new Jogador('');
objJogador.setName('Lucas Hayne');
console.log(objJogador.getName());
console.log(objJogador.getYearBirth());