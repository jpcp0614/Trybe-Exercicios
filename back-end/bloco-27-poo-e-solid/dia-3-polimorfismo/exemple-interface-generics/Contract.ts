export class Contract <T> {
  private static _number = 0;

  constructor(public broker: T) {}

  public static get number() {
    return this._number;
  }

}

