import { Application } from 'express';
import UsersRouter from './users.router';

export default function routes(app: Application): void {
  app.use('/api/v1/', UsersRouter);
}
