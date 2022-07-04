import { ICharacter, IDbCharacter, IModel } from './Interfaces';

const db: IDbCharacter[] = [];


export class LocalModel implements IModel {

  async create(character: ICharacter): Promise<IDbCharacter> {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter: IDbCharacter = {
      id: lastId + 1,
      ...character
    };
    db.push(newCharacter);
    return newCharacter;
  }

  async getAll() {
    return db;
  }

  async getById(id: number) {
    const getId = db.findIndex(c => c.id === id);
    if (getId < 0) {
      throw new Error('Character not found');
    }
    return db[getId];
  }

  async update(id: number, character: ICharacter) {
    const getId = db.findIndex(c => c.id === id);
    if (getId < 0) {
      throw new Error('Character not found');
    }
    const updatedCharacter: IDbCharacter = {
      id,
      ...character
    };
    db[getId] = updatedCharacter;
    return updatedCharacter;
  }

  async delete(id: number) {
    const getId = db.findIndex(c => c.id === id);
    if (getId < 0) {
      throw new Error('Character not found');
    }
    const deletedCharacter: IDbCharacter = db[getId];
    db.splice(getId, 1);
    return deletedCharacter;
  }
}