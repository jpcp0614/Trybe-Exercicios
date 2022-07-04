// TODO 1) Crie uma interface cujo objeto represente um Automóvel

interface Auto {
  model: string;
  maker: string;
  year: number;
  color: string;
  price: number;
  hasFourDoors: boolean;
  speedUp: () => void;
  speedDown: () => void;
  stop: () => void;
}

// TODO 2) Crie uma interface cujo objeto represente um Felino

interface Feline {
  name: string;
  age: number;
  color: string;
  weight: number;
  hasTail: boolean;
  walk: () => void;
  run: () => void;
  jump: () => void;
}

// TODO 3) Crie uma interface cujo objeto represente uma Aeronave

interface Aircraft {
  model: string;
  maker: string;
  year: number;
  color: string;
  price: number;
  hasWings: boolean;
  speedUp: () => void;
  speedDown: () => void;
  stop: () => void;
}