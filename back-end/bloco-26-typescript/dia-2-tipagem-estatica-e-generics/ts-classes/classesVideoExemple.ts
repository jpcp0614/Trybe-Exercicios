interface Hero {
  _name: string;
  _power: string;
  speakInspirationPhrase(p: string): string;
}

class Hero { // boa prática ter o nome com letra maiúscula

  constructor(name: string, power: string) {
    this._name = name;
    this._power = power;
  }

  speakInspirationPhrase(phrase: string): string {
    return `${this._name} say: ${phrase}`
  }
}

const Hero1 = new Hero('Martin Luther King', 'Give exemple');
console.log(Hero1.speakInspirationPhrase(
  `If you can’t fly then run, if you can’t run then walk,
  if you can’t walk then crawl, but whatever you do you have to keep moving forward`));