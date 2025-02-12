import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js'
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log(err)
});

const app = express();

app.use('/api/user', userRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});