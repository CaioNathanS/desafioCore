import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

import data from '../data.js';



import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await User.remove({});
      const createdUsers = await User.insertMany(data.users);
      res.send({ createdUsers });
    })
  );

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
      
      
      const user = await User.findOne({ email: req.body.email } );
      const user2 = await User.findOne({ name: req.body.name } );
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
            
            
            token: generateToken(user),
          });
          return;
        }
      }
      if (user2) {
        if (bcrypt.compareSync(req.body.password, user2.password)) {
          res.send({
            _id: user2._id,
            name: user2.name,
            isAdmin: user2.isAdmin,
            
            
            token: generateToken(user2),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Email ou senha Inválidos' });
      
    })
  );

userRouter.get(
    '/',
    
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  );


export default userRouter;
