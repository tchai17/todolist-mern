import mongoose from 'mongoose';

// refer to docs: https://mongoosejs.com/docs/guide.html
// more references: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

// not adding id, as mongoose will automatically add an id property for schemas
// define the schema for the task object below
const taskSchema = new mongoose.Schema({
    description: String,
    isDone: Boolean,
    createdDate: Date 
});

// we need to create a model based on the above schema
// const Task = new mongoose.model('Task', taskSchema);

export const Task = new mongoose.model('Task', taskSchema);