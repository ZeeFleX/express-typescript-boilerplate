import express from 'express';
import UsersController from '../controllers/users.controller';

export default express.Router().get('/', UsersController.get().all);
//   .post('/', UsersController.post().createUser);
