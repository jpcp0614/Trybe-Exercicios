import IGenericStorage from "./IGenericStorage";

export default class MemoryStorage implements IGenericStorage {
  private _storage: string[]

  constructor() {
    this._storage = [];
  }

  public read(): string[] {
    return this._storage;
  }

  public insert(record: string) {
    this._storage.push(record);
  }
}