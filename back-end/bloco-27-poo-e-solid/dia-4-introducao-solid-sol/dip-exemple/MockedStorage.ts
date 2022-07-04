import IGenericStorage from "./IGenericStorage";

export default class MockedStorage implements IGenericStorage {
  read(): string[] {
    throw new Error("Method not implemented.");
  }
  insert(record: string) {
    throw new Error("Method not implemented.");
  }
}