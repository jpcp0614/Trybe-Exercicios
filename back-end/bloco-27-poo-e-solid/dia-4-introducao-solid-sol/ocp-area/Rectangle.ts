import IShape from "./IShape";

export default class Rectangle implements IShape {
  constructor(private _width: number, private _height: number) {
      this._width;
      this._height;
  }
  
  public get width(): number {
      return this._width;
  }

  public get height(): number {
      return this._height;
  }

  public get area(): number {
      return Number((this._width * this._height).toFixed(2));
  }
}