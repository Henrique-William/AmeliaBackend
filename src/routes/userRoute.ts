import { Router } from 'express';
import * as userController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/:id', userController.getUser);

userRouter.get('/auth', userController.authenticate);

export default userRouter;
