import IShape from "./IShape";

export default class Circle implements IShape {
  constructor(private _radius: number) {
      this._radius;
  }
  
  public get radius(): number {
      return this._radius;
  }

  public get area(): number {
      return Number((Math.PI ** 2).toFixed(2));
  }
}
