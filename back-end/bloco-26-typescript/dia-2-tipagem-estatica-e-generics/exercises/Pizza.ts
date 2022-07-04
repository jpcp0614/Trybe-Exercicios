import { PizzaSweet } from './PizzaSweet';
import { PizzaVegetarian } from './PizzaVegetarian';
import { PizzaCommon } from './PizzaCommon';

export type Slices = 4 | 6 | 8;

export interface Pizza {
  flavor: string;
  slices?: Slices;
}

const Calabresa: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 6,
}
console.log(`Pizza de ${Calabresa.flavor} com ${Calabresa.slices} fatias`);

const Marshmallow: PizzaSweet = {
  flavor: 'Marshmallow',
  slices: 4,
}
console.log(`Pizza de ${Marshmallow.flavor} com ${Marshmallow.slices} fatias`);

const Palmito: PizzaVegetarian = {
  flavor: 'Palmito',
  slices: 8,
}
console.log(`Pizza de ${Palmito.flavor} com ${Palmito.slices} fatias`);