import bcrypt from 'bcrypt';
import { InsertUser, isRegisteredUser } from '../queries/registerUser.js';
import { sendRegistrationEmail } from './mailService.js';

export const registerPerson = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    if (await isRegisteredUser(Email)) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
    await InsertUser(Name, Email, hashedPassword);
    sendRegistrationEmail(Name ,Email);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
};
