import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";
import router from './routes/tasks.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // middleware for parsing request body

app.get('/', (req, res) => {
	res.send('Hello, World!');
})

app.use('/tasks', router);

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
      console.log('App connected to database');
       app.listen(port, () => {
          console.log(`App is now running in port ${port}`);
      })
  })
  .catch( error => console.log(error) );






