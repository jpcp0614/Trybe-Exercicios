import { Pizza } from './Pizza';
import { Vegetarian } from './PizzaFlavors';

export interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian,
}