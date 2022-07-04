import IShape from './IShape';

export default class TotalArea {
  constructor(private _shapes: IShape[]) {
    this._shapes;
  }

  public get totalArea(): number {
    return this._shapes.reduce((acc, shape) => acc + shape.area, 0);
  }
}