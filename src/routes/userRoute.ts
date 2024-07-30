import { Router } from 'express';
import * as userController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/:id', userController.getUser);

userRouter.post('/auth', userController.authenticate);

export default userRouter;
