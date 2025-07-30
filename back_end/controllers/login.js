import { findUserByEmail } from "../queries/registerUser.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'
dotenv.config();

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await findUserByEmail(Email);
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    
    const accessToken = jwt.sign(
      { id: user.id, Email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRY }
    );

    return res.status(200).json({ message: 'User logged in successfully', accessToken , user }); // ✅ Use 200
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
