import WorldCupModel from '../models/WorldCupModel';
import IWorldCup from '../interface/IWorldCup';

class WorldCupService {
  constructor(private worldCupModel = new WorldCupModel()) {}

  public getWorldCup = async (): Promise<IWorldCup[] | undefined> => {
    const worldCup = await this.worldCupModel.getWorldCup();
    return worldCup;
  }

  public getWorldCupByYear = async (year: number): Promise<IWorldCup[] | undefined> => {
    const worldCup = await this.worldCupModel.getWorldCupByYear(year);
    return worldCup;
  }

  public createWorldCup = async (worldCupData: IWorldCup): Promise<IWorldCup | unknown> => {
    const newWorldCup = await this.worldCupModel.createWorldCup(worldCupData);
    return newWorldCup;
  }

  public updateWorldCup = async (year: number, updateWorldCup: object): Promise<IWorldCup | null> => {
    const worldCup = await this.worldCupModel.updateWorldCup(year, updateWorldCup);
    return worldCup;
  }

  public deleteWorldCup = async (year: number): Promise<IWorldCup | null> => {
    const worldCup = await this.worldCupModel.deleteWorldCup(year);
    return worldCup;
  }
}

export default WorldCupService;