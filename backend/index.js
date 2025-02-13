import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log(err)
});

const app = express();

// middleware
app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});