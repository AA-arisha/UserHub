import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserByEmail } from '../queries/registerUser.js';
dotenv.config();

export const authenticateFromCookie = async(req, res, next) => {
  const token = req.cookies.accessToken;
  // console.log(req.cookies.accessToken)
  if (!token) {
    return res.status(401).json({ message: 'No token found in cookies' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // ✅ verify signature
    req.user =await findUserByEmail(decoded.Email);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
