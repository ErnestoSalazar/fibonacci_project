import { Request, Response } from 'express';
import { fibonacyService } from '../../services/fibonnacyService';
import { GetFibonnacyControllerParams } from './types';

export function getFibonnaci(req: Request<GetFibonnacyControllerParams>, res: Response) {
  const { requestedNumber } = req.params;

  const result = fibonacyService.getFibonnaci({
    requestedNumber: parseInt(requestedNumber)
  });

  res.json({
    fibonnaciNumber: result
  });
}
