export default interface IGenericStorage {
  read(): string[];
  insert(record: string);
}