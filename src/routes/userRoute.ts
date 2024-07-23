import { Router } from 'express';
import * as userController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/:id', userController.getUser);

export default userRouter;
