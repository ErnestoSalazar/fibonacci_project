import express from 'express';
import { getFibonnaci } from '../controllers/fibonnaciController/fibonacciController';

const router = express.Router();


router.get('/:requestedNumber', getFibonnaci);

export default router;
