import IGenericStorage from './IGenericStorage';
import MemoryStorage from './MemoryStorage';

export default class PostService {
  private db: IGenericStorage

  constructor(db: IGenericStorage = new MemoryStorage()) {
    this.db = db;
  }

  public getPosts(): string[] {
    return this.db.read();
  }

  public setPost(record: string) {
    this.db.insert(record);
  }
}