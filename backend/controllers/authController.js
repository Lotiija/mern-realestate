import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10); // Generate a salt
  const hashedPassword = await bcrypt.hash(password, salt);
  // const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword })
  try {
    await newUser.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    next(error);
  }
};