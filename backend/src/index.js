import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";

console.log(process.env.MONGODB_CONNECTION_STRING);
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).catch( error => console.log(error) );

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(port, () => {
    console.log(`App is now running in port ${port}`);
})
