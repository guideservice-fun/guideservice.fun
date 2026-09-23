import { type Request, type Response } from 'express';

/**
 * Reports whether the API process is available to accept requests.
 */
export function health(_req: Request, res: Response): Response {
  return res.json({ status: 'ok' });
}
