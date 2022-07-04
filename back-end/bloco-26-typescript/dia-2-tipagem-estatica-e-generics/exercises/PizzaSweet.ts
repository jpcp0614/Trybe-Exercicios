import { Pizza } from './Pizza';
import { Sweet } from './PizzaFlavors';

export interface PizzaSweet extends Pizza {
  flavor: Sweet,
  slices: 4,
}