import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';




import dotenv from 'dotenv';
import path from 'path';

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/desafio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false,
});

app.use('/api/users', userRouter);




const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });



app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});





