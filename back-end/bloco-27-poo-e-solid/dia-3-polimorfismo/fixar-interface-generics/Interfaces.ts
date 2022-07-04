export interface ICharacter {
  name: string;
  specialMove: string;
}

export interface IDbCharacter extends ICharacter {
  id: number;
}

export interface IModel {
  create: (character: ICharacter) => Promise<IDbCharacter>
  getAll: () => Promise<IDbCharacter[]>
  getById: (id: number) => Promise<IDbCharacter>
  update: (id: number, character: ICharacter) => Promise<IDbCharacter>
  delete: (id: number) => Promise<IDbCharacter>
}