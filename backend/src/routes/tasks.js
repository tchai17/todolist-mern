import express from 'express';
import { Task } from '../models/task.js';
import moment from 'moment';

const router = express.Router();

// Create new task and save to database
router.post('/tasks', async (req, res) => {
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

		let dateString = req.body.createdDate;
		let formattedDate = moment(dateString, "DD/MM/YYYY").toDate(); // change string to date object

		const newTask = {
			description: req.body.description,
			isDone: req.body.isDone,
			createdDate: formattedDate,
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
router.get('/tasks', async (req, res) => {
	try {
		const tasks = await Task.find({});
		return res.status(200).json(tasks);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({message: error.message});
	}
});

// Update task in the database
router.put('/tasks/:id', async (req, res) => {
	try {

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

		// find task in database and update
		const { id } = req.params;
		const result = await Task.findByIdAndUpdate(id, req.body);

		if (!result) {
			return res.status(404). json({message: 'Task not found'});
		}

		return res.status(200).send({ message: 'Task updated successfully'});

	} catch (error) {
		console.log(error.message);
		res.status(500).send({message: error.message});
	}
});

// Delete task in database
router.delete('/tasks/:id', async (req, res) => {
	try {
		// find task in database and delete
		const { id } = req.params;
		const result = await Task.findByIdAndDelete(id, req.body);

		if (!result) {
			return res.status(404). json({message: 'Task not found'});
		}

		return res.status(200).send({ message: 'Task deleted successfully'});

	} catch (error) {
		console.log(error.message);
		res.status(500).send({message: error.message});
	}
});

export default router;