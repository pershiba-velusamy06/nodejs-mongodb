import express from 'express';
import mongoose from 'mongoose';
 import rootRouter from './combainRouters.js';

const app = express();

export const db = mongoose.connect('mongodb+srv://pershibavelusamy06:pershiba123@elredmongolearnings.uev0ssg.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.then(() => {
    console.log('Database connected successfully...');
}).catch((err) => {
    console.error('Database connection failed!', err); // Corrected error handling
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', rootRouter);

app.listen(5000, () => {
    console.log("Node server is running in port 5000");
})
