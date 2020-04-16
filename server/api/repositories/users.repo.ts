import db from '../models';
import { Model } from 'sequelize/types';

class UsersRepo {
  async getAll(): Promise<Model[]> {
    try {
      const users = await db.User.findAll<Model>({
        include: [db.Profile],
      });

      return users;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default new UsersRepo();
