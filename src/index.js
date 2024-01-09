import express from 'express';
import mongoose from 'mongoose';
import rootRouter from './combainRouters.js';

 const app = express();

mongoose.connect('mongodb+srv://pershibavelusamy06:pershiba123@elredmongolearnings.uev0ssg.mongodb.net/');

// db.then(() => {
//     console.log('Database connected successfully...');
// }).catch((err) => {
//     console.error('Database connection failed!', err); // Corrected error handling
// });


const db = mongoose.connection;
db.on('error', (err)=>{console.log( 'MongoDB connection error:',err)});
db.once('open', () => {
  console.log('Connected to MongoDB');
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', rootRouter);

app.listen(5000, () => {
    console.log("Node server is running in port 5000");
})
app.timeout = 60000;

export default app