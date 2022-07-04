import { Request, Response, NextFunction } from 'express';
import WorldCupService from '../services/WorldCupService';
import errorMessages from '../helpers/Messages';

class WorldCupController {
  constructor(private worldCupService = new WorldCupService()) {}

  public getWorldCup = async (_req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    try {
      const worldCup = await this.worldCupService.getWorldCup();
      return res.status(200).json(worldCup);
    } catch (err: unknown) {
      console.log('DEU RUIM: ', err);
      return res.status(500).send({ error: errorMessages.internalError });
    }
  }

  public getWorldCupByYear = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    try {
      const { year } = req.params;
      const worldCup = await this.worldCupService.getWorldCupByYear(+year);
      
      if(worldCup?.length === 0) {
        return res.status(404).send({ error: errorMessages.notFoundError });
      }

      return res.status(200).json(worldCup);
    } catch (err: unknown) {
      console.log('DEU RUIM: ', err);
      return res.status(500).send({ error: errorMessages.internalError });
    }
  }

  public createWorldCup = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    try {
      const { body: worldCupData } = req;
      const worldCup = await this.worldCupService.createWorldCup(worldCupData);
      return res.status(201).json(worldCup);
    } catch ({ _message }) {
      if (_message === errorMessages.validationError) {
        return res.status(400).send({ error: _message });
      }
      return res.status(500).send({ error: errorMessages.internalError });
    }
  }

  public updateWorldCup = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    try {
      const { body: updateWorldCup, params: { year } } = req;
      const worldCup = await this.worldCupService.updateWorldCup(+year, updateWorldCup);
      if (!worldCup) {
        return res.status(404).send({ error: errorMessages.notFoundError });
      }
      return res.status(200).json(worldCup);
    } catch (err: unknown) {
      console.log('DEU RUIM: ', err);
      return res.status(500).send({ error: errorMessages.internalError });
    }
  }

  public deleteWorldCup = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    try {
      const { params: { year } } = req;
      const worldCup = await this.worldCupService.deleteWorldCup(+year);
      if (!worldCup) {
        return res.status(404).send({ error: errorMessages.notFoundError });
      }
      return res.status(204).json();
    } catch (err: unknown) {
      console.log('DEU RUIM: ', err);
      return res.status(500).send({ error: errorMessages.internalError });
    }
  }
}

export default new WorldCupController();