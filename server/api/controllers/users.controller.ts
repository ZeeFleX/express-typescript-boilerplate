import { Request, Response } from 'express';
import db from '../models/';
import UsersRepo from '../repositories/users.repo';

interface Get {
  all: MiddlewareParams;
}

interface Post {
  createUser: MiddlewareParams;
}

interface MiddlewareParams {
  (req: Request, res: Response): Promise<void>;
}

export class UsersController {
  get(): Get {
    return {
      all: async (req: Request, res: Response): Promise<void> => {
        const users = await UsersRepo.getAll();
        res.json(users);
      },
    };
  }
  post(): Post {
    return {
      createUser: async (req: Request, res: Response): Promise<void> => {
        const users = await db.User.findAll();
        res.json(users);
      },
    };
  }
}

export default new UsersController();
