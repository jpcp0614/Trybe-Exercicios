import { model as createModel } from 'mongoose';
import WorldCupSchema from '../schemas/WorldCupSchema';
import IWorldCup from '../interface/IWorldCup';

class WorldCupModel {
  constructor(private worldCupModel = createModel('tournaments', WorldCupSchema)) {}

  public getWorldCup = async (): Promise<IWorldCup[] | undefined> => {
    const worldCup = await this.worldCupModel.find();
    return worldCup;
  }

  public getWorldCupByYear = async (year: number): Promise<IWorldCup[] | undefined> => {
    const worldCup = await this.worldCupModel.find({ year });
    return worldCup;
  }

  public createWorldCup = async (worldCupData: IWorldCup): Promise<IWorldCup | unknown> => {
    const newWorldCup = await this.worldCupModel.create(worldCupData);
    return newWorldCup;
  }

  public updateWorldCup = async (year: number, updateWorldCup: object): Promise<IWorldCup | null> => {
    const worldCup = await this.worldCupModel.findOneAndUpdate({ year }, { ...updateWorldCup }, { new: true });
    return worldCup;
  }

  public deleteWorldCup = async (year: number): Promise<IWorldCup | null> => {
    const worldCup = await this.worldCupModel.findOneAndDelete({ year });
    return worldCup;
  }
}

export default WorldCupModel;