abstract class Character {

  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  private _name: string;
  private _specialMove: string;

  constructor(name: string, specialMoveMelee: string) {
    super();
    this._name = name;
    this._specialMove = specialMoveMelee;
  }

  public talk(): void {
    console.log(`${this._name} attacks`);
  }
  public specialMove() {
    console.log(`${this._name} uses ${this._specialMove}`);
  }
}

class LongRangeCharacter extends Character {
  private _name: string;
  private _specialMove: string;

  constructor(name: string, specialMoveLonger: string) {
    super();
    this._name = name;
    this._specialMove = specialMoveLonger;
  }

  public talk(): void {
    console.log(`${this._name} attacks`);
  }
  public specialMove() {
    console.log(`${this._name} uses ${this._specialMove}`);
  }
}

const myFuncCharacter = (character: Character) => {
  character.talk();
  character.specialMove();
}

myFuncCharacter(new MeleeCharacter('Melee', 'Punch'));
myFuncCharacter(new LongRangeCharacter('LongRange', 'Shoot'));