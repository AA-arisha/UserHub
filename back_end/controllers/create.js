import bcrypt from 'bcrypt';
import { isRegisteredUser, CreateUser } from '../queries/registerUser.js';

export const Create = async (req, res) => {
  try {
    const { Name, Email, Password, roles, creator } = req.body;
    console.log("Name", Name, "Email", Email, "Password", Password, "roles", roles,"creator", creator);
    
    if (!Name || !Email || !Password || !roles || !creator) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const userExists = await isRegisteredUser(Email);
    if (userExists) {
      return res.status(400).json({ message: "User already created" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    // Save user
    await CreateUser(Name, Email, hashedPassword, roles, creator);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({
      message: 'Server error during registration',
      error: err.message
    });
  }
};
