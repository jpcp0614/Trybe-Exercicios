import { Schema, Types } from 'mongoose';
import IWorldCup from '../interface/IWorldCup';

const WorldCupSchema = new Schema<IWorldCup>(
  {
    id: { type: Types.ObjectId },
    year: { type: Number, required: true },
    hostCountry: { type: String, required: true },
    champions: { type: String, required: true },
    runnerUp: { type: String, required: true },
    editionGoals: { type: Number, required: true },
    editionStrikers: { type: [{ type: String }], required: true },
    bestPlayer: { type: String, required: false },
    bestGoalKeeper: { type: String, required: false },
    bestYoungPlayer: { type: String, required: false },
    },
    { versionKey: false, }); // versionamento do documento

export default WorldCupSchema;