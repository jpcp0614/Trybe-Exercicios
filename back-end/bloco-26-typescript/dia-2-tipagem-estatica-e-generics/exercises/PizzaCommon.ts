import { Pizza } from './Pizza';
import { Common } from './PizzaFlavors';

export interface PizzaCommon extends Pizza {
  flavor: Common,
}