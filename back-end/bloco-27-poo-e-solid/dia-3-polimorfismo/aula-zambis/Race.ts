import { Item } from './Interfaces';

class Race {
  private _height: number;
  private _languages: string[];
  private _inventory: Item[];

  constructor(private _name: string) {
    this._height = parseFloat((Math.random() * (2.1 - 0.6) + 0.6).toFixed(2));
    this._languages = ['westron'];
    this._inventory = [{ name: 'rock', weight: 0.1}]
  }

  
}