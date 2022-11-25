import { Request, Response, NextFunction } from 'express';
const fs = require('fs');

export const dirChecker = (req: Request, res: Response, next: NextFunction) => {
  console.log('e');
  fs.mkdir('./dist/public/uploads', { recursive: true }, (err: any) => {
    if (err) throw err;
    else {
      next();
    }
  });
};
