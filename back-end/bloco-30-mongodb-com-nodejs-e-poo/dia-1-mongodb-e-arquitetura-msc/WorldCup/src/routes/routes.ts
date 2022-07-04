import { Router } from 'express';
import WorldCupController from '../controllers/WorldCupController';

const router = Router();

const wordCup = '/';
const wordCupYear = '/:year';

router.get(wordCup, WorldCupController.getWorldCup);
router.get(wordCupYear, WorldCupController.getWorldCupByYear);
router.post(wordCup, WorldCupController.createWorldCup);
router.patch(wordCupYear, WorldCupController.updateWorldCup);
router.delete(wordCupYear, WorldCupController.deleteWorldCup);

export default router;