import { Document } from 'mongoose'; // devido ao ObjectId

export default interface IWorldCup extends Document {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: Array<string>,
  bestPlayer?: string,
  bestGoalKeeper?: string,
  bestYoungPlayer?: string,
}