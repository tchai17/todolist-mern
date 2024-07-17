import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";
import { Task } from './models/task.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // middleware for parsing request body

app.get('/', (req, res) => {
	res.send('Hello, World!');
})

// Create new task and save to database
app.post('/tasks', async (req, res) => {
	try{
		// check if task attributes are received
		if (
			!req.body.description ||
			!req.body.isDone ||
			!req.body.createdDate
		) {
			return res.status(400).send({
				message:'Some missing fields: description, isDone',
			})
		}
		// save task attributes
		const newTask = {
			description: req.body.description,
			isDone: req.body.isDone,
			createdDate: req.body.createdDate,
		};

		// create task object
		const task = await Task.create(newTask);

		// return success code and created task
		return res.status(200).send(task);

	} catch (error) {
		console.log(error.message);
		res.status(500).send({message: error.message});
	}
});

// Get all tasks from database
app.get('/tasks', async (req, res) => {
	try {
		const tasks = await Task.find({});
		return res.status(200).json(tasks);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({message: error.message});
	}
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
      console.log('App connected to database');
       app.listen(port, () => {
          console.log(`App is now running in port ${port}`);
      })
  })
  .catch( error => console.log(error) );






