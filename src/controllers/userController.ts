import { Request, Response } from 'express';
import * as userService from '../services/userService';

export async function getUser(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const user = await userService.getUserByID(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
};
