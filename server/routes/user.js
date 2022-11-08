import express from 'express';
import { createUser, validateUser } from '../controllers/users.js';
const userRouter = express.Router();

userRouter.post('/signup', createUser);

userRouter.post('/login', validateUser)

export default userRouter;